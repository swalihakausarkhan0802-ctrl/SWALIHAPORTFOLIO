import React, { useState } from 'react';
import { SparkleStar, HandScribble } from './illustrations/DecorativeElements';
import { Terminal, Database, Brain, Sparkles, ChevronRight, BookOpen, Target } from 'lucide-react';

interface JourneyStage {
  number: string;
  category: string;
  title: string;
  headline: string;
  description: string;
  status: 'ESTABLISHED' | 'ACTIVE STUDY' | 'ACTIVE EXPLORATION' | 'FORWARD HORIZON';
  statusColor: string;
  notes: string[];
  perspective: string;
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    number: '01',
    category: 'FOUNDATIONAL PHASE',
    title: 'Programming Foundations',
    headline: 'Learning the grammar of computation in Python, C, and C++.',
    description:
      'Beginning with low-level languages taught me how computers allocate memory, evaluate pointers, and execute instructions sequentially. Moving to Python opened doors to rapid prototyping, machine learning modeling, and numerical experimentation.',
    status: 'ESTABLISHED',
    statusColor: '#651D32',
    notes: [
      'Understanding memory allocation and pointers through C & C++',
      'Mastering control loops, function scopes, and modular code design',
      'Embracing Python syntax for computational experiments and telemetry scripting',
      'Implementing algorithmic problem solving with strict complexity discipline',
    ],
    perspective:
      'Starting with foundational languages removed the fear of what happens under the hood.',
  },
  {
    number: '02',
    category: 'STRUCTURED INFORMATION',
    title: 'Data & Databases',
    headline: 'SQL and foundational database concepts.',
    description:
      'Exploring how real-world entities are modeled, indexed, and retrieved. Writing relational queries, understanding table normalization, and appreciating the difference between raw text and structured datasets.',
    status: 'ACTIVE STUDY',
    statusColor: '#D7B46A',
    notes: [
      'Writing multi-table JOINs and aggregation queries in SQL',
      'Studying primary keys, foreign keys, and relational constraints',
      'Understanding data normalization to eliminate redundancy',
      'Preparing datasets for structured computational analysis',
    ],
    perspective:
      'Without clean, structured data, intelligent models have nothing trustworthy to learn from.',
  },
  {
    number: '03',
    category: 'ALGORITHMIC REASONING',
    title: 'AI / ML Exploration',
    headline: 'Beginning to understand the concepts and methods behind machine learning.',
    description:
      'Moving beyond rule-based programming into inductive reasoning. Learning how mathematical models extract patterns from historical inputs, evaluate prediction loss, and iteratively adjust parameters.',
    status: 'ACTIVE EXPLORATION',
    statusColor: '#651D32',
    notes: [
      'Supervised learning intuitions: feature vectors, labels, and weights',
      'Dataset partitioning: train, validation, and test splits',
      'Evaluation metrics: navigating beyond naive accuracy to precision and recall',
      'Exploring foundational algorithms like linear regression and classification',
    ],
    perspective:
      'Machine learning is not magic; it is linear algebra, statistics, and optimization working together.',
  },
  {
    number: '04',
    category: 'ACTIVE ENGINEERING',
    title: 'Applied Engineering & Platforms',
    headline: 'Engineering practical platforms and validating machine learning pipelines.',
    description:
      'Translating core algorithmic principles into applied systems. Currently advancing the MALE UAV aero engine digital twin research while engineering an AI interview coaching platform and competitive coding environment.',
    status: 'ACTIVE EXPLORATION',
    statusColor: '#211A1B',
    notes: [
      'Project: AI-Enabled Digital Twin for Aero Piston Engines with RUL prognosis',
      'Project: AI Interview Coach with role-based interview dynamics and feedback',
      'Project: LeetCode-Style competitive coding practice environment and execution flow',
      'Commitment: Bridging computational foundations with practical, verifiable systems',
    ],
    perspective:
      'True understanding is demonstrated by what you build, evaluate, and openly iterate upon.',
  },
];

export const LearningJourney: React.FC = () => {
  // Allow toggling stages individually with stage 0 & 3 expanded initially
  const [expandedStages, setExpandedStages] = useState<Record<number, boolean>>({
    0: true,
    1: false,
    2: false,
    3: true,
  });

  const toggleStage = (index: number) => {
    setExpandedStages((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EBDD] border-t-3 border-[#211A1B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b-3 border-[#211A1B]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest bg-[#651D32] text-[#FBF7F0] px-2.5 py-1 brutal-shadow-sm">
                04 / IN PROGRESS
              </span>
              <SparkleStar size={16} color="#651D32" />
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#211A1B] tracking-tight">
              Becoming, one concept at a time.
            </h2>
          </div>
          <p className="font-sans text-sm text-[#211A1B]/75 max-w-xs">
            An honest educational timeline tracing foundational principles to active exploration.
          </p>
        </div>

        {/* Annotated Notebook Timeline / Editorial List */}
        <div className="space-y-6">
          {JOURNEY_STAGES.map((stage, index) => {
            const isExpanded = !!expandedStages[index];
            const isFuture = stage.status === 'FORWARD HORIZON';

            return (
              <div
                key={stage.number}
                className={`group bg-[#FBF7F0] brutal-border transition-all duration-150 overflow-hidden ${
                  isExpanded
                    ? 'brutal-shadow-oxblood -translate-y-0.5'
                    : 'brutal-shadow hover:brutal-shadow-lg'
                }`}
              >
                {/* Stage Header Strip */}
                <button
                  type="button"
                  onClick={() => toggleStage(index)}
                  className="w-full text-left p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#211A1B]/15 hover:bg-[#F4EBDD]/40 transition-colors cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4">
                    {/* Number Stamp */}
                    <div
                      className="w-12 h-12 brutal-border brutal-shadow-sm flex items-center justify-center font-serif font-black text-xl shrink-0"
                      style={{
                        backgroundColor: isExpanded ? '#651D32' : '#211A1B',
                        color: '#FBF7F0',
                      }}
                    >
                      {stage.number}
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[11px] font-bold tracking-widest text-[#651D32] uppercase">
                          {stage.category}
                        </span>
                        <span aria-hidden="true" className="text-[#211A1B]/40">·</span>
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 font-bold uppercase ${
                            isFuture
                              ? 'bg-[#211A1B] text-[#FBF7F0]'
                              : stage.status === 'ACTIVE EXPLORATION'
                              ? 'bg-[#651D32] text-[#FBF7F0]'
                              : 'bg-[#D7B46A] text-[#211A1B]'
                          }`}
                        >
                          {stage.status}
                        </span>
                      </div>
                      <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#211A1B] mt-0.5 group-hover:text-[#651D32] transition-colors">
                        {stage.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-auto">
                    <span className="font-mono text-xs font-bold text-[#211A1B]/70 uppercase hidden sm:inline">
                      {isExpanded ? 'COLLAPSE STAGE' : 'EXPAND STAGE'}
                    </span>
                    <div className="w-8 h-8 bg-[#F4EBDD] brutal-border flex items-center justify-center font-mono text-sm font-bold group-hover:bg-[#D7B46A] transition-colors">
                      {isExpanded ? '−' : '+'}
                    </div>
                  </div>
                </button>

                {/* Body Content */}
                {isExpanded && (
                  <div className="p-6 sm:p-7 space-y-6 animate-fadeIn">
                  {/* Headline Statement */}
                  <p className="font-sans font-bold text-lg text-[#211A1B] leading-snug">
                    {stage.headline}
                  </p>

                  <p className="font-sans text-base text-[#211A1B]/85 leading-relaxed max-w-3xl">
                    {stage.description}
                  </p>

                  {/* Annotated Notebook bullet notes */}
                  <div className="bg-[#F4EBDD] p-5 sm:p-6 brutal-border space-y-3">
                    <div className="flex items-center justify-between border-b border-[#211A1B]/20 pb-2">
                      <span className="font-mono text-xs font-bold text-[#651D32] uppercase flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#D7B46A]" />
                        <span>ANNOTATED NOTEBOOK ENTRIES</span>
                      </span>
                      <span className="font-mono text-[10px] text-[#211A1B]/60 uppercase">
                        {isFuture ? 'ASPIRATIONAL MILESTONES' : 'PRACTICED CONCEPTS'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {stage.notes.map((note, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-[#211A1B]">
                          <span className="font-mono text-xs font-bold text-[#651D32] mt-0.5">
                            {(idx + 1).toString().padStart(2, '0')}.
                          </span>
                          <span className="leading-snug">{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Personal Perspective Pull Quote */}
                  <div className="flex items-start gap-3 pt-2 text-xs sm:text-sm italic font-serif text-[#211A1B]/90 border-l-3 border-[#651D32] pl-4">
                    <p>&ldquo;{stage.perspective}&rdquo;</p>
                  </div>
                </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
