"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050507] px-5 py-10 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[10%] top-[-15%] h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[150px]" />

        <div className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Back */}
      <Link
        href="/"
        className="absolute left-5 top-5 flex items-center gap-2 text-sm text-white/40 transition hover:text-white sm:left-8 sm:top-8"
      >
        <ArrowLeft size={16} />
        Back to DevCrew
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400">
              <Sparkles size={19} />
            </div>

            <span className="text-xl font-semibold">
              DevCrew <span className="text-purple-400">AI</span>
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-[#0b0b10]/95 p-6 shadow-2xl shadow-purple-950/20 backdrop-blur-xl sm:p-8">
          <h1 className="text-2xl font-semibold">
            Create your account
          </h1>

          <p className="mt-2 text-sm leading-6 text-white/35">
            Start building software with your AI development team.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Signup submitted");
            }}
            className="mt-7 space-y-5"
          >
            {/* Name */}
            <div>
              <label className="mb-2 block text-xs font-medium text-white/50">
                Full name
              </label>

              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                />

                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.025] pl-10 pr-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-purple-500/50"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-xs font-medium text-white/50">
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.025] pl-10 pr-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-purple-500/50"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-xs font-medium text-white/50">
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  required
                  minLength={8}
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.025] pl-10 pr-11 text-sm text-white outline-none placeholder:text-white/20 focus:border-purple-500/50"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>

              <p className="mt-2 text-[11px] text-white/20">
                Use at least 8 characters.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 text-sm font-semibold shadow-lg shadow-purple-500/20 transition hover:scale-[1.01]"
            >
              Create account

              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Login */}
          <p className="mt-7 text-center text-sm text-white/30">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-purple-400 hover:text-purple-300"
            >
              Sign in
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-[11px] leading-5 text-white/20">
          By creating an account, you agree to DevCrew AI's Terms of
          Service and Privacy Policy.
        </p>
      </motion.div>
    </main>
  );
}