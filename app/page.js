"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // TODO: Connect your backend authentication API here.
    setTimeout(() => {
      setLoading(false);
      setError("Authentication API is not connected yet.");
    }, 700);
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080914] px-4 py-8 font-sans text-white sm:px-8">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#10111e]/90 shadow-2xl shadow-black/40 backdrop-blur-xl lg:grid-cols-2">
        {/* Left branding panel */}
        <section className="relative hidden min-h-[680px] flex-col justify-between overflow-hidden border-r border-white/10 p-12 lg:flex xl:p-16">
          <div className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />

          <Link href="/" className="relative flex w-fit items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/25">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M4 17V7l8 6 8-6v10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span className="text-xl font-bold tracking-tight">
              Nexora<span className="text-violet-400">.</span>
            </span>
          </Link>

          <div className="relative my-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.08] px-4 py-2 text-xs font-medium text-violet-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
              YOUR WORKSPACE, REIMAGINED
            </div>

            <h1 className="max-w-lg text-5xl font-semibold leading-[1.15] tracking-tight xl:text-6xl">
              Everything you need,
              <span className="mt-2 block bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                all in one place.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
              Manage your workspace, track performance, and turn your
              insights into action with one powerful dashboard.
            </p>

            {/* Dashboard preview */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-xl shadow-black/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-500">TOTAL REVENUE</p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight">
                    $48,294.00
                  </p>
                </div>

                <span className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1.5 text-xs font-medium text-emerald-400">
                  ↗ 12.8%
                </span>
              </div>

              <div className="mt-7 flex h-24 items-end gap-2">
                {[
                  35, 53, 42, 68, 48, 76, 58, 86, 64,
                  95, 70, 100, 78, 88, 65, 92, 73, 100,
                ].map((height, i) => (
                  <div
                    key={i}
                    style={{ height: `${height}%` }}
                    className={`flex-1 rounded-t-sm ${
                      i === 11
                        ? "bg-violet-400"
                        : "bg-gradient-to-t from-indigo-600/30 to-violet-400/70"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-3 flex justify-between text-[10px] text-zinc-500">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
                <span>SUN</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-between text-xs text-zinc-500">
            <span>© 2026 Nexora Inc.</span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              All systems operational
            </span>
          </div>
        </section>

        {/* Right login panel */}
        <section className="flex min-h-[620px] flex-col justify-center px-6 py-12 sm:px-12 lg:px-14 xl:px-20">
          <div className="mx-auto w-full max-w-md">
            {/* Mobile logo */}
            <Link
              href="/"
              className="mb-12 flex w-fit items-center gap-3 lg:hidden"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600">
                <span className="text-lg font-bold">N</span>
              </div>

              <span className="text-xl font-bold">
                Nexora<span className="text-violet-400">.</span>
              </span>
            </Link>

            <div className="mb-9">
              <p className="mb-3 text-sm font-medium text-violet-400">
                WELCOME BACK
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Sign in to your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Enter your credentials to access your workspace.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Email address
                </label>

                <div className="group relative">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500 group-focus-within:text-violet-400"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>

                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] pl-12 pr-4 text-sm outline-none transition-all placeholder:text-zinc-600 hover:border-white/20 focus:border-violet-500 focus:bg-violet-500/[0.04] focus:ring-4 focus:ring-violet-500/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-zinc-200"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setError(
                        "Connect a password reset flow to enable this feature."
                      )
                    }
                    className="text-xs font-medium text-violet-400 hover:text-violet-300"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="group relative">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500 group-focus-within:text-violet-400"
                  >
                    <rect x="4" y="10" width="16" height="11" rx="3" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] pl-12 pr-12 text-sm outline-none transition-all placeholder:text-zinc-600 hover:border-white/20 focus:border-violet-500 focus:bg-violet-500/[0.04] focus:ring-4 focus:ring-violet-500/10"
                  />

                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                  >
                    {showPassword ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-5 w-5"
                      >
                        <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                        <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5.5 0 9 7 9 7a15 15 0 0 1-3 3.8M6.2 6.2C4.1 7.6 3 10 3 12c0 0 3.5 7 9 7a9 9 0 0 0 3.2-.6" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-5 w-5"
                      >
                        <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-zinc-400">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-violet-500"
                />
                Remember me for 30 days
              </label>

              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-400/20 bg-red-400/[0.08] px-4 py-3 text-sm leading-5 text-red-300"
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-sm font-semibold shadow-lg shadow-violet-600/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-[0.08]" />
                {loading ? "Signing in..." : "Sign in to dashboard"}

                {!loading && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                )}
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-zinc-500">NEW TO NEXORA?</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <p className="text-center text-sm text-zinc-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-violet-400 transition-colors hover:text-violet-300"
              >
                Create account
              </Link>
            </p>

            <p className="mt-10 text-center text-xs leading-5 text-zinc-600">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="text-zinc-400 hover:text-white">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-zinc-400 hover:text-white">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
