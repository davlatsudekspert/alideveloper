import { useEffect, useRef, useState } from "react";
import { X, Send, Sparkles, MessageCircle } from "lucide-react";
import { useLang } from "../i18n";

const MAX_HISTORY = 6;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function askAi(messages, system) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 90000);
  try {
    const history = messages.slice(-MAX_HISTORY);
    try {
      for (let attempt = 0; attempt < 3; attempt++) {
        const res = await fetch("/api/ai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "nvidia/gpt-oss-120b",
            messages: [{ role: "system", content: system }, ...history],
          }),
          signal: controller.signal,
        });
        if (res.status === 429) {
          await sleep(2000 * (attempt + 1));
          continue;
        }
        if (res.ok) {
          const data = await res.json();
          const content = data?.choices?.[0]?.message?.content;
          if (content) return content.trim();
        }
        throw new Error("proxy");
      }
    } catch {
      /* fall through to the direct API */
    }
    const lines = [system];
    history.forEach((m) => {
      const role = m.role === "user" ? "Foydalanuvchi" : "Yordamchi";
      lines.push(`${role}: ${m.content}`);
    });
    lines.push("Yordamchi:");
    const res = await fetch(
      `https://text.pollinations.ai/${encodeURIComponent(lines.join("\n"))}`,
      { signal: controller.signal }
    );
    const text = await res.text();
    if (!res.ok || text.trimStart().startsWith("{")) throw new Error(text);
    return text.trim();
  } finally {
    clearTimeout(timer);
  }
}

export default function AiChat({ open, onClose }) {
  const { t } = useLang();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "assistant", content: t("chat.welcome") }]);
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy, open]);

  if (!open) return null;

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setBusy(true);
    try {
      const reply = await askAi(next, t("chat.system"));
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: t("chat.error") }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm rounded-2xl bg-ink text-paper ring-1 ring-white/10 shadow-2xl shadow-black/40 overflow-hidden flex flex-col">
      <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-ink2">
        <div className="relative w-9 h-9 rounded-full bg-sky/15 text-sky flex items-center justify-center shrink-0">
          <Sparkles size={17} strokeWidth={2} />
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-sky ring-2 ring-ink2" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display font-semibold text-sm">{t("chat.title")}</p>
          <p className="font-mono text-[11px] text-paper/40 truncate">{t("chat.subtitle")}</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Yopish"
          className="w-8 h-8 rounded-full flex items-center justify-center text-paper/50 hover:text-paper hover:bg-white/10 transition-colors"
        >
          <X size={16} strokeWidth={2} />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[240px] max-h-[42vh]">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed rounded-2xl ${
                m.role === "user"
                  ? "bg-sky text-ink rounded-br-sm"
                  : "bg-ink2 text-paper/85 ring-1 ring-white/10 rounded-bl-sm whitespace-pre-wrap"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {busy && (
          <div className="flex justify-start">
            <div className="bg-ink2 text-paper/60 ring-1 ring-white/10 px-3.5 py-2.5 text-sm rounded-2xl rounded-bl-sm flex items-center gap-1.5">
              <MessageCircle size={14} className="animate-pulse" />
              {t("chat.typing")}
            </div>
          </div>
        )}
      </div>

      <div className="px-3 py-3 border-t border-white/10 bg-ink2">
        <div className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") send();
            }}
            placeholder={t("chat.placeholder")}
            className="flex-1 bg-ink border border-white/10 rounded-full px-4 py-2.5 text-sm placeholder:text-muted focus:outline-none focus:border-sky"
          />
          <button
            onClick={send}
            disabled={busy || !input.trim()}
            aria-label={t("chat.send")}
            className="w-10 h-10 rounded-full bg-sky text-ink flex items-center justify-center hover:bg-white transition-colors disabled:opacity-50 shrink-0"
          >
            <Send size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
