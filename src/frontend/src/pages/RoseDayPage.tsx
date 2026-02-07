import { Heart } from 'lucide-react';
import { useContentVariant } from '../hooks/useContentVariant';
import { RevealNote } from '../components/rose-day/RevealNote';
import { SectionNav } from '../components/rose-day/SectionNav';
import { ClosingPersonalNoteModal } from '../components/rose-day/ClosingPersonalNoteModal';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollFadeIn<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        prefersReducedMotion
          ? 'opacity-100 translate-y-0'
          : isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function RoseDayPage() {
  const content = useContentVariant();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-rose-50 to-pink-50 dark:from-rose-950 dark:via-rose-900 dark:to-pink-950">
      <SectionNav />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            backgroundImage: 'url(/assets/generated/rose-pattern.dim_2048x2048.png)',
            backgroundSize: '512px 512px',
            backgroundRepeat: 'repeat'
          }}
          aria-hidden="true"
        />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <FadeInSection>
              <div className="mb-8">
                <img
                  src="/assets/generated/rose-hero.dim_1600x900.png"
                  alt=""
                  className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-rose-900 dark:text-rose-100 mb-4">
                {content.hero.greeting}
              </h1>
            </FadeInSection>

            <FadeInSection delay={400}>
              <p className="text-2xl md:text-3xl text-rose-700 dark:text-rose-300 font-light mb-6">
                {content.hero.subtitle}
              </p>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div className="flex justify-center mb-8">
                <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse" />
              </div>
            </FadeInSection>

            <FadeInSection delay={800}>
              <p className="text-lg md:text-xl text-rose-800 dark:text-rose-200 max-w-3xl mx-auto leading-relaxed font-serif">
                {content.hero.message}
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-8">
        <img
          src="/assets/generated/rose-divider.dim_1200x200.png"
          alt=""
          className="w-full max-w-2xl opacity-60 dark:opacity-40"
          style={{ aspectRatio: '6/1' }}
        />
      </div>

      {/* Love Note Section */}
      <section id="note" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-900 dark:text-rose-100 text-center mb-12">
                {content.loveNote.title}
              </h2>
            </FadeInSection>

            <FadeInSection delay={200}>
              <RevealNote
                title="Open My Heart"
                content={content.loveNote.content}
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-8">
        <img
          src="/assets/generated/rose-divider.dim_1200x200.png"
          alt=""
          className="w-full max-w-2xl opacity-60 dark:opacity-40"
          style={{ aspectRatio: '6/1' }}
        />
      </div>

      {/* Reasons Section */}
      <section id="reasons" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-900 dark:text-rose-100 text-center mb-12">
                {content.reasons.title}
              </h2>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-6">
              {content.reasons.list.map((reason, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <div className="bg-white/80 dark:bg-rose-900/30 p-6 rounded-xl border border-rose-200 dark:border-rose-800 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <Heart className="w-6 h-6 text-rose-500 fill-rose-500 flex-shrink-0 mt-1" />
                      <p className="text-rose-900 dark:text-rose-100 text-lg leading-relaxed">
                        {reason}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-8">
        <img
          src="/assets/generated/rose-divider.dim_1200x200.png"
          alt=""
          className="w-full max-w-2xl opacity-60 dark:opacity-40"
          style={{ aspectRatio: '6/1' }}
        />
      </div>

      {/* Closing Section */}
      <section id="closing" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-900 dark:text-rose-100 mb-8">
                {content.closing.title}
              </h2>
            </FadeInSection>

            <FadeInSection delay={200}>
              <p className="text-xl md:text-2xl text-rose-800 dark:text-rose-200 mb-8 font-serif leading-relaxed">
                {content.closing.message}
              </p>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div className="flex justify-center mb-6">
                <Heart className="w-16 h-16 text-rose-500 fill-rose-500" />
              </div>
            </FadeInSection>

            <FadeInSection delay={600}>
              <p className="text-2xl font-serif italic text-rose-700 dark:text-rose-300 mb-8">
                {content.closing.signature}
              </p>
            </FadeInSection>

            <FadeInSection delay={800}>
              <div className="flex justify-center">
                <ClosingPersonalNoteModal
                  triggerLabel={content.closing.popup.triggerLabel}
                  content={content.closing.popup.content}
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-rose-200 dark:border-rose-800 bg-cream-50/80 dark:bg-rose-950/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-rose-700 dark:text-rose-300 text-sm">
            © 2026. Built with <Heart className="inline w-4 h-4 text-rose-500 fill-rose-500" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-rose-900 dark:hover:text-rose-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:rounded"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
