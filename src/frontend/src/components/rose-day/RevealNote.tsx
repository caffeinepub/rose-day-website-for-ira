import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface RevealNoteProps {
  title: string;
  content: string;
}

export function RevealNote({ title, content }: RevealNoteProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsRevealed(!isRevealed)}
        className="w-full flex items-center justify-between px-6 py-4 bg-rose-50/80 dark:bg-rose-950/30 rounded-lg border-2 border-rose-200 dark:border-rose-800 hover:bg-rose-100/80 dark:hover:bg-rose-900/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
        aria-expanded={isRevealed}
        aria-controls="love-note-content"
      >
        <span className="text-lg font-semibold text-rose-900 dark:text-rose-100">
          {isRevealed ? 'Hide' : 'Reveal'} {title}
        </span>
        {isRevealed ? (
          <ChevronUp className="w-5 h-5 text-rose-600 dark:text-rose-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-rose-600 dark:text-rose-400" />
        )}
      </button>
      
      <div
        id="love-note-content"
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isRevealed ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream-50 dark:bg-rose-950/20 p-8 rounded-lg border border-rose-200 dark:border-rose-800 shadow-lg">
          <div className="prose prose-rose dark:prose-invert max-w-none">
            <p className="whitespace-pre-line text-rose-900 dark:text-rose-100 leading-relaxed font-serif text-lg">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
