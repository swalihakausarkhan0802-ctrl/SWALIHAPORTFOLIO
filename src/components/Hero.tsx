import React, { useState, useRef, useEffect } from 'react';
import { Mail, Compass, Sparkles, FolderGit2, Upload, Camera, X, Image as ImageIcon, Trash2 } from 'lucide-react';
import { MascotCharacter } from './illustrations/MascotCharacter';
import {
  SparkleStar,
  ScallopedShape,
  WireframeGlobe,
  BrutalCursor,
  HandScribble,
} from './illustrations/DecorativeElements';

export const Hero: React.FC = () => {
  const [userUploadedPhoto, setUserUploadedPhoto] = useState<string | null>(null);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load user's uploaded photo from localStorage if previously chosen
  useEffect(() => {
    try {
      const saved = localStorage.getItem('swaliha_original_photo');
      if (saved) {
        setUserUploadedPhoto(saved);
      }
    } catch {
      // Ignore storage restrictions
    }
  }, []);

  // Handle keyboard Escape and lock body scroll when photo modal is active
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPhotoModalOpen(false);
      }
    };
    if (photoModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photoModalOpen]);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        // Safe resize to prevent exceeding 5MB localStorage limits
        const maxDim = 1200;
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL('image/jpeg', 0.9);
          setUserUploadedPhoto(compressed);
          try {
            localStorage.setItem('swaliha_original_photo', compressed);
          } catch {
            // Ignore quota errors if storage full
          }
        } else {
          const raw = reader.result as string;
          setUserUploadedPhoto(raw);
          try {
            localStorage.setItem('swaliha_original_photo', raw);
          } catch {}
        }
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUserUploadedPhoto(null);
    try {
      localStorage.removeItem('swaliha_original_photo');
    } catch {}
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const navHeight = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative w-full pt-6 pb-16 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EBDD] bg-halftone overflow-hidden">
      {/* Decorative Scalloped Shapes in Outer Canvas Corners */}
      <div className="absolute top-2 left-2 sm:top-6 sm:left-6 -z-0 opacity-90 hidden sm:block pointer-events-none">
        <ScallopedShape size={110} fill="#FBF7F0" className="rotate-12" />
      </div>
      <div className="absolute top-8 right-4 sm:top-8 sm:right-12 -z-0 opacity-85 hidden sm:block pointer-events-none">
        <ScallopedShape size={95} fill="#D7B46A" className="-rotate-6" />
      </div>
      <div className="absolute bottom-4 left-6 -z-0 opacity-80 hidden lg:block pointer-events-none">
        <ScallopedShape size={120} fill="#C98D96" className="rotate-45" />
      </div>
      <div className="absolute -bottom-6 right-8 -z-0 opacity-90 hidden sm:block pointer-events-none">
        <ScallopedShape size={140} fill="#FBF7F0" className="-rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Editorial Archival Ribbon */}
        <div className="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3 px-2">
          <div className="inline-flex items-center gap-2 bg-[#211A1B] text-[#FBF7F0] px-3.5 py-1 brutal-shadow-sm text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D7B46A]" />
            <span>PORTFOLIO &amp; RESEARCH ARCHIVE</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-[#211A1B]/80 font-bold">
            <span>EDITION 2026</span>
            <span>✦</span>
            <span>AI / ML STUDENT WORKBOOK</span>
          </div>
        </div>

        {/* Major Framed Hero Canvas with 4px border & corner registration marks */}
        <div className="relative bg-[#FBF7F0] brutal-border-4 brutal-shadow-xl p-6 sm:p-10 md:p-12 lg:p-14">
          {/* Corner Registration Crop Marks */}
          <div className="absolute -top-2.5 -left-2.5 w-5 h-5 bg-[#211A1B] pointer-events-none" />
          <div className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-[#211A1B] pointer-events-none" />
          <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5 bg-[#211A1B] pointer-events-none" />
          <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5 bg-[#211A1B] pointer-events-none" />

          {/* Grid Layout: Left Editorial Typography & Right Mascot/Photo Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (7 cols): Typography, statement, CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Top intro sticker badge */}
              <div className="flex items-center gap-3">
                <span className="inline-block px-3 py-1 bg-[#651D32] text-[#FBF7F0] text-xs font-mono font-bold uppercase tracking-wider brutal-border brutal-shadow-sm -rotate-2">
                  THE CURIOUS MIND BEHIND THE CODE
                </span>
                <SparkleStar size={18} color="#D7B46A" />
              </div>

              {/* Main Headline: Bodoni Moda Display Typography */}
              <div className="space-y-1">
                <h1 className="font-serif font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#211A1B] leading-[0.92]">
                  Swaliha
                  <span className="block text-[#651D32] italic font-serif">Khan.</span>
                </h1>
              </div>

              {/* Supporting Line with marker highlight & scribble */}
              <div className="relative pt-1">
                <p className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-[#211A1B] leading-snug">
                  Learning the{' '}
                  <span className="relative inline-block font-black text-[#651D32] px-1">
                    logic
                    <span className="absolute left-0 bottom-0.5 w-full h-3 bg-[#D7B46A]/60 -z-10 -rotate-1 rounded-sm" />
                  </span>{' '}
                  behind intelligent machines, one line of code at a time.
                </p>
                <div className="w-48 mt-1.5 opacity-80">
                  <HandScribble color="#D7B46A" />
                </div>
              </div>

              {/* Supporting Paragraph */}
              <p className="font-sans text-base sm:text-lg text-[#211A1B]/90 leading-relaxed max-w-xl">
                I&apos;m Swaliha Kausar Khan, a student programmer exploring Python, problem-solving, and
                the foundations of artificial intelligence and machine learning. I&apos;m building my
                understanding step by step, experimenting with code, and discovering how technology
                can solve meaningful problems.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollTo('#projects')}
                  className="brutal-btn px-6 py-3.5 bg-[#211A1B] text-[#FBF7F0] font-sans font-bold text-sm tracking-wider uppercase flex items-center gap-2.5 hover:bg-[#651D32]"
                >
                  <FolderGit2 className="w-4 h-4 text-[#D7B46A]" />
                  <span>View Projects</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo('#contact')}
                  className="brutal-btn px-6 py-3.5 bg-[#F4EBDD] text-[#211A1B] font-sans font-bold text-sm tracking-wider uppercase flex items-center gap-2.5 hover:bg-[#D7B46A]"
                >
                  <Mail className="w-4 h-4 text-[#651D32]" />
                  <span>Let&apos;s Connect</span>
                </button>
              </div>

              {/* Clean metadata strip */}
              <div className="pt-4 border-t-2 border-[#211A1B]/15 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#211A1B]/75">
                <span className="font-bold text-[#651D32]">STATUS</span>
                <span>Active Student</span>
                <span aria-hidden="true">·</span>
                <span className="font-bold text-[#651D32]">FOCUS</span>
                <span>AI &amp; ML Foundations</span>
                <span aria-hidden="true">·</span>
                <span className="font-bold text-[#651D32]">LANGUAGES</span>
                <span>Python / C / C++ / SQL</span>
                <span aria-hidden="true">·</span>
                <span className="font-bold text-[#651D32]">WEB &amp; TOOLS</span>
                <span>HTML / CSS / Git</span>
              </div>
            </div>

            {/* Right Column (5 cols): Mascot & Direct Photo Upload Frame */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-4 lg:pt-0">
              {/* Wireframe Mathematical Globe in Background */}
              <div className="absolute top-2 right-4 sm:right-8 opacity-75 pointer-events-none animate-pulse duration-1000">
                <WireframeGlobe size={110} />
              </div>

              {/* Floating Sparkles */}
              <div className="absolute top-12 left-4 pointer-events-none">
                <SparkleStar size={24} color="#651D32" />
              </div>
              <div className="absolute bottom-20 right-2 pointer-events-none">
                <SparkleStar size={20} color="#D7B46A" />
              </div>

              {/* Direct Photo Display or Editorial Mascot */}
              {userUploadedPhoto ? (
                /* User's Exact Original Photo - Displayed As Is With No Changes */
                <div className="relative z-10 w-full max-w-[310px] sm:max-w-[340px] bg-[#FBF7F0] brutal-border-4 brutal-shadow-oxblood p-3 sm:p-4 space-y-3">
                  <div className="flex items-center justify-between border-b-2 border-[#211A1B] pb-2 text-[10px] font-mono font-bold text-[#651D32] uppercase">
                    <span>ORIGINAL PHOTO // AS UPLOADED</span>
                    <button
                      type="button"
                      onClick={handleRemovePhoto}
                      className="text-[#651D32] hover:text-[#211A1B] flex items-center gap-1 font-mono text-[10px] font-bold uppercase cursor-pointer"
                      title="Remove photo"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  </div>

                  {/* Photo Container showing exact unedited photo */}
                  <div
                    className="relative w-full max-h-[380px] overflow-hidden brutal-border bg-[#211A1B] cursor-pointer flex items-center justify-center"
                    onClick={() => setPhotoModalOpen(true)}
                    title="Click to view full original photo"
                  >
                    <img
                      src={userUploadedPhoto}
                      alt="Swaliha Kausar Khan - Original Photo"
                      className="w-full h-auto max-h-[380px] object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <p className="font-serif font-black text-sm text-[#211A1B]">Swaliha Kausar Khan</p>
                      <p className="font-mono text-[10px] text-[#651D32] uppercase font-bold">Unmodified Original</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-2 py-1 bg-[#F4EBDD] text-[#211A1B] brutal-border hover:bg-[#D7B46A] font-mono text-[10px] font-bold uppercase transition-colors"
                    >
                      Change
                    </button>
                  </div>
                </div>
              ) : (
                /* Original Mascot Character Component */
                <div className="relative z-10 flex flex-col items-center">
                  <div className="transform hover:scale-[1.02] transition-transform duration-200">
                    <MascotCharacter size={310} />
                  </div>

                  {/* Direct Photo Upload Button */}
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="brutal-btn px-3.5 py-1.5 bg-[#FBF7F0] text-[#211A1B] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#D7B46A]"
                      title="Upload your exact original photo"
                    >
                      <Camera className="w-3.5 h-3.5 text-[#651D32]" />
                      <span>Upload My Photo (As It Is)</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Hidden File Input for Direct Local Image Upload */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoSelect}
                className="hidden"
                aria-label="Upload photo"
              />

              {/* Bottom Angled Badge */}
              <div className="relative mt-2 z-20 flex items-center">
                <div className="px-5 py-2.5 bg-[#D7B46A] text-[#211A1B] font-sans font-black text-sm tracking-wider uppercase brutal-border brutal-shadow rotate-[-2deg] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#651D32] rounded-full inline-block" />
                  <span>Curious By Default</span>
                </div>
                {/* Brutal Cursor Pointer */}
                <div className="absolute -right-5 -bottom-5 pointer-events-none">
                  <BrutalCursor size={44} color="#651D32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Resolution Photo Modal */}
      {photoModalOpen && userUploadedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="photo-modal-title"
          className="fixed inset-0 z-50 bg-[#211A1B]/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setPhotoModalOpen(false)}
        >
          <div
            className="bg-[#FBF7F0] brutal-border-4 brutal-shadow-xl max-w-xl w-full p-6 space-y-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-[#211A1B] pb-3">
              <div>
                <span className="font-mono text-xs font-bold uppercase text-[#651D32]">
                  ORIGINAL UNMODIFIED PHOTO
                </span>
                <h3 id="photo-modal-title" className="font-serif font-black text-2xl text-[#211A1B]">
                  Swaliha Kausar Khan
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPhotoModalOpen(false)}
                className="p-1.5 bg-[#211A1B] text-[#FBF7F0] font-mono font-bold text-xs brutal-border hover:bg-[#651D32] transition-colors"
                aria-label="Close dialog"
              >
                ✕ ESC
              </button>
            </div>

            <div className="w-full flex items-center justify-center bg-[#211A1B] brutal-border p-2 max-h-[70vh] overflow-hidden">
              <img
                src={userUploadedPhoto}
                alt="Swaliha Kausar Khan"
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setPhotoModalOpen(false)}
                className="brutal-btn px-4 py-2 bg-[#211A1B] text-[#FBF7F0] font-mono text-xs font-bold uppercase tracking-wider"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
