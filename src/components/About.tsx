import React from 'react';
import { SparkleStar, HandDrawnBook } from './illustrations/DecorativeElements';
import { BookOpen, Code2, Database, Brain, Sparkles, CheckCircle2, Mail, Linkedin, ExternalLink, Globe, Wrench } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EBDD] border-t-3 border-[#211A1B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header / Editorial Marker */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b-3 border-[#211A1B]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest bg-[#651D32] text-[#FBF7F0] px-2.5 py-1 brutal-shadow-sm">
                01 / THE PERSON
              </span>
              <SparkleStar size={16} color="#651D32" />
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#211A1B] tracking-tight">
              A Little About Me.
            </h2>
          </div>
          <span className="font-mono text-xs text-[#211A1B]/75 uppercase tracking-wider">
            PHILOSOPHY &amp; PROFILE
          </span>
        </div>

        {/* Asymmetric 2-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (7 cols): Narrative & Statement */}
          <div className="lg:col-span-7 space-y-8">
            {/* Lead Editorial Statement */}
            <div className="p-6 sm:p-8 bg-[#FBF7F0] brutal-border brutal-shadow-lg relative">
              <div className="absolute -top-3.5 right-6 px-3 py-0.5 bg-[#D7B46A] text-[#211A1B] font-mono text-[11px] font-bold tracking-wider uppercase brutal-border brutal-shadow-sm">
                CORE MOTTO
              </div>
              <blockquote className="font-serif font-bold text-2xl sm:text-3xl text-[#211A1B] leading-snug">
                &ldquo;More curious than certain.{' '}
                <span className="text-[#651D32] italic">Always learning.</span>&rdquo;
              </blockquote>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-base sm:text-lg text-[#211A1B]/90 font-sans leading-relaxed">
              <p>
                I&apos;m interested in understanding how technology works beneath the surface. My
                journey currently spans programming fundamentals, database concepts, and the early
                stages of artificial intelligence and machine learning.
              </p>
              <p>
                I believe good developers are not defined by how many technologies they list, but by
                how well they understand problems, ask questions, and turn ideas into working
                solutions. I&apos;m learning, experimenting, and working toward that kind of
                understanding.
              </p>
            </div>

            {/* Intellectual Principles / Approach (Clean unboxed metadata) */}
            <div className="p-6 bg-[#FBF7F0] brutal-border brutal-shadow space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#651D32] uppercase">
                <Sparkles className="w-4 h-4 text-[#D7B46A]" />
                <span>HOW I APPROACH PROBLEM SOLVING</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#651D32] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#211A1B]">First Principles First</h3>
                    <p className="text-xs text-[#211A1B]/75 mt-0.5">
                      Understanding data structures, memory, and algorithms before relying on frameworks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#651D32] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#211A1B]">Curiosity &amp; Rigor</h3>
                    <p className="text-xs text-[#211A1B]/75 mt-0.5">
                      Dissecting code line by line, testing boundary cases, and writing clean logic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Compact Verified Information Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FBF7F0] brutal-border-4 brutal-shadow-xl p-6 sm:p-7 relative">
              {/* Top Dossier Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-[#211A1B]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#651D32] inline-block" />
                  <span className="font-mono text-xs font-black tracking-widest text-[#211A1B] uppercase">
                    DOSSIER // SPECIFICATION
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#211A1B]/60 uppercase">VERIFIED INFO</span>
              </div>

              {/* Verified Information Rows */}
              <dl className="space-y-4 text-sm font-sans">
                <div className="flex items-baseline justify-between border-b border-[#211A1B]/15 pb-2.5">
                  <dt className="font-mono text-xs font-bold text-[#651D32] uppercase">Name</dt>
                  <dd className="font-serif font-black text-base text-[#211A1B]">Swaliha Kausar Khan</dd>
                </div>

                <div className="flex items-baseline justify-between border-b border-[#211A1B]/15 pb-2.5">
                  <dt className="font-mono text-xs font-bold text-[#651D32] uppercase">Primary Focus</dt>
                  <dd className="font-sans font-bold text-[#211A1B] flex items-center gap-1.5">
                    <Brain className="w-4 h-4 text-[#D7B46A]" />
                    <span>AI / ML Learning</span>
                  </dd>
                </div>

                <div className="flex items-baseline justify-between border-b border-[#211A1B]/15 pb-2.5">
                  <dt className="font-mono text-xs font-bold text-[#651D32] uppercase">Programming</dt>
                  <dd className="font-sans font-bold text-[#211A1B] flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-[#651D32]" />
                    <span>Python, C, C++, SQL</span>
                  </dd>
                </div>

                <div className="flex items-baseline justify-between border-b border-[#211A1B]/15 pb-2.5">
                  <dt className="font-mono text-xs font-bold text-[#651D32] uppercase">Web Stack</dt>
                  <dd className="font-sans font-bold text-[#211A1B] flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-[#D7B46A]" />
                    <span>HTML, CSS</span>
                  </dd>
                </div>

                <div className="flex items-baseline justify-between border-b border-[#211A1B]/15 pb-2.5">
                  <dt className="font-mono text-xs font-bold text-[#651D32] uppercase">Dev Tools</dt>
                  <dd className="font-sans font-medium text-[#211A1B] flex items-center gap-1.5">
                    <Wrench className="w-4 h-4 text-[#651D32]" />
                    <span>VS Code, Git, GitHub</span>
                  </dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#211A1B]/15 pb-2.5 gap-1">
                  <dt className="font-mono text-xs font-bold text-[#651D32] uppercase">Direct Email</dt>
                  <dd className="font-mono text-xs text-[#211A1B] hover:text-[#651D32] break-all underline decoration-1 decoration-[#D7B46A]">
                    <a href="mailto:swalihakausarkhan.24102007@gmail.com" className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-[#651D32] shrink-0" />
                      <span>swalihakausarkhan.24102007@gmail.com</span>
                    </a>
                  </dd>
                </div>

                <div className="flex items-center justify-between border-b border-[#211A1B]/15 pb-2.5">
                  <dt className="font-mono text-xs font-bold text-[#651D32] uppercase">LinkedIn</dt>
                  <dd className="font-sans text-xs font-bold text-[#211A1B] hover:text-[#651D32]">
                    <a
                      href="https://www.linkedin.com/in/swaliha-kausar-khan-5b5458422/?isSelfProfile=false"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 underline decoration-1 decoration-[#D7B46A]"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#651D32]" />
                      <span>Connect on LinkedIn</span>
                      <ExternalLink className="w-3 h-3 text-[#211A1B]/50" />
                    </a>
                  </dd>
                </div>

                <div className="flex items-baseline justify-between pt-1">
                  <dt className="font-mono text-xs font-bold text-[#651D32] uppercase">Current State</dt>
                  <dd className="font-mono text-xs font-bold text-[#211A1B] bg-[#D7B46A]/40 px-2 py-0.5">
                    Active Student Learner
                  </dd>
                </div>
              </dl>

              {/* Hand-drawn open book annotation */}
              <div className="mt-6 pt-5 border-t-2 border-[#211A1B] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <HandDrawnBook size={42} />
                  <div>
                    <p className="font-sans font-bold text-xs text-[#211A1B]">Self-Directed Study</p>
                    <p className="font-mono text-[10px] text-[#211A1B]/70">Notes &amp; Experiments</p>
                  </div>
                </div>
                <div className="w-9 h-9 bg-[#651D32] text-[#FBF7F0] brutal-border flex items-center justify-center font-serif font-black text-sm">
                  SK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
