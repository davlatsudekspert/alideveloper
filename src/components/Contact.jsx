import { useEffect, useState } from "react";
import { TELEGRAM_USERNAME, PHONE, PHONE_HREF, BOT_TOKEN, BOT_CHAT_ID } from "../constants";
import { useLang } from "../i18n";

export default function Contact() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function onPrefill(e) {
      setMessage(e.detail);
      document.getElementById("aloqa")?.scrollIntoView({ behavior: "smooth" });
    }
    window.addEventListener("prefill-contact", onPrefill);
    return () => window.removeEventListener("prefill-contact", onPrefill);
  }, []);

  async function sendToTelegram(e) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError(t("contact.errEmpty"));
      return;
    }
    setError("");
    setSending(true);
    setSent(false);
    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: BOT_CHAT_ID,
          text: `${t("contact.botMsg")}\n\n👤 ${t("contact.botName")}: ${name}\n💬 ${t("contact.botText")}: ${message}`,
        }),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(t("contact.errFail"));
      } else {
        setSent(true);
        setName("");
        setMessage("");
      }
    } catch {
      setError(t("contact.errFail"));
    } finally {
      setSending(false);
    }
  }

  function copyPhone() {
    navigator.clipboard.writeText(PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <section id="aloqa" className="py-16 px-4 sm:py-24 sm:px-6 bg-ink text-paper">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-sky text-sm mb-3">{t("contact.tag")}</p>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl mb-4">
          {t("contact.title")}
        </h2>
        <p className="text-paper/60 mb-12 max-w-md">{t("contact.sub")}</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <a
              href={`https://t.me/${TELEGRAM_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between border border-white/10 rounded-lg px-5 py-4 hover:border-sky transition-colors"
            >
              <span className="font-mono text-sm text-paper/70">Telegram</span>
              <span className="text-sky">@{TELEGRAM_USERNAME}</span>
            </a>
            <div className="flex items-center justify-between border border-white/10 rounded-lg px-5 py-4">
              <a href={`tel:${PHONE_HREF}`} className="font-mono text-sm text-paper/70 hover:text-sky transition-colors">
                {t("contact.phone")}
              </a>
              <div className="flex items-center gap-3">
                <span className="text-sky">{PHONE}</span>
                <button
                  onClick={copyPhone}
                  type="button"
                  className="font-mono text-[11px] text-paper/50 hover:text-sky transition-colors"
                >
                  {copied ? t("contact.copied") : t("contact.copy")}
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={sendToTelegram} className="space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("contact.namePlaceholder")}
              className="w-full bg-ink2 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-sky"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("contact.msgPlaceholder")}
              rows={4}
              className="w-full bg-ink2 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-sky resize-none"
            />
            {error && <p className="text-sky text-xs font-mono">{error}</p>}
            {sent && <p className="text-paper/50 text-xs font-mono">{t("contact.sent")}</p>}
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-sky text-ink font-mono text-sm font-medium py-3 rounded hover:bg-white transition-colors disabled:opacity-60"
            >
              {sending ? t("contact.sending") : t("contact.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
