import { useMemo, useState } from "react";
import {
  ArrowDownUp, ArrowUpRight, BarChart3, ChevronDown, Compass,
  Flame, Globe2, Layers3, Menu, Plus, Search, ShieldCheck,
  Sparkles, Wallet, X
} from "lucide-react";

type Token = {
  symbol: string;
  name: string;
  address: string;
  price: string;
  change: string;
  positive: boolean;
  volume: string;
  liquidity: string;
  cap: string;
  initials: string;
  hue: string;
  tag: string;
};

const tokens: Token[] = [
  { symbol: "ATLAS", name: "Atlas Protocol", address: "0x83a…9f21", price: "$0.00482", change: "+18.42%", positive: true, volume: "$284.6K", liquidity: "$91.2K", cap: "$4.82M", initials: "A", hue: "violet", tag: "New" },
  { symbol: "NOVA", name: "Nova Network", address: "0x2bd…1a70", price: "$0.01831", change: "+12.08%", positive: true, volume: "$192.1K", liquidity: "$74.8K", cap: "$18.3M", initials: "N", hue: "blue", tag: "Trending" },
  { symbol: "ORBIT", name: "Orbit Finance", address: "0x91c…d420", price: "$0.00214", change: "-4.31%", positive: false, volume: "$86.4K", liquidity: "$32.5K", cap: "$2.14M", initials: "O", hue: "orange", tag: "DEX" },
  { symbol: "PULSE", name: "Pulse Labs", address: "0xf04…8b19", price: "$0.09120", change: "+8.76%", positive: true, volume: "$510.8K", liquidity: "$208.4K", cap: "$9.12M", initials: "P", hue: "green", tag: "Gainer" },
  { symbol: "MINT", name: "Mint Club", address: "0xa72…3c81", price: "$0.00086", change: "-2.14%", positive: false, volume: "$42.7K", liquidity: "$18.9K", cap: "$860K", initials: "M", hue: "pink", tag: "New" }
];

const tabs = ["Trending", "New", "Gainers", "Losers", "Market Cap", "Volume", "Liquidity"];

function App() {
  const [activeTab, setActiveTab] = useState("Trending");
  const [query, setQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const filtered = useMemo(() => {
    let list = tokens.filter((token) => (token.name + token.symbol).toLowerCase().includes(query.toLowerCase()));
    if (activeTab === "Gainers") list = list.filter((token) => token.positive);
    if (activeTab === "Losers") list = list.filter((token) => !token.positive);
    if (activeTab === "New") list = list.filter((token) => token.tag === "New");
    if (activeTab === "Market Cap") list = [...list].sort((a, b) => Number(b.cap.replace(/[$,MK]/g, "")) - Number(a.cap.replace(/[$,MK]/g, "")));
    return list;
  }, [activeTab, query]);

  return (
    <div className="min-h-screen bg-atlas-bg text-white">
      <header className="sticky top-0 z-30 border-b border-atlas-line/80 bg-atlas-bg/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 shadow-glow"><Layers3 size={21} /></div>
            <div><div className="text-lg font-bold tracking-[0.18em]">ATLAS</div><div className="-mt-1 text-[9px] tracking-[0.28em] text-atlas-muted">OPEN FINANCE</div></div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a className="nav-active" href="#explore">Explore</a><a href="#launch">Launch</a><a href="#pools">Pools</a><a href="#analytics">Analytics</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <button className="chain-button"><Globe2 size={15} /> Robinhood <ChevronDown size={14} /></button>
            <button className="wallet-button"><Wallet size={16} /> Connect Wallet</button>
          </div>
          <button className="rounded-lg border border-atlas-line p-2 md:hidden" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu">{mobileMenu ? <X /> : <Menu />}</button>
        </div>
        {mobileMenu && <div className="border-t border-atlas-line px-5 py-4 md:hidden"><div className="flex flex-col gap-4 text-sm text-slate-300"><a href="#explore">Explore</a><a href="#launch">Launch</a><a href="#pools">Pools</a><a href="#analytics">Analytics</a><button className="wallet-button w-full"><Wallet size={16} /> Connect Wallet</button></div></div>}
      </header>

      <main className="mx-auto max-w-[1440px] px-5 pb-20 pt-10 lg:px-10 lg:pt-14">
        <section className="relative overflow-hidden rounded-3xl border border-atlas-line bg-gradient-to-br from-[#17182d] via-[#111521] to-[#101724] px-6 py-9 md:px-10 md:py-12">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="relative z-10 max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1.5 text-xs text-violet-200"><Sparkles size={13} /> THE MULTI-CHAIN TOKEN ECOSYSTEM</div>
            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">Discover what’s <span className="gradient-text">next.</span></h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">Explore emerging tokens, launch your project, and trade across decentralized markets — all in one place.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#explore" className="primary-button"><Compass size={16} /> Explore tokens <ArrowUpRight size={15} /></a><a href="#launch" className="secondary-button"><Plus size={16} /> Launch a token</a></div>
          </div>
          <div className="relative z-10 mt-10 grid max-w-2xl grid-cols-3 gap-3 md:absolute md:bottom-10 md:right-10 md:mt-0 md:w-[440px]">
            {[["Live markets","—"],["Listed tokens","—"],["24h volume","—"]].map(([label, value]) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"><div className="text-[10px] uppercase tracking-wider text-slate-500">{label}</div><div className="mt-2 text-xl font-semibold">{value}</div><div className="mt-1 text-[10px] text-slate-600">Awaiting live data</div></div>)}
          </div>
        </section>

        <section id="explore" className="pt-14">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><div className="section-kicker"><Flame size={13} /> MARKET DISCOVERY</div><h2 className="mt-2 text-2xl font-semibold md:text-3xl">Explore tokens</h2><p className="mt-2 text-sm text-atlas-muted">Find your next opportunity across the ecosystem.</p></div><div className="relative w-full sm:w-72"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name or ticker..." className="search-input w-full" /></div></div>
          <div className="mb-5 flex gap-2 overflow-x-auto pb-2">{tabs.map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} className={`tab-button whitespace-nowrap ${activeTab === tab ? "tab-selected" : ""}`}>{tab}</button>)}</div>
          <div className="overflow-hidden rounded-2xl border border-atlas-line bg-atlas-panel/70">
            <div className="hidden grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 border-b border-atlas-line px-6 py-4 text-[10px] font-medium uppercase tracking-wider text-slate-500 md:grid"><span>Token</span><span>Price</span><span>24h change</span><span>Volume</span><span>Market cap</span></div>
            {filtered.map((token) => <div key={token.symbol} className="grid grid-cols-2 items-center gap-3 border-b border-atlas-line/70 px-4 py-4 last:border-0 hover:bg-white/[0.025] md:grid-cols-[2fr_1fr_1fr_1fr_1fr] md:gap-4 md:px-6">
              <div className="flex min-w-0 items-center gap-3"><div className={`token-avatar avatar-${token.hue}`}>{token.initials}</div><div className="min-w-0"><div className="flex items-center gap-2"><span className="font-semibold">{token.symbol}</span><span className="hidden rounded bg-white/5 px-1.5 py-0.5 text-[9px] text-slate-500 sm:inline">{token.tag}</span></div><div className="truncate text-xs text-slate-500">{token.name} · {token.address}</div></div></div>
              <div><div className="text-sm font-medium">{token.price}</div><div className="text-[10px] text-slate-600 md:hidden">Price</div></div>
              <div className={token.positive ? "text-sm font-medium text-atlas-green" : "text-sm font-medium text-rose-400"}>{token.change}<div className="text-[10px] font-normal text-slate-600 md:hidden">24h</div></div>
              <div className="hidden text-sm text-slate-300 md:block">{token.volume}</div><div className="hidden text-sm text-slate-300 md:block">{token.cap}</div>
            </div>)}
            {filtered.length === 0 && <div className="p-10 text-center text-sm text-slate-500">No matching tokens in this demo dataset.</div>}
            <div className="flex items-center justify-between border-t border-atlas-line px-5 py-4 text-xs text-slate-500"><span>Sample interface data · live market feed not connected</span><span>{filtered.length} assets</span></div>
          </div>
        </section>

        <section className="grid gap-4 pt-12 md:grid-cols-3">
          <FeatureCard id="launch" icon={<Plus size={18} />} title="Launch a token" description="Create and configure a token launch with transparent settings and creator rewards." />
          <FeatureCard id="pools" icon={<ArrowDownUp size={18} />} title="Liquidity pools" description="Explore pools, review liquidity depth, and manage positions across supported chains." />
          <FeatureCard id="analytics" icon={<BarChart3 size={18} />} title="Market analytics" description="Track token activity, volume, holders, and market movements in one dashboard." />
        </section>
        <footer className="mt-16 flex flex-col justify-between gap-3 border-t border-atlas-line pt-7 text-xs text-slate-600 md:flex-row"><span>© 2026 Atlas Protocol. Built for open markets.</span><span className="flex items-center gap-2"><ShieldCheck size={13} /> Test interface · No wallet or trading actions enabled</span></footer>
      </main>
    </div>
  );
}

function FeatureCard({ id, icon, title, description }: { id: string; icon: React.ReactNode; title: string; description: string }) {
  return <a id={id} href="#explore" className="feature-card group"><div className="mb-5 grid h-10 w-10 place-items-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">{icon}</div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-atlas-muted">{description}</p><div className="mt-5 flex items-center gap-1 text-xs text-violet-300">Explore module <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-1" /></div></a>;
}

export default App;
