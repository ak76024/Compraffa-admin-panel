"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSignup(e) {
    let loadingToast = toast.loading("Creating account...")
    e.preventDefault();
    setError("");
    try {

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // if (password.length < 8) {
    //   setError("Password must contain at least 8 characters.");
    //   return;
    // }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agree) {
      setError("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    setLoading(true);

      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
        toast.error(data.message || "Something went wrong.");
      }else{
        toast.success("Signup successful");
        router.push("/");
      }
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
      toast.dismiss(loadingToast);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080914] px-4 py-8 font-sans text-white sm:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#10111e]/90 shadow-2xl shadow-black/40 backdrop-blur-xl lg:grid-cols-2">
        {/* Left branding panel */}
        <section className="relative hidden min-h-[760px] flex-col justify-between overflow-hidden border-r border-white/10 p-12 lg:flex xl:p-16">
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
              YOUR NEXT CHAPTER STARTS HERE
            </div>

            <h1 className="max-w-lg text-5xl font-semibold leading-[1.15] tracking-tight xl:text-6xl">
              Build something
              <span className="mt-2 block bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                extraordinary.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
              Create your account and bring your team, projects, and insights
              together in one beautifully organized workspace.
            </p>

            {/* Feature cards */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="2" />
                    <rect x="14" y="3" width="7" height="7" rx="2" />
                    <rect x="3" y="14" width="7" height="7" rx="2" />
                    <rect x="14" y="14" width="7" height="7" rx="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">One powerful workspace</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Keep everything organized in one place.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">Security comes first</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Build your workflow around secure access.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m7 14 4-4 4 4 6-8" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">Insights that matter</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Make informed decisions with clear analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-between text-xs text-zinc-500">
            <span>© 2026 Nexora Inc.</span>
            <span>Designed for productivity</span>
          </div>
        </section>

        {/* Signup form */}
        <section className="flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-14 xl:px-20">
          <div className="mx-auto w-full max-w-md">
            {/* Mobile logo */}
            <Link
              href="/"
              className="mb-9 flex w-fit items-center gap-3 lg:hidden"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600">
                <span className="text-lg font-bold">N</span>
              </div>
              <span className="text-xl font-bold">
                Nexora<span className="text-violet-400">.</span>
              </span>
            </Link>

            <div className="mb-7">
              <p className="mb-3 text-sm font-medium text-violet-400">
                GET STARTED — IT'S FREE
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Join Nexora and get your workspace up and running.
              </p>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              {/* Full name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm outline-none transition-all placeholder:text-zinc-600 hover:border-white/20 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm outline-none transition-all placeholder:text-zinc-600 hover:border-white/20 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 pr-12 text-sm outline-none transition-all placeholder:text-zinc-600 hover:border-white/20 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <p className="mt-2 text-xs text-zinc-500">
                  Use at least 8 characters.
                </p>
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 pr-16 text-sm outline-none transition-all placeholder:text-zinc-600 hover:border-white/20 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3 py-1 text-sm leading-6 text-zinc-400">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-violet-500"
                />
                <span>
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Error message */}
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
                {loading ? "Creating account..." : "Create your account"}
                {!loading && (
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                )}
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-zinc-400">
              Already have an account?{" "}
              <Link
                href="/"
                className="font-semibold text-violet-400 transition-colors hover:text-violet-300"
              >
                Sign in
              </Link>
            </p>

            <p className="mt-8 text-center text-xs text-zinc-600">
              © 2026 Nexora Inc. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
