import React, { useState } from 'react';
import { SparkleStar } from './illustrations/DecorativeElements';
import {
  Activity,
  Cpu,
  Layers,
  ArrowUpRight,
  Gauge,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  ShieldCheck,
  Code2,
  Brain,
  Sliders,
  ExternalLink,
} from 'lucide-react';

export interface ProjectMetric {
  label: string;
  value: string;
  baseline?: string;
  subtext: string;
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  category: 'ai-systems' | 'web-ai';
  categoryLabel: string;
  title: string;
  subtitle: string;
  status: 'COMPLETED / EVALUATED' | 'IN PROGRESS';
  statusColor: string;
  badgeAccent: string;
  summary: string;
  bullets: string[];
  metrics?: ProjectMetric[];
  techStack: string[];
  inProgressPhase?: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'male-uav-digital-twin',
    category: 'ai-systems',
    categoryLabel: 'AI & Systems Engineering',
    title: 'AI-Enabled Digital Twin for Aero Piston Engines in MALE UAVs',
    subtitle: 'Real-Time Health Monitoring, Fault Diagnosis & Prognostics',
    status: 'COMPLETED / EVALUATED',
    statusColor: '#651D32',
    badgeAccent: '#D7B46A',
    summary:
      'Engineered Python-based computational components and multi-stage machine-learning pipelines for Medium-Altitude Long-Endurance (MALE) UAV aero piston engines, delivering high-frequency anomaly detection, fault classification, and prognostic Remaining Useful Life (RUL) estimation.',
    bullets: [
      'Developed Python-based components and machine-learning models for real-time engine health monitoring, fault detection, and Remaining Useful Life (RUL) prediction.',
      'Built ML pipeline using anomaly detection, fault classification, and RUL prognosis; evaluated across 36 flight missions and 18,400 telemetry frames.',
      'Achieved 84.02% ± 5.92% fault-classification accuracy; detected misfire with 100% precision and recall.',
      'Reduced RUL prediction error by 79.0% versus the naive baseline, achieving 26.6 flight-hour MAE; inference latency was ~0.02 ms/sample.',
    ],
    metrics: [
      {
        label: 'Fault Classification',
        value: '84.02% ± 5.92%',
        subtext: 'Multi-class engine anomaly classification across 36 missions',
        highlight: true,
      },
      {
        label: 'Misfire Detection',
        value: '100% Prec / Rec',
        subtext: 'Zero false negatives on critical combustion failure modes',
        highlight: true,
      },
      {
        label: 'RUL Error Reduction',
        value: '-79.0%',
        baseline: 'vs. Naive Baseline',
        subtext: 'Achieved 26.6 flight-hour Mean Absolute Error (MAE)',
        highlight: true,
      },
      {
        label: 'Inference Latency',
        value: '~0.02 ms/sample',
        subtext: 'Optimized for high-frequency embedded flight telemetry streams',
      },
      {
        label: 'Empirical Scope',
        value: '36 Missions',
        subtext: 'Rigorous validation on 18,400 recorded flight telemetry frames',
      },
    ],
    techStack: [
      'Python',
      'Machine Learning',
      'RUL Prognostics',
      'Fault Classification',
      'Telemetry Processing',
      'Anomaly Detection',
    ],
  },
  {
    id: 'ai-interview-coach',
    category: 'web-ai',
    categoryLabel: 'Applied AI & Web Application',
    title: 'AI Interview Coach',
    subtitle: 'Adaptive Role-Based Interview Platform & Real-Time Feedback System',
    status: 'IN PROGRESS',
    statusColor: '#211A1B',
    badgeAccent: '#651D32',
    summary:
      'A web-based practice platform designed to simulate rigorous technical and behavioral interviews, matching candidate career tracks with role-specific AI prompt dynamics and structured response evaluations.',
    bullets: [
      'Developing a web-based AI interview practice platform with role-based interview selection and AI-generated interview questions.',
      'Implemented the responsive website interface, conversational flow architecture, and role-selection mechanics.',
      'Currently developing automated answer evaluation rubrics and personalized actionable feedback for candidate performance.',
    ],
    inProgressPhase: 'Interface & interview workflow completed; actively developing automated rubric evaluation and personalized feedback synthesis.',
    techStack: [
      'Python',
      'Web Technologies (HTML / CSS)',
      'Prompt Engineering',
      'Interactive State Management',
      'Evaluation Rubrics',
    ],
  },
  {
    id: 'leetcode-style-platform',
    category: 'web-ai',
    categoryLabel: 'Applied AI & Web Application',
    title: 'LeetCode-Style Coding Platform',
    subtitle: 'Competitive Programming Practice Environment & Execution Engine',
    status: 'IN PROGRESS',
    statusColor: '#211A1B',
    badgeAccent: '#D7B46A',
    summary:
      'A competitive programming platform built to facilitate structured algorithmic problem-solving, featuring comprehensive problem specifications, clean code input, test case verification, and user submission progression.',
    bullets: [
      'Developing a coding-practice platform inspired by competitive programming websites, with a structured problem-solving workflow.',
      'Designing problem listings, problem statements, test case definitions, code execution, submission evaluation, and user progress features.',
      'Architecting memory-safe execution feedback, time-complexity tracking, and categorical topic progressions.',
    ],
    inProgressPhase: 'Problem repository schemas and UI flow in place; currently engineering submission evaluation and code execution sandbox integration.',
    techStack: [
      'Python',
      'C / C++',
      'SQL',
      'Web Architecture (HTML / CSS)',
      'Algorithmic Workflows',
    ],
  },
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-systems' | 'web-ai'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EBDD] border-t-3 border-[#211A1B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b-3 border-[#211A1B]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest bg-[#651D32] text-[#FBF7F0] px-2.5 py-1 brutal-shadow-sm">
                03 / FEATURED PROJECTS
              </span>
              <SparkleStar size={16} color="#651D32" />
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#211A1B] tracking-tight">
              Work backed by verifiable data.
            </h2>
          </div>
          <p className="font-sans text-sm text-[#211A1B]/75 max-w-xs">
            From MALE UAV telemetry ML pipelines to interactive developer applications.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#FBF7F0] brutal-border w-fit">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#211A1B] text-[#FBF7F0] brutal-shadow-sm'
                : 'text-[#211A1B] hover:bg-[#F4EBDD]'
            }`}
          >
            All Works ({PROJECTS_DATA.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('ai-systems')}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'ai-systems'
                ? 'bg-[#651D32] text-[#FBF7F0] brutal-shadow-sm'
                : 'text-[#211A1B] hover:bg-[#F4EBDD]'
            }`}
          >
            AI &amp; Systems Engineering (1)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('web-ai')}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'web-ai'
                ? 'bg-[#D7B46A] text-[#211A1B] brutal-shadow-sm'
                : 'text-[#211A1B] hover:bg-[#F4EBDD]'
            }`}
          >
            Web &amp; Applied AI (2)
          </button>
        </div>

        {/* Projects Showcase Container */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            const isFlagship = project.id === 'male-uav-digital-twin';

            return (
              <article
                key={project.id}
                className={`bg-[#FBF7F0] brutal-border-4 transition-all duration-150 ${
                  isFlagship
                    ? 'brutal-shadow-oxblood'
                    : 'brutal-shadow-lg'
                } p-6 sm:p-8 md:p-10 relative overflow-hidden`}
              >
                {/* Top Corner Registration Stamp */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b-2 border-[#211A1B]/20">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 brutal-border"
                      style={{
                        backgroundColor: project.statusColor,
                        color: '#FBF7F0',
                      }}
                    >
                      {project.status}
                    </span>
                    <span className="font-mono text-xs text-[#211A1B]/70 uppercase tracking-wider hidden sm:inline">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-[#651D32] font-bold uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D7B46A]" />
                    <span>PROJECT ARCHIVE // {project.id.toUpperCase()}</span>
                  </span>
                </div>

                {/* Main Content Area */}
                <div className="pt-6 space-y-6">
                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-serif font-black text-2xl sm:text-4xl text-[#211A1B] tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-sans font-bold text-sm sm:text-base text-[#651D32] uppercase tracking-wide mt-1.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Summary Narrative */}
                  <p className="font-sans text-base sm:text-lg text-[#211A1B]/90 leading-relaxed max-w-4xl">
                    {project.summary}
                  </p>

                  {/* Flagship Research Telemetry & Quantitative Benchmarks Grid */}
                  {isFlagship && project.metrics && (
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-black text-[#651D32] uppercase tracking-widest flex items-center gap-2">
                          <Activity className="w-4 h-4 text-[#651D32]" />
                          <span>VALIDATED FLIGHT TELEMETRY BENCHMARKS</span>
                        </span>
                        <span className="font-mono text-[11px] text-[#211A1B]/60 uppercase">
                          36 FLIGHT MISSIONS · 18,400 FRAMES
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {project.metrics.slice(0, 4).map((metric, idx) => (
                          <div
                            key={idx}
                            className={`p-4 brutal-border flex flex-col justify-between ${
                              metric.highlight
                                ? 'bg-[#F4EBDD] brutal-shadow-sm border-[#211A1B]'
                                : 'bg-[#FBF7F0] border-[#211A1B]/40'
                            }`}
                          >
                            <span className="font-mono text-[11px] font-bold text-[#651D32] uppercase tracking-wider">
                              {metric.label}
                            </span>
                            <div className="my-2">
                              <span className="font-mono font-black text-2xl sm:text-3xl text-[#211A1B] tabular-nums block">
                                {metric.value}
                              </span>
                              {metric.baseline && (
                                <span className="font-mono text-[10px] text-[#651D32] font-bold block uppercase">
                                  {metric.baseline}
                                </span>
                              )}
                            </div>
                            <p className="font-sans text-xs text-[#211A1B]/75 leading-snug">
                              {metric.subtext}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Concrete Engineering Accomplishments / Bullet Points */}
                  <div className="bg-[#F4EBDD] p-5 sm:p-6 brutal-border space-y-3">
                    <div className="flex items-center justify-between border-b border-[#211A1B]/15 pb-2">
                      <span className="font-mono text-xs font-bold text-[#651D32] uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D7B46A]" />
                        <span>VERIFIED IMPLEMENTATION HIGHLIGHTS</span>
                      </span>
                      <span className="font-mono text-[10px] text-[#211A1B]/60 uppercase">
                        SPECIFICATION DOSSIER
                      </span>
                    </div>

                    <ul className="space-y-2.5 pt-1">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-sans text-[#211A1B]">
                          <span className="font-mono text-xs font-bold text-[#651D32] shrink-0 mt-0.5">
                            [{(idx + 1).toString().padStart(2, '0')}]
                          </span>
                          <span className="leading-relaxed font-medium">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* In Progress Stage Note if applicable */}
                    {project.inProgressPhase && (
                      <div className="mt-4 pt-3 border-t border-[#211A1B]/15 flex items-start gap-2.5 text-xs font-mono text-[#211A1B] bg-[#D7B46A]/20 p-3 brutal-border">
                        <Clock className="w-4 h-4 text-[#651D32] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#651D32] uppercase">Active Sprint Phase: </strong>
                          <span>{project.inProgressPhase}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Footer with Clean Unboxed Tech Stack */}
                  <div className="pt-4 border-t-2 border-[#211A1B]/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Unboxed Tech Stack with subtle typographic separators */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#211A1B]">
                      <span className="font-bold text-[#651D32] uppercase">STACK:</span>
                      {project.techStack.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="font-semibold">{tech}</span>
                          {i < project.techStack.length - 1 && (
                            <span aria-hidden="true" className="text-[#211A1B]/40">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Inspection Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="brutal-btn px-5 py-2.5 bg-[#211A1B] text-[#FBF7F0] font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#651D32] self-start md:self-auto"
                    >
                      <span>Deep Dive Inspection</span>
                      <ArrowUpRight className="w-4 h-4 text-[#D7B46A]" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Modal / Deep Dive Dialog */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-[#211A1B]/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-[#FBF7F0] brutal-border-4 brutal-shadow-xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b-2 border-[#211A1B] pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 brutal-border"
                      style={{
                        backgroundColor: selectedProject.statusColor,
                        color: '#FBF7F0',
                      }}
                    >
                      {selectedProject.status}
                    </span>
                    <span className="font-mono text-xs text-[#211A1B]/60 uppercase">
                      {selectedProject.categoryLabel}
                    </span>
                  </div>
                  <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#211A1B] mt-2">
                    {selectedProject.title}
                  </h3>
                  <p className="font-sans font-bold text-xs text-[#651D32] uppercase tracking-wider mt-0.5">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 bg-[#211A1B] text-[#FBF7F0] font-mono font-bold text-xs brutal-border hover:bg-[#651D32] transition-colors shrink-0"
                  aria-label="Close dialog"
                >
                  ✕ ESC
                </button>
              </div>

              {/* Body */}
              <div className="space-y-5">
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#651D32] uppercase mb-1.5">
                    System Architecture &amp; Methodology
                  </h4>
                  <p className="font-sans text-sm text-[#211A1B]/90 leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                {/* If metrics present */}
                {selectedProject.metrics && (
                  <div>
                    <h4 className="font-mono text-xs font-bold text-[#651D32] uppercase mb-2">
                      Quantitative Evaluation Telemetry
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.metrics.map((m, idx) => (
                        <div key={idx} className="p-3 bg-[#F4EBDD] brutal-border">
                          <span className="font-mono text-[10px] font-bold text-[#651D32] uppercase block">
                            {m.label}
                          </span>
                          <span className="font-mono font-black text-xl text-[#211A1B] tabular-nums">
                            {m.value}
                          </span>
                          {m.baseline && (
                            <span className="font-mono text-[10px] text-[#651D32] font-bold block">
                              {m.baseline}
                            </span>
                          )}
                          <p className="font-sans text-[11px] text-[#211A1B]/75 mt-1">
                            {m.subtext}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-mono text-xs font-bold text-[#651D32] uppercase mb-2">
                    Core Technical Specifications
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.bullets.map((b, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#F4EBDD] brutal-border flex items-start gap-2.5 text-xs font-sans text-[#211A1B]"
                      >
                        <span className="font-mono text-xs font-bold text-[#651D32] shrink-0 mt-0.5">
                          {(idx + 1).toString().padStart(2, '0')}.
                        </span>
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold text-[#651D32] uppercase mb-1">
                    Technology &amp; Engineering Toolchain
                  </h4>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs font-mono text-[#211A1B]">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#F4EBDD] brutal-border font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="brutal-btn px-4 py-2 bg-[#211A1B] text-[#FBF7F0] font-mono text-xs font-bold uppercase tracking-wider"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
