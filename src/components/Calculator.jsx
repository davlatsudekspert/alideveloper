import { useMemo, useState } from "react";
import { packages, addons, rushMultiplier } from "../data";
import { useLang } from "../i18n";

const USD_RATE = 12700;

function formatSom(n, t) {
  return Math.round(n).toLocaleString("uz-UZ") + " " + t("money.som");
}

function formatUsd(n) {
  return "~$" + Math.round(n / USD_RATE).toLocaleString("en-US");
}

export default function Calculator() {
  const { t } = useLang();
  const [pkgId, setPkgId] = useState(packages[0].id);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [rush, setRush] = useState(false);

  const pkg = packages.find((p) => p.id === pkgId);

  const total = useMemo(() => {
    const addonsTotal = selectedAddons.reduce((sum, id) => {
      const a = addons.find((x) => x.id === id);
      return sum + (a ? a.price : 0);
    }, 0);
    const base = pkg.price + addonsTotal;
    return rush ? base * (1 + rushMultiplier) : base;
  }, [pkg, selectedAddons, rush]);

  function toggleAddon(id) {
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function order() {
    const addonLabels = selectedAddons.map((id) => t(`addon.${id}`)).filter(Boolean);
    const lines = [
      `${t("calc.msg.service")}: ${t(`pkg.${pkg.id}.title`)}`,
      addonLabels.length ? `${t("calc.msg.addons")}: ${addonLabels.join(", ")}` : null,
      rush ? t("calc.msg.rush") : null,
      `${t("calc.msg.total")}: ${formatSom(total, t)}`,
    ].filter(Boolean);
    window.dispatchEvent(new CustomEvent("prefill-contact", { detail: lines.join("\n") }));
  }

  return (
    <section id="hisoblash" className="py-16 px-4 sm:py-24 sm:px-6 bg-ink text-paper">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-sky text-sm mb-3">{t("calc.tag")}</p>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl mb-4 max-w-xl">
          {t("calc.title")}
        </h2>
        <p className="text-paper/60 mb-10 max-w-md">{t("calc.sub")}</p>

        <div className="grid md:grid-cols-2 gap-3 mb-8">
          {packages.map((p) => (
            <button
              key={p.id}
              onClick={() => setPkgId(p.id)}
              className={`text-left rounded-lg border px-5 py-4 transition-colors ${
                pkgId === p.id ? "border-sky bg-ink2" : "border-white/10 hover:border-white/30"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-display font-medium">{t(`pkg.${p.id}.title`)}</span>
                <span className="font-mono text-sm text-sky">{formatSom(p.price, t)}</span>
              </div>
              <p className="text-paper/50 text-xs">{t(`pkg.${p.id}.desc`)}</p>
            </button>
          ))}
        </div>

        <div className="mb-8">
          <p className="font-mono text-xs text-paper/50 mb-3">{t("calc.addons")}</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {addons.map((a) => (
              <label
                key={a.id}
                className={`flex items-center justify-between gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                  selectedAddons.includes(a.id) ? "border-sky bg-ink2" : "border-white/10 hover:border-white/30"
                }`}
              >
                <span className="flex items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedAddons.includes(a.id)}
                    onChange={() => toggleAddon(a.id)}
                    className="accent-sky"
                  />
                  {t(`addon.${a.id}`)}
                </span>
                <span className="font-mono text-xs text-paper/50">+{formatSom(a.price, t)}</span>
              </label>
            ))}
            <label
              className={`flex items-center justify-between gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                rush ? "border-sky bg-ink2" : "border-white/10 hover:border-white/30"
              }`}
            >
              <span className="flex items-center gap-3 text-sm">
                <input type="checkbox" checked={rush} onChange={() => setRush(!rush)} className="accent-sky" />
                {t("calc.rush")}
              </span>
              <span className="font-mono text-xs text-paper/50">+25%</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-white/10 pt-8">
          <div>
            <p className="font-mono text-xs text-paper/50 mb-1">{t("calc.total")}</p>
            <p className="font-display font-semibold text-3xl text-sky">{formatSom(total, t)}</p>
            <p className="font-mono text-xs text-paper/40 mt-1">{formatUsd(total)}</p>
          </div>
          <button
            onClick={order}
            className="bg-sky text-ink font-mono text-sm font-medium px-6 py-3 rounded hover:bg-white transition-colors"
          >
            {t("calc.order")}
          </button>
        </div>
      </div>
    </section>
  );
}
