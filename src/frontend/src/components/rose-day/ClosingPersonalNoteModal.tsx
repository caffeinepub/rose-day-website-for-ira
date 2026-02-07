import { Heart, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ClosingPersonalNoteModalProps {
  triggerLabel: string;
  content: string;
}

export function ClosingPersonalNoteModal({ triggerLabel, content }: ClosingPersonalNoteModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6 rounded-full font-serif"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          {triggerLabel}
          <Sparkles className="w-5 h-5 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-4 border-rose-300 dark:border-rose-700 bg-transparent">
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/generated/rose-popup-frame.dim_1200x800.png)',
            minHeight: '500px',
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-cream-50/95 via-rose-50/95 to-pink-50/95 dark:from-rose-950/95 dark:via-rose-900/95 dark:to-pink-950/95" />
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 flex flex-col items-center justify-center min-h-[500px]">
            <DialogHeader className="text-center space-y-6">
              {/* Decorative hearts */}
              <div className="flex justify-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
                <Heart className="w-10 h-10 text-rose-600 fill-rose-600 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>

              <DialogTitle className="text-3xl md:text-4xl font-serif font-bold text-rose-900 dark:text-rose-100 leading-tight">
                From the Depths of My Heart
              </DialogTitle>
              
              <DialogDescription asChild>
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-rose-800 dark:text-rose-200 font-serif leading-relaxed italic px-4">
                    "{content}"
                  </p>
                  
                  {/* Decorative element */}
                  <div className="flex justify-center gap-2 pt-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent rounded-full" />
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent rounded-full" />
                  </div>
                  
                  <p className="text-lg text-rose-700 dark:text-rose-300 font-serif">
                    Forever and always,<br />
                    <span className="text-xl font-bold">Toshif</span>
                  </p>
                </div>
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
