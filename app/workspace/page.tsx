"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  FileCode2,
  Folder,
  GitBranch,
  Menu,
  Play,
  Plus,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  TestTube2,
  X,
  Zap,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type AgentStatus = "waiting" | "working" | "complete";

const initialFiles = [
  {
    name: "app",
    type: "folder",
    children: [
      { name: "page.tsx", type: "file" },
      { name: "layout.tsx", type: "file" },
      { name: "globals.css", type: "file" },
    ],
  },
  {
    name: "components",
    type: "folder",
    children: [
      { name: "Navbar.tsx", type: "file" },
      { name: "Dashboard.tsx", type: "file" },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "logo.svg", type: "file" },
    ],
  },
  {
    name: "package.json",
    type: "file",
  },
];

const initialAgents = [
  {
    name: "Planner",
    description: "Planning architecture",
    icon: Sparkles,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    name: "Coder",
    description: "Writing code",
    icon: Code2,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    name: "Reviewer",
    description: "Reviewing implementation",
    icon: Search,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    name: "Security",
    description: "Checking vulnerabilities",
    icon: ShieldCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    name: "Tester",
    description: "Running tests",
    icon: TestTube2,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

const defaultCode = [
  "import React from \"react\";",
  "",
  "export default function Dashboard() {",
  "  return (",
  "    <main className=\"min-h-screen bg-slate-950 text-white\">",
  "      <div className=\"mx-auto max-w-7xl px-6 py-10\">",
  "        <h1 className=\"text-3xl font-bold\">",
  "          Welcome to your dashboard",
  "        </h1>",
  "",
  "        <p className=\"mt-2 text-slate-400\">",
  "          Your financial overview",
  "        </p>",
  "",
  "        <div className=\"mt-8 grid gap-4 md:grid-cols-3\">",
  "          {/* Dashboard cards */}",
  "        </div>",
  "      </div>",
  "    </main>",
  "  );",
  "}",
];

export default function WorkspacePage() {
  const searchParams = useSearchParams();

  const [prompt, setPrompt] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFile, setActiveFile] = useState("page.tsx");
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code");
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [isBuilding, setIsBuilding] = useState(false);

  const [agents, setAgents] = useState(
    initialAgents.map((agent, index) => ({
      ...agent,
      status: index === 0 ? ("working" as AgentStatus) : ("waiting" as AgentStatus),
    }))
  );

  const [activity, setActivity] = useState([
    "Workspace initialized",
    "Project environment ready",
  ]);

  useEffect(() => {
    const urlPrompt = searchParams.get("prompt");

    if (urlPrompt) {
      setPrompt(urlPrompt);
      startBuild(urlPrompt);
    }
  }, [searchParams]);

  const startBuild = (buildPrompt = prompt) => {
    if (!buildPrompt.trim() || isBuilding) return;

    setIsBuilding(true);

    setActivity([
      "New project request received",
      "Planner started analyzing requirements",
    ]);

    setAgents(
      initialAgents.map((agent, index) => ({
        ...agent,
        status:
          index === 0
            ? ("working" as AgentStatus)
            : ("waiting" as AgentStatus),
      }))
    );

    const sequence = [
      { index: 0, message: "Architecture plan created" },
      { index: 1, message: "Coder started generating files" },
      { index: 2, message: "Reviewer analyzing generated code" },
      { index: 3, message: "Security scan completed" },
      { index: 4, message: "Tests completed successfully" },
    ];

    sequence.forEach((step, position) => {
      setTimeout(() => {
        setAgents((current) =>
          current.map((agent, index) => ({
            ...agent,
            status:
              index < step.index
                ? "complete"
                : index === step.index
                ? "working"
                : "waiting",
          }))
        );

        setActivity((current) => [
          ...current,
          step.message,
        ]);

        if (position === sequence.length - 1) {
          setTimeout(() => {
            setAgents((current) =>
              current.map((agent) => ({
                ...agent,
                status: "complete",
              }))
            );

            setActivity((current) => [
              ...current,
              "Build completed successfully",
            ]);

            setIsBuilding(false);
          }, 900);
        }
      }, (position + 1) * 1400);
    });
  };

  return (
    <main className="h-screen overflow-hidden bg-[#050507] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[20%] top-[-30%] h-[600px] w-[600px] rounded-full bg-purple-600/[0.06] blur-[160px]" />
        <div className="absolute right-[-15%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[160px]" />
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Header */}
      <header className="relative z-30 flex h-16 items-center border-b border-white/8 bg-[#08080c]/90 px-4 backdrop-blur-xl">
        <button
          onClick={() => setSidebarOpen(true)}
          className="mr-3 rounded-lg p-2 text-white/50 hover:bg-white/5 hover:text-white lg:hidden"
        >
          <Menu size={19} />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400">
            <Sparkles size={16} />
          </div>

          <span className="font-semibold">
            DevCrew <span className="text-purple-400">AI</span>
          </span>
        </div>

        <div className="mx-5 hidden h-5 w-px bg-white/10 sm:block" />

        <div className="hidden items-center gap-2 text-sm sm:flex">
          <span className="text-white/35">Projects</span>
          <ChevronRight size={14} className="text-white/20" />
          <span className="text-white/70">New Project</span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button className="hidden items-center gap-2 rounded-lg border border-white/8 px-3 py-2 text-xs text-white/50 hover:bg-white/5 hover:text-white md:flex">
            <GitBranch size={14} />
            main
          </button>

          <button
            onClick={() => setActiveTab("preview")}
            className="flex items-center gap-2 rounded-lg border border-white/8 px-3 py-2 text-xs text-white/60 hover:bg-white/5 hover:text-white"
          >
            <Rocket size={14} />
            Preview
          </button>

          <button
            onClick={() => startBuild()}
            disabled={isBuilding}
            className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Play size={13} />
            {isBuilding ? "Building..." : "Run"}
          </button>
        </div>
      </header>

      {/* Main workspace */}
      <div className="relative flex h-[calc(100vh-64px)]">
        {/* File explorer */}
        <aside
          className={`absolute left-0 top-0 z-50 h-full w-[250px] border-r border-white/8 bg-[#08080c] transition-transform duration-300 lg:relative lg:z-0 lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-12 items-center justify-between border-b border-white/8 px-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">
              Explorer
            </span>

            <button className="text-white/25 hover:text-white">
              <Plus size={16} />
            </button>
          </div>

          <div className="p-3">
            {initialFiles.map((item) => (
              <FileTree
                key={item.name}
                item={item}
                activeFile={activeFile}
                setActiveFile={setActiveFile}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 border-t border-white/8 p-3">
            <div className="flex items-center gap-2 rounded-lg bg-white/[0.025] px-3 py-2">
              <Activity size={14} className="text-emerald-400" />
              <span className="text-xs text-white/40">
                Environment ready
              </span>
            </div>
          </div>
        </aside>

        {/* Editor / Preview */}
        <section className="flex min-w-0 flex-1 flex-col">
          {/* Tabs */}
          <div className="flex h-12 items-center border-b border-white/8 bg-[#08080c]">
            <button
              onClick={() => setActiveTab("code")}
              className={`flex h-full items-center gap-2 border-r border-white/8 px-4 text-xs ${
                activeTab === "code"
                  ? "border-t-2 border-t-purple-500 bg-white/[0.025] text-white"
                  : "text-white/35 hover:text-white"
              }`}
            >
              <FileCode2 size={14} className="text-purple-400" />
              {activeFile}
            </button>

            <button
              onClick={() => setActiveTab("preview")}
              className={`flex h-full items-center gap-2 px-4 text-xs ${
                activeTab === "preview"
                  ? "border-t-2 border-t-cyan-500 bg-white/[0.025] text-white"
                  : "text-white/35 hover:text-white"
              }`}
            >
              <Rocket size={14} className="text-cyan-400" />
              Preview
            </button>
          </div>

          {/* Editor */}
          <div className="min-h-0 flex-1 overflow-auto">
            {activeTab === "code" ? (
              <CodeEditor />
            ) : (
              <PreviewPanel prompt={prompt} />
            )}
          </div>

          {/* Terminal */}
          <div
            className={`border-t border-white/8 bg-[#07070a] transition-all ${
              terminalOpen ? "h-[180px]" : "h-10"
            }`}
          >
            <button
              onClick={() => setTerminalOpen(!terminalOpen)}
              className="flex h-10 w-full items-center gap-2 border-b border-white/8 px-4 text-xs text-white/40 hover:text-white"
            >
              <Terminal size={14} />
              Terminal
              <ChevronDown
                size={14}
                className={`ml-auto transition ${
                  terminalOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>

            {terminalOpen && (
              <div className="p-4 font-mono text-xs leading-6">
                <p className="text-white/25">
                  $ npm run dev
                </p>

                <p className="text-emerald-400/70">
                  ✓ Ready in 1.8s
                </p>

                <p className="text-white/30">
                  ○ Local: http://localhost:3000
                </p>

                {activity.slice(-3).map((item, index) => (
                  <p key={`${item}-${index}`} className="text-white/35">
                    {">"} {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* AI Team panel */}
        <aside className="hidden w-[310px] flex-shrink-0 border-l border-white/8 bg-[#08080c] xl:block">
          <div className="flex h-12 items-center border-b border-white/8 px-4">
            <div>
              <p className="text-xs font-semibold">AI Development Team</p>
              <p className="text-[10px] text-white/25">
                {isBuilding ? "Agents are working..." : "Ready to build"}
              </p>
            </div>

            <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
              <Bot size={15} />
            </div>
          </div>

          <div className="p-4">
            <div className="space-y-2">
              {agents.map((agent) => {
                const Icon = agent.icon;

                return (
                  <AgentRow
                    key={agent.name}
                    agent={agent}
                  />
                );
              })}
            </div>

            <div className="my-5 h-px bg-white/8" />

            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                  Activity
                </p>

                <span className="text-[10px] text-white/20">
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {activity.slice(-7).reverse().map((item, index) => (
                  <motion.div
                    key={`${item}-${index}`}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-2.5"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />

                    <p className="text-[11px] leading-4 text-white/40">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Progress */}
            <div className="mt-7 rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs text-white/50">
                  Build progress
                </span>

                <span className="text-xs font-medium text-white/70">
                  {isBuilding ? "Running" : "100%"}
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  animate={{
                    width: isBuilding ? ["10%", "70%"] : "100%",
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                />
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Prompt bar */}
      <div className="absolute bottom-[195px] left-1/2 z-20 hidden w-[min(650px,calc(100%-40px))] -translate-x-1/2 lg:block">
        <div className="rounded-2xl border border-white/10 bg-[#0b0b10]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
              <Sparkles size={16} />
            </div>

            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  startBuild();
                }
              }}
              placeholder="Tell DevCrew what to build..."
              className="min-w-0 flex-1 bg-transparent px-2 text-sm text-white outline-none placeholder:text-white/20"
            />

            <button
              onClick={() => startBuild()}
              disabled={isBuilding || !prompt.trim()}
              className="flex h-9 items-center gap-2 rounded-xl bg-purple-500 px-3 text-xs font-semibold text-white transition hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={14} />
              Build
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ---------------- File Tree ---------------- */

function FileTree({
  item,
  activeFile,
  setActiveFile,
}: {
  item: any;
  activeFile: string;
  setActiveFile: (file: string) => void;
}) {
  const [open, setOpen] = useState(true);

  if (item.type === "file") {
    return (
      <button
        onClick={() => setActiveFile(item.name)}
        className={`mb-1 flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-xs ${
          activeFile === item.name
            ? "bg-purple-500/10 text-white"
            : "text-white/35 hover:bg-white/5 hover:text-white/70"
        }`}
      >
        <FileCode2 size={14} />
        {item.name}
      </button>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-xs text-white/50 hover:bg-white/5 hover:text-white"
      >
        {open ? <ChevronDown size={13} /> : <ChevronRight size={13} />}

        <Folder size={14} className="text-purple-400" />

        {item.name}
      </button>

      {open && (
        <div className="ml-4 border-l border-white/8 pl-2">
          {item.children?.map((child: any) => (
            <FileTree
              key={child.name}
              item={child}
              activeFile={activeFile}
              setActiveFile={setActiveFile}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- Code Editor ---------------- */

function CodeEditor() {
  return (
    <div className="min-w-[650px] bg-[#07070a] p-5 font-mono text-[13px] leading-7">
      {defaultCode.map((line, index) => (
        <div key={index} className="flex">
          <span className="w-10 select-none pr-4 text-right text-white/15">
            {index + 1}
          </span>

          <span
            className={
              line.includes("import")
                ? "text-purple-300"
                : line.includes("return")
                ? "text-cyan-300"
                : line.includes("className")
                ? "text-emerald-300/80"
                : "text-white/60"
            }
          >
            {line || " "}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Preview ---------------- */

function PreviewPanel({ prompt }: { prompt: string }) {
  return (
    <div className="h-full min-h-[500px] bg-white text-slate-900">
      <div className="flex h-12 items-center justify-between border-b border-slate-200 bg-slate-50 px-4">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>

        <span className="text-xs text-slate-400">
          localhost:3000
        </span>

        <span className="w-20" />
      </div>

      <div className="mx-auto max-w-5xl p-10">
        <div className="rounded-2xl bg-gradient-to-br from-slate-950 to-slate-800 p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-300">
                DevCrew generated preview
              </p>

              <h1 className="mt-2 text-3xl font-bold">
                {prompt
                  ? "Your project is taking shape."
                  : "Your project preview"}
              </h1>

              <p className="mt-3 max-w-xl text-sm text-slate-400">
                {prompt ||
                  "Describe your project and DevCrew's AI team will build it here."}
              </p>
            </div>

            <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-300 sm:flex">
              <Sparkles size={25} />
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Dashboard", "Analytics", "Transactions"].map(
              (item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xs text-slate-400">{item}</p>
                  <p className="mt-3 text-2xl font-semibold">
                    {index === 0 ? "$24,580" : index === 1 ? "+18.4%" : "1,284"}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Agent Row ---------------- */

function AgentRow({
  agent,
}: {
  agent: {
    name: string;
    description: string;
    icon: any;
    color: string;
    bg: string;
    status: AgentStatus;
  };
}) {
  const Icon = agent.icon;

  return (
    <div className="rounded-xl border border-white/7 bg-white/[0.02] p-3">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${agent.bg} ${agent.color}`}
        >
          <Icon size={16} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium">{agent.name}</p>

            {agent.status === "working" && (
              <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            )}

            {agent.status === "complete" && (
              <Check size={12} className="text-emerald-400" />
            )}
          </div>

          <p className="mt-0.5 truncate text-[10px] text-white/25">
            {agent.status === "complete"
              ? "Task completed"
              : agent.status === "working"
              ? agent.description
              : "Waiting"}
          </p>
        </div>
      </div>
    </div>
  );
}