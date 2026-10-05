"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Code2,
  Menu,
  ShieldCheck,
  Sparkles,
  TestTube2,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 -translate-y-0 rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="absolute right-[-200px] top-[300px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
            <Sparkles size={18} />
          </div>

          <span className="text-lg font-semibold tracking-tight">
            DevCrew<span className="text-violet-400"> AI</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>

          <a href="#agents" className="transition hover:text-white">
            Agents
          </a>

          <a href="#workflow" className="transition hover:text-white">
            How it works
          </a>
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm text-zinc-300 transition hover:text-white">
            Sign in
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200">
            Get started
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Mobile */}
        <button className="rounded-lg border border-white/10 p-2 md:hidden">
          <Menu size={20} />
        </button>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-20 text-center lg:px-8 lg:pt-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />

          AI-powered development team
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-8xl"
        >
          Build software with

          <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            an AI development team.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
        >
          Turn ideas into production-ready software. Let specialized AI
          agents plan, code, review, test, and improve your projects together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <button className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200">
            Start building

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/[0.07]">
            View on GitHub
          </button>
        </motion.div>

        {/* Agent Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mt-20 w-full max-w-5xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-violet-500/10 blur-3xl" />

          {/* Window */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b10]/90 text-left shadow-2xl backdrop-blur-xl">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>

              <span className="font-mono text-xs text-zinc-600">
                devcrew.ai
              </span>
            </div>

            {/* Agents */}
            <div className="grid gap-px bg-white/5 md:grid-cols-4">
              <Agent
                icon={<Bot size={20} />}
                name="Planner"
                text="Breaking your idea into tasks..."
                color="text-violet-400"
              />

              <Agent
                icon={<Code2 size={20} />}
                name="Coder"
                text="Building the application..."
                color="text-cyan-400"
              />

              <Agent
                icon={<ShieldCheck size={20} />}
                name="Reviewer"
                text="Checking code quality..."
                color="text-emerald-400"
              />

              <Agent
                icon={<TestTube2 size={20} />}
                name="Tester"
                text="Running automated tests..."
                color="text-orange-400"
              />
            </div>

            {/* Status */}
            <div className="border-t border-white/10 px-5 py-4 font-mono text-xs text-zinc-500">
              <span className="text-emerald-400">✓</span>{" "}
              All agents are collaborating on your project...
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

/* Agent Card */
function Agent({
  icon,
  name,
  text,
  color,
}: {
  icon: React.ReactNode;
  name: string;
  text: string;
  color: string;
}) {
  return (
    <div className="bg-[#0b0b10] p-6">
      <div className={`mb-4 ${color}`}>{icon}</div>

      <h3 className="text-sm font-medium text-white">{name}</h3>

      <p className="mt-2 text-xs leading-5 text-zinc-500">{text}</p>

      <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/5">
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className={`h-full w-1/2 bg-current ${color}`}
        />
      </div>
    </div>
  );
}