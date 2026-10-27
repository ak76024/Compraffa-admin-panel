"use client";

import { useState } from "react";
import Link from "next/link";

const initialOrders = [
  { id: "#NX-1048", customer: "Olivia Martin", email: "olivia@example.com", product: "Pro Plan", amount: 249, status: "Completed", initials: "OM", color: "bg-violet-500/20 text-violet-300" },
  { id: "#NX-1047", customer: "Jackson Lee", email: "jackson@example.com", product: "Starter Plan", amount: 49, status: "Pending", initials: "JL", color: "bg-blue-500/20 text-blue-300" },
  { id: "#NX-1046", customer: "Isabella Chen", email: "isabella@example.com", product: "Business Plan", amount: 499, status: "Completed", initials: "IC", color: "bg-pink-500/20 text-pink-300" },
  { id: "#NX-1045", customer: "William Kim", email: "william@example.com", product: "Pro Plan", amount: 249, status: "Cancelled", initials: "WK", color: "bg-amber-500/20 text-amber-300" },
  { id: "#NX-1044", customer: "Sophia Patel", email: "sophia@example.com", product: "Pro Plan", amount: 249, status: "Completed", initials: "SP", color: "bg-emerald-500/20 text-emerald-300" },
  { id: "#NX-1043", customer: "Noah Williams", email: "noah@example.com", product: "Starter Plan", amount: 49, status: "Pending", initials: "NW", color: "bg-cyan-500/20 text-cyan-300" },
];

const navItems = [
  { name: "Overview", icon: "grid" },
  { name: "Analytics", icon: "chart" },
  { name: "Customers", icon: "users" },
  { name: "Orders", icon: "shopping" },
];

const revenue = [32, 45, 39, 59, 48, 70, 54, 64, 45, 82, 62, 75, 58, 92, 69, 84, 62, 100, 76, 89, 67, 94, 73, 85];

function Icon({ name, size = 20 }) {
  const paths = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    chart: <><path d="M3 3v18h18" /><path d="m7 14 4-4 4 3 6-8" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    shopping: <><path d="M6 7h12l2 14H4L6 7Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.6.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.6-.9l-1.7.6-1.4-2.4L7.5 15a8 8 0 0 1 0-1.9L6.1 12l1.4-2.4 1.7.6a8 8 0 0 1 1.6-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.6.9l1.7-.6 1.4 2.4-1.4 1.1a8 8 0 0 1-.1 1.9Z" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5M12 15V3" /></>,
    dots: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
    logout: <><path d="M10 17l5-5-5-5M15 12H3" /><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" /></>,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || paths.grid}
    </svg>
  );
}

function StatCard({ title, value, change, icon, positive, description }) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-[#10111e] p-5 transition-colors hover:border-violet-400/20 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-zinc-400">{title}</p>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-400/[0.08] text-violet-300">
          <Icon name={icon} size={19} />
        </div>
      </div>
      <p className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{value}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <span className={`rounded-md px-2 py-1 font-medium ${positive ? "bg-emerald-400/10 text-emerald-400" : "bg-red-400/10 text-red-400"}`}>
          {positive ? "↗" : "↘"} {change}
        </span>
        <span className="text-zinc-500">{description}</span>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Overview");
  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState("Last 7 days");
  const [statusFilter, setStatusFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [orders, setOrders] = useState(initialOrders);
  const [notice, setNotice] = useState("");

  const filteredOrders = orders.filter((order) => {
    const term = search.toLowerCase();
    const matchesSearch =
      order.customer.toLowerCase().includes(term) ||
      order.email.toLowerCase().includes(term) ||
      order.id.toLowerCase().includes(term);
    const matchesStatus = statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  function navigate(name) {
    setActivePage(name);
    setMenuOpen(false);
    setNotice("");
  }

  function exportOrders() {
    const rows = [
      ["Order ID", "Customer", "Email", "Product", "Amount (USD)", "Status"],
      ...filteredOrders.map((o) => [o.id, o.customer, o.email, o.product, o.amount, o.status]),
    ];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "nexora-orders.csv";
    a.click();
    URL.revokeObjectURL(url);
    setNotice("Your orders CSV has been exported.");
  }

  function changeOrderStatus(id) {
    setOrders((previous) =>
      previous.map((order) =>
        order.id === id
          ? { ...order, status: order.status === "Completed" ? "Pending" : "Completed" }
          : order
      )
    );
    setNotice("Order status updated locally.");
  }

  function handleLogout() {
    // Connect your authentication logout API here.
    window.location.href = "/";
  }

  const pageDescriptions = {
    Overview: "Here's what's happening with your business today.",
    Analytics: "Explore your business performance and revenue trends.",
    Customers: "Search and review your customer directory.",
    Orders: "Manage and track your latest customer orders.",
    Settings: "Manage your workspace preferences.",
  };

  return (
    <main className="min-h-screen bg-[#080914] font-sans text-white">
      {/* Mobile overlay */}
      {menuOpen && (
        <button
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-white/[0.07] bg-[#0c0d19] transition-transform duration-300 lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-[76px] items-center justify-between border-b border-white/[0.07] px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
              <span className="text-lg font-bold">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Nexora<span className="text-violet-400">.</span></span>
          </Link>
          <button onClick={() => setMenuOpen(false)} className="text-zinc-400 hover:text-white lg:hidden" aria-label="Close menu">
            <Icon name="close" />
          </button>
        </div>

        <div className="px-4 pt-8">
          <p className="mb-3 px-3 text-[10px] font-semibold tracking-[0.2em] text-zinc-500">WORKSPACE</p>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.name)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all ${activePage === item.name ? "border border-violet-400/10 bg-violet-500/10 font-medium text-violet-300" : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"}`}
              >
                <Icon name={item.icon} size={19} />
                {item.name}
                {item.name === "Orders" && (
                  <span className="ml-auto rounded-md bg-white/[0.06] px-2 py-0.5 text-[10px] text-zinc-400">{orders.length}</span>
                )}
              </button>
            ))}
          </nav>

          <p className="mb-3 mt-9 px-3 text-[10px] font-semibold tracking-[0.2em] text-zinc-500">PREFERENCES</p>
          <button
            onClick={() => navigate("Settings")}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all ${activePage === "Settings" ? "bg-violet-500/10 text-violet-300" : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"}`}
          >
            <Icon name="settings" size={19} />
            Settings
          </button>
        </div>

        <div className="mt-auto p-4">
          <div className="rounded-2xl border border-violet-400/10 bg-gradient-to-br from-violet-500/[0.12] to-indigo-500/[0.04] p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-400/15 text-violet-300">
              <Icon name="chart" size={18} />
            </div>
            <p className="text-sm font-semibold">Upgrade your plan</p>
            <p className="mt-1 text-xs leading-5 text-zinc-400">Unlock more insights and advanced analytics.</p>
            <button onClick={() => setNotice("Upgrade options will be available when billing is connected.")} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-violet-500 px-3 py-2.5 text-xs font-semibold transition hover:bg-violet-400">
              Explore plans <Icon name="arrow" size={14} />
            </button>
          </div>

          <button onClick={handleLogout} className="mt-4 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-400 transition hover:bg-red-400/10 hover:text-red-300">
            <Icon name="logout" size={19} /> Log out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="min-h-screen lg:pl-[260px]">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-white/[0.07] bg-[#080914]/90 px-4 backdrop-blur-xl sm:px-7 lg:px-9">
          <div className="flex min-w-0 items-center gap-3">
            <button onClick={() => setMenuOpen(true)} className="text-zinc-400 hover:text-white lg:hidden" aria-label="Open navigation">
              <Icon name="menu" size={23} />
            </button>
            <div>
              <p className="text-sm font-semibold">{activePage}</p>
              <p className="mt-0.5 hidden text-xs text-zinc-500 sm:block">Workspace / {activePage}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <label className="hidden h-10 w-52 items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 md:flex">
              <Icon name="search" size={17} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search orders..."
                className="w-full bg-transparent text-xs outline-none placeholder:text-zinc-600"
              />
              <span className="text-[10px] text-zinc-600">/</span>
            </label>

            <div className="relative">
              <button onClick={() => { setNotificationsOpen(!notificationsOpen); setProfileOpen(false); }} aria-label="Notifications" className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] text-zinc-400 transition hover:bg-white/[0.05] hover:text-white">
                <Icon name="bell" size={19} />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-[#080914] bg-violet-400" />
              </button>
              {notificationsOpen && (
                <div className="absolute right-0 top-12 z-50 w-72 rounded-2xl border border-white/10 bg-[#141522] p-4 shadow-2xl">
                  <p className="text-sm font-semibold">Notifications</p>
                  <p className="mt-3 text-sm text-zinc-400">You have new orders and account activity to review.</p>
                  <button onClick={() => { navigate("Orders"); setNotificationsOpen(false); }} className="mt-3 text-xs font-medium text-violet-300 hover:text-violet-200">View orders →</button>
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => { setProfileOpen(!profileOpen); setNotificationsOpen(false); }} className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-white/[0.05] sm:gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-bold">AD</div>
                <div className="hidden text-left sm:block">
                  <p className="text-xs font-semibold">Admin User</p>
                  <p className="mt-1 text-[10px] text-zinc-500">Administrator</p>
                </div>
              </button>
              {profileOpen && (
                <div className="absolute right-0 top-12 z-50 w-48 rounded-xl border border-white/10 bg-[#141522] p-2 shadow-2xl">
                  <button onClick={() => { navigate("Settings"); setProfileOpen(false); }} className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-zinc-300 hover:bg-white/[0.05]">Account settings</button>
                  <button onClick={handleLogout} className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-red-300 hover:bg-red-400/10">Log out</button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1600px] p-4 sm:p-7 lg:p-9">
          {/* Welcome section */}
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs text-violet-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                YOUR BUSINESS AT A GLANCE
              </div>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {activePage === "Overview" ? "Good morning, Admin" : activePage}
                {activePage === "Overview" && <span className="ml-2">✦</span>}
              </h1>
              <p className="mt-2 text-sm text-zinc-400">{pageDescriptions[activePage]}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <select value={period} onChange={(e) => setPeriod(e.target.value)} aria-label="Select date range" className="h-10 rounded-xl border border-white/10 bg-[#10111e] px-3 text-xs text-zinc-300 outline-none focus:border-violet-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
              <button onClick={exportOrders} className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-xs font-medium transition hover:bg-white/[0.07]">
                <Icon name="download" size={16} /> Export
              </button>
            </div>
          </div>

          {notice && (
            <div role="status" className="mb-5 flex items-center justify-between rounded-xl border border-violet-400/20 bg-violet-400/[0.08] px-4 py-3 text-sm text-violet-200">
              {notice}
              <button onClick={() => setNotice("")} aria-label="Dismiss message"><Icon name="close" size={17} /></button>
            </div>
          )}

          {/* Dashboard overview */}
          {activePage === "Overview" && (
            <>
              <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard title="Total Revenue" value="$48,294" change="+12.8%" positive description="vs. previous period" icon="chart" />
                <StatCard title="Total Customers" value="2,420" change="+8.2%" positive description="vs. previous period" icon="users" />
                <StatCard title="Total Orders" value="1,284" change="+4.6%" positive description="vs. previous period" icon="shopping" />
                <StatCard title="Conversion Rate" value="3.64%" change="-0.4%" positive={false} description="vs. previous period" icon="grid" />
              </section>

              <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.65fr_1fr]">
                {/* Revenue chart */}
                <div className="rounded-2xl border border-white/[0.07] bg-[#10111e] p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="text-base font-semibold">Revenue overview</h2>
                      <p className="mt-1 text-xs text-zinc-500">{period} · Revenue performance</p>
                    </div>
                    <span className="rounded-lg bg-emerald-400/10 px-2.5 py-1.5 text-xs font-medium text-emerald-400">↗ 12.8%</span>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <div className="flex h-[210px] flex-col justify-between pb-1 text-[10px] text-zinc-500">
                      <span>$10k</span><span>$7.5k</span><span>$5k</span><span>$2.5k</span><span>$0</span>
                    </div>
                    <div className="relative min-w-0 flex-1">
                      <div className="absolute inset-0 flex flex-col justify-between pb-1">
                        {[0, 1, 2, 3, 4].map((n) => <div key={n} className="border-t border-dashed border-white/[0.07]" />)}
                      </div>
                      <svg viewBox="0 0 720 210" preserveAspectRatio="none" className="relative h-[210px] w-full overflow-visible">
                        <defs>
                          <linearGradient id="revenueFill" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.32" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d={`M ${revenue.map((v, i) => `${(i / (revenue.length - 1)) * 720},${205 - v * 1.8}`).join(" L ")} L 720,210 L 0,210 Z`} fill="url(#revenueFill)" />
                        <path d={`M ${revenue.map((v, i) => `${(i / (revenue.length - 1)) * 720},${205 - v * 1.8}`).join(" L ")}`} fill="none" stroke="#a78bfa" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
                        {revenue.map((v, i) => (
                          <circle key={i} cx={(i / (revenue.length - 1)) * 720} cy={205 - v * 1.8} r="2.5" fill="#c4b5fd" />
                        ))}
                      </svg>
                      <div className="mt-2 flex justify-between text-[10px] text-zinc-500">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Traffic sources */}
                <div className="rounded-2xl border border-white/[0.07] bg-[#10111e] p-5 sm:p-6">
                  <h2 className="text-base font-semibold">Traffic sources</h2>
                  <p className="mt-1 text-xs text-zinc-500">Where your visitors come from</p>

                  <div className="my-8 flex justify-center">
                    <div className="relative flex h-44 w-44 items-center justify-center rounded-full" style={{ background: "conic-gradient(#8b5cf6 0% 42%, #6366f1 42% 70%, #22d3ee 70% 87%, #f59e0b 87% 100%)" }}>
                      <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#10111e]">
                        <span className="text-3xl font-semibold">24.8k</span>
                        <span className="mt-1 text-xs text-zinc-500">Total visitors</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: "Organic search", percent: "42%", color: "bg-violet-400" },
                      { name: "Direct traffic", percent: "28%", color: "bg-indigo-400" },
                      { name: "Social media", percent: "17%", color: "bg-cyan-400" },
                      { name: "Referral", percent: "13%", color: "bg-amber-400" },
                    ].map((source) => (
                      <div key={source.name} className="flex items-center justify-between gap-3 text-xs">
                        <span className="flex items-center gap-2.5 text-zinc-400"><span className={`h-2.5 w-2.5 rounded-sm ${source.color}`} />{source.name}</span>
                        <span className="font-medium text-zinc-200">{source.percent}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Analytics page */}
          {activePage === "Analytics" && (
            <section className="rounded-2xl border border-white/[0.07] bg-[#10111e] p-6">
              <h2 className="text-lg font-semibold">Revenue analytics</h2>
              <p className="mt-1 text-sm text-zinc-500">Visual breakdown for {period.toLowerCase()}.</p>
              <div className="mt-10 flex h-64 items-end gap-2 sm:gap-4">
                {revenue.slice(0, period === "Last 7 days" ? 7 : period === "Last 30 days" ? 14 : 24).map((v, i) => (
                  <div key={i} title={`Revenue index: ${v}`} className="group relative flex-1 rounded-t-md bg-gradient-to-t from-indigo-600/50 to-violet-400 transition hover:brightness-125" style={{ height: `${v}%` }}>
                    <span className="absolute -top-6 left-1/2 hidden -translate-x-1/2 text-xs text-violet-300 group-hover:block">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex justify-between text-xs text-zinc-500"><span>Start of period</span><span>End of period</span></div>
              <p className="mt-8 text-xs text-zinc-500">Illustrative analytics data. Connect your backend to display real metrics.</p>
            </section>
          )}

          {/* Customers page */}
          {activePage === "Customers" && (
            <section className="rounded-2xl border border-white/[0.07] bg-[#10111e] p-5 sm:p-6">
              <h2 className="text-lg font-semibold">Customers</h2>
              <p className="mt-1 text-sm text-zinc-500">Customers associated with recent orders.</p>
              <div className="mt-6 space-y-1">
                {initialOrders.filter((o) => `${o.customer} ${o.email}`.toLowerCase().includes(search.toLowerCase())).map((customer) => (
                  <div key={customer.id} className="flex items-center gap-3 rounded-xl px-3 py-4 transition hover:bg-white/[0.03]">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-semibold ${customer.color}`}>{customer.initials}</div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{customer.customer}</p>
                      <p className="mt-1 truncate text-xs text-zinc-500">{customer.email}</p>
                    </div>
                    <span className="hidden text-xs text-zinc-400 sm:block">{customer.product}</span>
                    <span className="text-sm font-medium">${customer.amount}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Orders page and recent orders */}
          {(activePage === "Overview" || activePage === "Orders") && (
            <section className="mt-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#10111e]">
              <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] p-5 sm:flex-row sm:items-center sm:p-6">
                <div>
                  <h2 className="text-base font-semibold">{activePage === "Overview" ? "Recent orders" : "All orders"}</h2>
                  <p className="mt-1 text-xs text-zinc-500">Track and manage your latest transactions.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <label className="flex h-9 items-center gap-2 rounded-lg border border-white/10 px-3 md:hidden">
                    <Icon name="search" size={15} />
                    <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="w-full bg-transparent text-xs outline-none" />
                  </label>
                  <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} aria-label="Filter orders by status" className="h-9 rounded-lg border border-white/10 bg-[#10111e] px-3 text-xs text-zinc-300 outline-none focus:border-violet-500">
                    <option>All</option>
                    <option>Completed</option>
                    <option>Pending</option>
                    <option>Cancelled</option>
                  </select>
                  {activePage === "Overview" && <button onClick={() => navigate("Orders")} className="flex h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-xs text-zinc-300 transition hover:bg-white/[0.05]">View all <Icon name="arrow" size={14} /></button>}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left">
                  <thead>
                    <tr className="border-b border-white/[0.06] text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                      <th className="px-6 py-4">Order</th>
                      <th className="px-4 py-4">Customer</th>
                      <th className="px-4 py-4">Product</th>
                      <th className="px-4 py-4">Amount</th>
                      <th className="px-4 py-4">Status</th>
                      <th className="px-4 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.slice(0, activePage === "Overview" ? 5 : undefined).map((order) => (
                      <tr key={order.id} className="border-b border-white/[0.04] transition hover:bg-white/[0.02]">
                        <td className="px-6 py-4 text-xs font-medium text-zinc-300">{order.id}</td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[10px] font-semibold ${order.color}`}>{order.initials}</div>
                            <div>
                              <p className="text-xs font-medium">{order.customer}</p>
                              <p className="mt-1 text-[10px] text-zinc-500">{order.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-xs text-zinc-400">{order.product}</td>
                        <td className="px-4 py-4 text-xs font-semibold">${order.amount.toFixed(2)}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium ${order.status === "Completed" ? "bg-emerald-400/10 text-emerald-400" : order.status === "Pending" ? "bg-amber-400/10 text-amber-400" : "bg-red-400/10 text-red-400"}`}>
                            <span className="h-1.5 w-1.5 rounded-full bg-current" />{order.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <button title="Toggle order status" onClick={() => changeOrderStatus(order.id)} className="rounded-lg p-2 text-zinc-500 transition hover:bg-violet-400/10 hover:text-violet-300">
                            <Icon name="dots" size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredOrders.length === 0 && (
                      <tr><td colSpan={6} className="px-6 py-12 text-center text-sm text-zinc-500">No orders match your search.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col gap-2 px-6 py-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
                <span>Showing {filteredOrders.length === 0 ? 0 : 1}–{activePage === "Overview" ? Math.min(filteredOrders.length, 5) : filteredOrders.length} of {filteredOrders.length} results</span>
                <span>Sample project data · Not connected to a database</span>
              </div>
            </section>
          )}

          {/* Settings page */}
          {activePage === "Settings" && (
            <section className="max-w-2xl rounded-2xl border border-white/[0.07] bg-[#10111e] p-6">
              <h2 className="text-lg font-semibold">Workspace settings</h2>
              <p className="mt-2 text-sm text-zinc-400">Manage your workspace preferences.</p>
              <div className="mt-6 space-y-5">
                <div><label className="mb-2 block text-xs text-zinc-400">Workspace name</label><input defaultValue="Nexora Workspace" className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm outline-none focus:border-violet-500" /></div>
                <div><label className="mb-2 block text-xs text-zinc-400">Admin email</label><input defaultValue="admin@nexora.example" type="email" className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm outline-none focus:border-violet-500" /></div>
                <button onClick={() => setNotice("Settings demo only. Connect an API to save these changes.")} className="rounded-xl bg-violet-600 px-5 py-3 text-xs font-semibold hover:bg-violet-500">Save changes</button>
              </div>
            </section>
          )}

          <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-white/[0.06] py-5 text-[10px] text-zinc-600 sm:flex-row">
            <span>© 2026 Nexora. All rights reserved.</span>
            <span>Admin Workspace · Demo version</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
