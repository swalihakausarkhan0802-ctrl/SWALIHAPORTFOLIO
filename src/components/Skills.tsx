import React, { useState } from 'react';
import { SparkleStar } from './illustrations/DecorativeElements';
import { Code2, Globe, Wrench, Check, ArrowRight, Sparkles, Terminal, Layers } from 'lucide-react';

export interface SkillItem {
  id: string;
  name: string;
  category: 'programming' | 'web' | 'tools';
  categoryLabel: string;
  role: string;
  statusBadge: string;
  description: string;
  conceptsPracticed: string[];
  accentColor: string;
  isHero?: boolean;
}

const SKILLS_BY_CATEGORY: {
  category: 'programming' | 'web' | 'tools';
  title: string;
  description: string;
  skills: SkillItem[];
}[] = [
  {
    category: 'programming',
    title: 'Programming Languages & Systems',
    description: 'Core computational logic, algorithmic modeling, and relational database querying.',
    skills: [
      {
        id: 'python',
        name: 'Python',
        category: 'programming',
        categoryLabel: 'Programming',
        role: 'Primary Language for AI/ML & Engineering',
        statusBadge: 'Core Working Language',
        description:
          'Primary language for daily development and research. Applied extensively in machine learning pipelines, aero piston engine telemetry modeling, anomaly detection, and rapid prototyping.',
        conceptsPracticed: [
          'ML pipelines & model evaluation',
          'Telemetry data processing & feature vectors',
          'Data structures & algorithm design',
          'Modular scripting & mathematical logic',
        ],
        accentColor: '#651D32',
        isHero: true,
      },
      {
        id: 'cpp',
        name: 'C & C++',
        category: 'programming',
        categoryLabel: 'Programming',
        role: 'Computational Foundations & Memory Rigor',
        statusBadge: 'Core Foundations',
        description:
          'Provides a deep understanding of bare-metal computational efficiency, memory allocation, pointers, references, and hardware-conscious algorithm execution.',
        conceptsPracticed: [
          'Pointers & dynamic memory allocation',
          'Data structure implementations',
          'Control flow & algorithmic efficiency',
          'Object-oriented principles in C++',
        ],
        accentColor: '#211A1B',
      },
      {
        id: 'sql',
        name: 'SQL',
        category: 'programming',
        categoryLabel: 'Programming',
        role: 'Relational Database Modeling & Queries',
        statusBadge: 'Database Foundations',
        description:
          'Designing normalized relational schemas and formulating structured queries to retrieve, aggregate, and organize mission datasets and application states.',
        conceptsPracticed: [
          'Complex multi-table JOINs',
          'Aggregations (GROUP BY, HAVING)',
          'Schema normalization & integrity constraints',
          'Filtering & indexing logic',
        ],
        accentColor: '#D7B46A',
      },
    ],
  },
  {
    category: 'web',
    title: 'Web Technologies',
    description: 'Interface architecture, semantic document structuring, and responsive visual design.',
    skills: [
      {
        id: 'html',
        name: 'HTML',
        category: 'web',
        categoryLabel: 'Web',
        role: 'Semantic Document Structure & Accessibility',
        statusBadge: 'Active Application',
        description:
          'Structuring modern, accessible web applications with semantic tags, form control architectures, and clear document object model hierarchies.',
        conceptsPracticed: [
          'Semantic markup (nav, main, section, article)',
          'Accessible form inputs & validation',
          'DOM hierarchy & page structure',
          'SEO meta standards & open graph',
        ],
        accentColor: '#D7B46A',
      },
      {
        id: 'css',
        name: 'CSS',
        category: 'web',
        categoryLabel: 'Web',
        role: 'Responsive Styling & Tactile Layout Systems',
        statusBadge: 'Active Application',
        description:
          'Crafting high-impact responsive user interfaces, fluid typography scaling, Flexbox/Grid compositions, and physical neo-brutalist shadow mechanics.',
        conceptsPracticed: [
          'Flexbox & CSS Grid responsive layouts',
          'Neo-brutalist border & shadow geometry',
          'Custom property systems & typography tokens',
          'Fluid viewport scaling & media queries',
        ],
        accentColor: '#651D32',
      },
    ],
  },
  {
    category: 'tools',
    title: 'Developer Tooling & Workflows',
    description: 'Essential environment orchestration, version control, and collaborative code hosting.',
    skills: [
      {
        id: 'vscode',
        name: 'VS Code',
        category: 'tools',
        categoryLabel: 'Tools',
        role: 'Primary Development Environment',
        statusBadge: 'Daily Workflow',
        description:
          'Primary workspace for coding, linting, interactive debugging, integrated terminal execution, and multi-file project orchestration.',
        conceptsPracticed: [
          'Multi-language workspace configuration',
          'Interactive debugging & breakpoints',
          'Integrated terminal automation',
          'Code formatting & linting workflows',
        ],
        accentColor: '#211A1B',
      },
      {
        id: 'git',
        name: 'Git',
        category: 'tools',
        categoryLabel: 'Tools',
        role: 'Local Version Control & History Management',
        statusBadge: 'Version Control',
        description:
          'Tracking source code evolution, staging atomic commits, managing branch workflows, and inspecting code deltas with disciplinary precision.',
        conceptsPracticed: [
          'Repository initialization & status tracking',
          'Staging & atomic commit messages',
          'Branching, checking out & merging',
          'Diff inspection & history review',
        ],
        accentColor: '#651D32',
      },
      {
        id: 'github',
        name: 'GitHub (Basic)',
        category: 'tools',
        categoryLabel: 'Tools',
        role: 'Remote Code Hosting & Synchronization',
        statusBadge: 'Basic Workflow',
        description:
          'Pushing local repositories, managing remote origins, publishing open-source experiments, and collaborating via pull requests.',
        conceptsPracticed: [
          'Remote origin configuration & push/pull',
          'Repository documentation & READMEs',
          'Issue tracking & project boards',
          'Code releases & commit sync',
        ],
        accentColor: '#D7B46A',
      },
    ],
  },
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'programming' | 'web' | 'tools'>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const displayedCategories =
    activeTab === 'all'
      ? SKILLS_BY_CATEGORY
      : SKILLS_BY_CATEGORY.filter((c) => c.category === activeTab);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EBDD] border-t-3 border-[#211A1B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b-3 border-[#211A1B]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest bg-[#651D32] text-[#FBF7F0] px-2.5 py-1 brutal-shadow-sm">
                02 / THE TOOLKIT
              </span>
              <SparkleStar size={16} color="#651D32" />
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#211A1B] tracking-tight">
              Tools I build and think with.
            </h2>
          </div>
          <p className="font-sans text-sm text-[#211A1B]/75 max-w-xs">
            Organized across programming foundations, web technology, and developer workflows.
          </p>
        </div>

        {/* Category Panel Selector Bar */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#FBF7F0] brutal-border w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#211A1B] text-[#FBF7F0] brutal-shadow-sm'
                : 'text-[#211A1B] hover:bg-[#F4EBDD]'
            }`}
          >
            All Panels (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('programming')}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'programming'
                ? 'bg-[#651D32] text-[#FBF7F0] brutal-shadow-sm'
                : 'text-[#211A1B] hover:bg-[#F4EBDD]'
            }`}
          >
            Programming (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('web')}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'web'
                ? 'bg-[#D7B46A] text-[#211A1B] brutal-shadow-sm'
                : 'text-[#211A1B] hover:bg-[#F4EBDD]'
            }`}
          >
            Web (2)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tools')}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'tools'
                ? 'bg-[#651D32] text-[#FBF7F0] brutal-shadow-sm'
                : 'text-[#211A1B] hover:bg-[#F4EBDD]'
            }`}
          >
            Tools (3)
          </button>
        </div>

        {/* Three Categorized Panels */}
        <div className="space-y-12">
          {displayedCategories.map((panel) => {
            const Icon =
              panel.category === 'programming'
                ? Code2
                : panel.category === 'web'
                ? Globe
                : Wrench;

            return (
              <div
                key={panel.category}
                className="bg-[#FBF7F0] brutal-border-4 brutal-shadow-lg p-6 sm:p-8 space-y-6"
              >
                {/* Panel Title Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-2 border-[#211A1B]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#651D32] text-[#FBF7F0] brutal-border flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#D7B46A]" />
                    </div>
                    <div>
                      <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#211A1B]">
                        {panel.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#211A1B]/75">
                        {panel.description}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#651D32] font-bold uppercase tracking-wider self-start sm:self-auto">
                    {panel.skills.length} TECHNOLOGIES
                  </span>
                </div>

                {/* Grid of Skills within this panel */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {panel.skills.map((skill) => {
                    return (
                      <div
                        key={skill.id}
                        onClick={() => setSelectedSkill(skill)}
                        className={`group bg-[#F4EBDD] brutal-border p-6 flex flex-col justify-between transition-all duration-150 cursor-pointer ${
                          skill.isHero
                            ? 'brutal-shadow-oxblood bg-gradient-to-br from-[#F4EBDD] to-[#FBF7F0]'
                            : 'brutal-shadow'
                        } hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#211A1B]`}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between border-b border-[#211A1B]/15 pb-2">
                            <span
                              className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 brutal-border"
                              style={{
                                backgroundColor:
                                  skill.category === 'programming'
                                    ? '#651D32'
                                    : skill.category === 'web'
                                    ? '#D7B46A'
                                    : '#211A1B',
                                color:
                                  skill.category === 'web' ? '#211A1B' : '#FBF7F0',
                              }}
                            >
                              {skill.statusBadge}
                            </span>
                            <span className="font-mono text-[10px] text-[#211A1B]/60 uppercase">
                              {skill.categoryLabel}
                            </span>
                          </div>

                          <div>
                            <h4 className="font-serif font-black text-2xl text-[#211A1B] group-hover:text-[#651D32] transition-colors">
                              {skill.name}
                            </h4>
                            <p className="font-sans font-bold text-xs text-[#211A1B]/75 uppercase tracking-wide mt-0.5">
                              {skill.role}
                            </p>
                          </div>

                          <p className="font-sans text-xs sm:text-sm text-[#211A1B]/85 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>

                        {/* Concepts snippet */}
                        <div className="mt-5 pt-3 border-t border-[#211A1B]/15 space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#651D32]">
                            <span>APPLIED CONCEPTS</span>
                            <span className="text-[10px] text-[#211A1B]/60">INSPECT</span>
                          </div>
                          <ul className="space-y-1 text-xs font-sans text-[#211A1B]/90">
                            {skill.conceptsPracticed.slice(0, 3).map((concept, idx) => (
                              <li key={idx} className="flex items-center gap-1.5 truncate">
                                <Check className="w-3.5 h-3.5 text-[#651D32] shrink-0" />
                                <span className="truncate">{concept}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal / Inspection Dialog when a skill is clicked */}
        {selectedSkill && (
          <div
            className="fixed inset-0 z-50 bg-[#211A1B]/65 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="bg-[#FBF7F0] brutal-border-4 brutal-shadow-xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b-2 border-[#211A1B] pb-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#651D32]">
                    TOOLKIT DEEP DIVE // {selectedSkill.categoryLabel}
                  </span>
                  <h3 className="font-serif font-black text-3xl text-[#211A1B] mt-1">
                    {selectedSkill.name}
                  </h3>
                  <p className="font-sans font-medium text-xs text-[#211A1B]/75 uppercase tracking-wide">
                    {selectedSkill.role}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="p-1.5 bg-[#211A1B] text-[#FBF7F0] font-mono font-bold text-xs brutal-border hover:bg-[#651D32] transition-colors"
                  aria-label="Close dialog"
                >
                  ✕ ESC
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#651D32] uppercase">
                    Learning Context &amp; Purpose
                  </h4>
                  <p className="font-sans text-sm text-[#211A1B]/90 mt-1 leading-relaxed">
                    {selectedSkill.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold text-[#651D32] uppercase mb-2">
                    Core Concepts Practiced
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedSkill.conceptsPracticed.map((c, i) => (
                      <div
                        key={i}
                        className="p-2.5 bg-[#F4EBDD] brutal-border flex items-center gap-2.5 text-xs font-sans font-medium text-[#211A1B]"
                      >
                        <Check className="w-4 h-4 text-[#651D32] shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-[#D7B46A]/25 brutal-border text-xs font-sans text-[#211A1B]">
                  <strong>Practical Verification:</strong> Actively practiced in academic problem-solving,
                  aero piston engine telemetry research, and web application implementations.
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
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
