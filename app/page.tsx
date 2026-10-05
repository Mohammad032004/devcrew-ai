"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  Code2,
  GitBranch,
  Layers3,
  Lightbulb,
  Menu,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Terminal,
  TestTube2,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const agents = [
  {
    name: "Planner",
    description: "Turns your idea into a clear technical plan.",
    icon: Lightbulb,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    name: "Coder",
    description: "Builds features and writes production-ready code.",
    icon: Code2,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    name: "Reviewer",
    description: "Reviews architecture, code quality and edge cases.",
    icon: SearchCheck,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    name: "Security",
    description: "Looks for vulnerabilities before you ship.",
    icon: ShieldCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    name: "Tester",
    description: "Tests your application and catches regressions.",
    icon: TestTube2,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Natural language coding",
    description:
      "Describe what you want to build. DevCrew turns your idea into an actionable development plan.",
  },
  {
    icon: Bot,
    title: "Multiple AI agents",
    description:
      "Specialized agents collaborate instead of relying on a single general-purpose assistant.",
  },
  {
    icon: Zap,
    title: "Fast iteration",
    description:
      "Move from idea to implementation quickly with continuous AI-assisted development.",
  },
  {
    icon: ShieldCheck,
    title: "Security-first",
    description:
      "Security analysis is part of the development workflow, not something added at the end.",
  },
  {
    icon: GitBranch,
    title: "Repository-aware",
    description:
      "Give your AI team context about your project structure, files and existing implementation.",
  },
  {
    icon: Rocket,
    title: "Ready to ship",
    description:
      "Review, test and improve your project before taking it into production.",
  },
];

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const goToWorkspace = () => {
    window.location.href = "/dashboard";
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050507] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[-15%] h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[150px]" />

        <div className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-[-15%] left-[35%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#050507]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 shadow-lg shadow-purple-500/20">
              <Sparkles size={18} />
            </div>

            <span className="text-lg font-semibold tracking-tight">
              DevCrew <span className="text-purple-400">AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#how-it-works"
              className="text-sm text-white/45 transition hover:text-white"
            >
              How it works
            </a>

            <a
              href="#agents"
              className="text-sm text-white/45 transition hover:text-white"
            >
              Agents
            </a>

            <a
              href="#features"
              className="text-sm text-white/45 transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#developers"
              className="text-sm text-white/45 transition hover:text-white"
            >
              Developers
            </a>
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-lg px-3 py-2 text-sm text-white/50 transition hover:text-white">
              Sign in
            </button>

            <button
              onClick={goToWorkspace}
              className="rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Get started
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
          >
            {mobileMenu ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-white/5 bg-[#08080c] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#how-it-works" onClick={() => setMobileMenu(false)}>
                How it works
              </a>

              <a href="#agents" onClick={() => setMobileMenu(false)}>
                Agents
              </a>

              <a href="#features" onClick={() => setMobileMenu(false)}>
                Features
              </a>

              <a href="#developers" onClick={() => setMobileMenu(false)}>
                Developers
              </a>

              <button
                onClick={goToWorkspace}
                className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black"
              >
                Get started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/5 px-4 py-2 text-xs text-purple-300"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
              The AI development team for modern builders
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-8xl"
            >
              Your idea.
              <br />

              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                An entire AI team.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg"
            >
              DevCrew AI brings specialized agents together to plan, build,
              review, secure, test and improve your software — from one
              powerful workspace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <button
                onClick={goToWorkspace}
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Start building

                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <a
                href="#developers"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/70 transition hover:bg-white/[0.06] hover:text-white"
              >
                Explore platform
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-2"
            >
              {[
                "AI & ML",
                "Full-Stack",
                "DevOps",
                "Security",
                "Testing",
                "MLOps",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5 text-[11px] text-white/30"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Workspace Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mx-auto mt-20 max-w-6xl"
          >
            <WorkspacePreview />
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t border-white/5 px-5 py-28 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="HOW IT WORKS"
            title="From idea to working software."
            description="A development workflow designed around collaboration between specialized AI agents."
          />

          <div className="mt-16 grid gap-4 md:grid-cols-5">
            {[
              {
                number: "01",
                title: "Describe",
                text: "Tell DevCrew what you want to build.",
              },
              {
                number: "02",
                title: "Plan",
                text: "Planner creates the technical roadmap.",
              },
              {
                number: "03",
                title: "Build",
                text: "Coder turns the plan into code.",
              },
              {
                number: "04",
                title: "Review",
                text: "Review and security agents inspect it.",
              },
              {
                number: "05",
                title: "Ship",
                text: "Tester validates the final product.",
              },
            ].map((item, index) => (
              <WorkflowCard key={item.number} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section
        id="agents"
        className="border-t border-white/5 px-5 py-28 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="THE AI TEAM"
            title="Every agent has a job."
            description="Instead of one AI trying to do everything, DevCrew coordinates specialized agents."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {agents.map((agent, index) => (
              <AgentCard
                key={agent.name}
                agent={agent}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Developer section */}
      <section
        id="developers"
        className="border-t border-white/5 px-5 py-28 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="BUILT FOR DEVELOPERS"
              title="A workspace where AI actually builds."
              description="Move beyond chat. Give your AI team the context, files and workflow it needs to work like a real development team."
            />

            <div className="mt-8 space-y-4">
              {[
                "Project-aware code generation",
                "Multi-agent collaboration",
                "Live code and preview workspace",
                "Automated review and testing",
                "Security analysis",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/55"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Check size={12} />
                  </div>

                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={goToWorkspace}
              className="mt-9 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/70 transition hover:bg-white/[0.06] hover:text-white"
            >
              Open workspace
              <ArrowRight size={15} />
            </button>
          </div>

          <CodeTerminal />
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-white/5 px-5 py-28 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="PLATFORM"
            title="Everything you need to build faster."
            description="DevCrew combines AI agents, development tools and engineering workflows into one platform."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 px-5 py-32 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-300">
            <Layers3 size={25} />
          </div>

          <h2 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            Your next project
            <br />
            deserves a whole team.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/35">
            Stop switching between tools. Start building with a coordinated
            AI development team.
          </p>

          <button
            onClick={goToWorkspace}
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Start building
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400">
              <Sparkles size={13} />
            </div>

            <span className="text-sm font-medium">
              DevCrew AI
            </span>
          </div>

          <p className="text-xs text-white/25">
            Build software with an AI development team.
          </p>

          <p className="text-xs text-white/20">
            © 2026 DevCrew AI
          </p>
        </div>
      </footer>
    </main>
  );
}

/* =========================
   Components
========================= */

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.2em] text-purple-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-sm leading-7 text-white/35 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function WorkflowCard({
  item,
  index,
}: {
  item: {
    number: string;
    title: string;
    text: string;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-5"
    >
      <span className="text-xs font-mono text-purple-400">
        {item.number}
      </span>

      <h3 className="mt-8 text-base font-semibold">
        {item.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/30">
        {item.text}
      </p>

      {index < 4 && (
        <ArrowRight className="absolute -right-3 top-1/2 hidden text-white/15 lg:block" size={18} />
      )}
    </motion.div>
  );
}

function AgentCard({
  agent,
  index,
}: {
  agent: (typeof agents)[number];
  index: number;
}) {
  const Icon = agent.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition hover:border-purple-500/20"
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${agent.bg} ${agent.color}`}
      >
        <Icon size={19} />
      </div>

      <h3 className="mt-5 font-semibold">
        {agent.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/30">
        {agent.description}
      </p>
    </motion.div>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-white/15 hover:bg-white/[0.035]"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/60">
        <Icon size={18} />
      </div>

      <h3 className="mt-5 font-semibold">
        {feature.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/30">
        {feature.description}
      </p>
    </motion.div>
  );
}

function WorkspacePreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#09090d] shadow-2xl shadow-purple-950/30">
      {/* Window header */}
      <div className="flex h-12 items-center border-b border-white/8 px-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        </div>

        <div className="mx-auto hidden rounded-md border border-white/8 px-5 py-1 text-[10px] text-white/20 sm:block">
          devcrew.ai/workspace
        </div>

        <div className="w-10" />
      </div>

      <div className="grid min-h-[430px] grid-cols-[170px_1fr_220px]">
        {/* Files */}
        <div className="hidden border-r border-white/8 p-4 sm:block">
          <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
            Explorer
          </p>

          <div className="space-y-2 text-xs">
            <p className="text-white/45">▾ app</p>
            <p className="pl-4 text-purple-300">page.tsx</p>
            <p className="pl-4 text-white/25">layout.tsx</p>
            <p className="pl-4 text-white/25">globals.css</p>
            <p className="mt-3 text-white/45">▾ components</p>
            <p className="pl-4 text-white/25">Navbar.tsx</p>
            <p className="pl-4 text-white/25">Dashboard.tsx</p>
          </div>
        </div>

        {/* Code */}
        <div className="overflow-hidden p-5 font-mono text-[10px] leading-5 sm:text-[11px]">
          <div className="mb-4 flex items-center gap-2 border-b border-white/8 pb-3">
            <Code2 size={13} className="text-purple-400" />
            <span className="text-white/60">Dashboard.tsx</span>
          </div>

          <CodeLine number="1">
            <span className="text-purple-300">import</span>{" "}
            React <span className="text-purple-300">from</span>{" "}
            <span className="text-emerald-300">"react"</span>;
          </CodeLine>

          <CodeLine number="2" />

          <CodeLine number="3">
            <span className="text-purple-300">export default function</span>{" "}
            <span className="text-cyan-300">Dashboard</span>() {"{"}
          </CodeLine>

          <CodeLine number="4">
            {"  "}
            <span className="text-purple-300">return</span> (
          </CodeLine>

          <CodeLine number="5">
            {"    "}
            <span className="text-cyan-300">&lt;main</span>{" "}
            <span className="text-yellow-300">className</span>=
            <span className="text-emerald-300">"min-h-screen"</span>
            <span className="text-cyan-300">&gt;</span>
          </CodeLine>

          <CodeLine number="6">
            {"      "}
            <span className="text-cyan-300">&lt;section&gt;</span>
          </CodeLine>

          <CodeLine number="7">
            {"        "}
            <span className="text-white/40">
              Welcome to your dashboard
            </span>
          </CodeLine>

          <CodeLine number="8">
            {"      "}
            <span className="text-cyan-300">&lt;/section&gt;</span>
          </CodeLine>

          <CodeLine number="9">
            {"    "}
            <span className="text-cyan-300">&lt;/main&gt;</span>
          </CodeLine>

          <CodeLine number="10">
            {"  "}
            );
          </CodeLine>

          <CodeLine number="11">
            {"}"}
          </CodeLine>
        </div>

        {/* Agents */}
        <div className="hidden border-l border-white/8 p-4 sm:block">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
              AI Team
            </p>

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          </div>

          <MiniAgent
            name="Planner"
            icon={Lightbulb}
            status="Complete"
            color="text-purple-400"
          />

          <MiniAgent
            name="Coder"
            icon={Code2}
            status="Working"
            color="text-cyan-400"
          />

          <MiniAgent
            name="Reviewer"
            icon={SearchCheck}
            status="Waiting"
            color="text-yellow-400"
          />

          <MiniAgent
            name="Security"
            icon={ShieldCheck}
            status="Waiting"
            color="text-emerald-400"
          />

          <MiniAgent
            name="Tester"
            icon={TestTube2}
            status="Waiting"
            color="text-orange-400"
          />

          <div className="mt-5 rounded-lg border border-white/8 bg-white/[0.02] p-3">
            <p className="text-[9px] text-white/20">
              CURRENT ACTIVITY
            </p>

            <p className="mt-2 text-[10px] text-white/45">
              Coder is generating components...
            </p>

            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeLine({
  number,
  children,
}: {
  number: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex">
      <span className="mr-5 w-4 select-none text-right text-white/10">
        {number}
      </span>

      <span className="text-white/55">
        {children || " "}
      </span>
    </div>
  );
}

function MiniAgent({
  name,
  icon: Icon,
  status,
  color,
}: {
  name: string;
  icon: React.ElementType;
  status: string;
  color: string;
}) {
  return (
    <div className="mb-2 flex items-center gap-2 rounded-lg border border-white/6 bg-white/[0.02] p-2">
      <Icon size={13} className={color} />

      <div className="min-w-0 flex-1">
        <p className="text-[10px] text-white/60">
          {name}
        </p>

        <p className="text-[8px] text-white/20">
          {status}
        </p>
      </div>

      {status === "Complete" && (
        <Check size={11} className="text-emerald-400" />
      )}

      {status === "Working" && (
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
      )}
    </div>
  );
}

function CodeTerminal() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/8 bg-[#09090d] shadow-2xl">
      <div className="flex h-11 items-center border-b border-white/8 px-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/50" />
        </div>

        <div className="ml-4 flex items-center gap-2 text-[10px] text-white/25">
          <Terminal size={12} />
          terminal
        </div>
      </div>

      <div className="p-5 font-mono text-xs leading-7">
        <p className="text-white/25">
          $ devcrew build
        </p>

        <p className="text-purple-300">
          ✓ Planner{" "}
          <span className="text-white/25">
            created implementation plan
          </span>
        </p>

        <p className="text-cyan-300">
          ✓ Coder{" "}
          <span className="text-white/25">
            generated 14 files
          </span>
        </p>

        <p className="text-yellow-300">
          ✓ Reviewer{" "}
          <span className="text-white/25">
            found 2 improvements
          </span>
        </p>

        <p className="text-emerald-300">
          ✓ Security{" "}
          <span className="text-white/25">
            no critical issues
          </span>
        </p>

        <p className="text-orange-300">
          ✓ Tester{" "}
          <span className="text-white/25">
            24 tests passed
          </span>
        </p>

        <p className="mt-2 text-white/50">
          Build completed in 42.8s
        </p>

        <span className="inline-block h-4 w-1.5 animate-pulse bg-white/50 align-middle" />
      </div>
    </div>
  );
}