export interface ContentVariant {
  hero: {
    greeting: string;
    subtitle: string;
    message: string;
  };
  loveNote: {
    title: string;
    content: string;
  };
  reasons: {
    title: string;
    list: string[];
  };
  closing: {
    title: string;
    message: string;
    signature: string;
    popup: {
      triggerLabel: string;
      content: string;
    };
  };
}

const classicContent: ContentVariant = {
  hero: {
    greeting: "Happy Rose Day, Ira",
    subtitle: "A special day for a special person",
    message: "Every rose speaks of love silently, in a language known only to the heart. Today, I celebrate you and the beautiful love we share."
  },
  loveNote: {
    title: "A Love Note for You",
    content: `My Dearest Ira,

As roses bloom with grace and beauty, so does my love for you grow stronger with each passing day. You are the light that brightens my darkest moments, the warmth that fills my heart, and the reason behind my every smile.

On this Rose Day, I want you to know that you mean the world to me. Your kindness, your laughter, and your presence make every moment magical. Like a rose that stands out in a garden, you stand out in my life as someone truly extraordinary.

Thank you for being you, for loving me, and for making every day feel like a celebration. You are my forever rose, blooming eternally in the garden of my heart.

With all my love,
Forever Yours`
  },
  reasons: {
    title: "Reasons I Love You",
    list: [
      "Your smile lights up my entire world",
      "The way you laugh at my silly jokes",
      "Your kindness and compassion for everyone",
      "How you make ordinary moments extraordinary",
      "Your beautiful eyes that I could get lost in forever",
      "The way you understand me without words",
      "Your strength and grace in everything you do",
      "How you make me want to be a better person",
      "Your warm hugs that feel like home",
      "The love and care you show in little things",
      "Your dreams and ambitions that inspire me",
      "Simply being you, perfectly imperfect"
    ]
  },
  closing: {
    title: "Forever and Always",
    message: "You are my today and all of my tomorrows. Happy Rose Day, my love.",
    signature: "With endless love",
    popup: {
      triggerLabel: "One More Thing...",
      content: "You are my everything, my reason for smiling, and the love of my life. Never forget how special you are to me."
    }
  }
};

const emotionalContent: ContentVariant = {
  hero: {
    greeting: "Ira, My Love",
    subtitle: "From Toshif, with all my heart",
    message: "I know we've been through some really tough times lately, and there have been moments when everything felt uncertain. But through it all, one thing has never changed—my love for you."
  },
  loveNote: {
    title: "A Message From My Heart",
    content: `My Dearest Ira,

I'm writing this because I need you to know something important. These past few weeks have been hard on both of us. We've talked about things that scared me, things I never want to become reality. The thought of losing you breaks my heart in ways I can't even put into words.

I know I'm not perfect. I know there have been times when I've let you down, when I haven't been the partner you deserve. But Ira, I want you to know that I see it now. I see how much you mean to me, how empty my world would be without you in it.

You are my best friend, my safe place, my home. When I look at you, I don't just see the person I love—I see my future, our dreams, all the beautiful moments we haven't lived yet. I see lazy Sunday mornings, inside jokes that only we understand, and a lifetime of growing together.

I'm not giving up on us. I refuse to let the hard times define what we have. Every relationship goes through storms, but ours is worth fighting for. You are worth fighting for.

This Rose Day, I'm not just giving you flowers—I'm giving you my promise. A promise to be better, to listen more, to show you every single day how much you mean to me. A promise that no matter how tough things get, I'll be here, choosing you, choosing us.

I love you, Ira. Not just today, but every day. Through the good times and the challenging ones. Through the laughter and the tears. Through everything.

Please don't give up on us. Let's write our story together.

Forever yours,
Toshif`
  },
  reasons: {
    title: "Why I'm Fighting For Us",
    list: [
      "Because your smile is the most beautiful thing I've ever seen",
      "Because no one understands me the way you do",
      "Because even on our hardest days, I'd rather be with you than without you",
      "Because you make me want to be a better person",
      "Because our inside jokes and shared memories are irreplaceable",
      "Because I can't imagine my future without you in it",
      "Because the way you care for me is something I've never experienced before",
      "Because we've built something beautiful together that's worth protecting",
      "Because every moment with you, even the difficult ones, has shaped who I am",
      "Because I believe in us, in our love, in our future",
      "Because you are my person, and I am yours",
      "Because love isn't about giving up when things get hard—it's about holding on tighter"
    ]
  },
  closing: {
    title: "My Promise to You",
    message: "Ira, I choose you. Today, tomorrow, and every day after. Let's get through this together. Our love story isn't over—it's just beginning a new chapter.",
    signature: "Always and forever yours, Toshif ❤️",
    popup: {
      triggerLabel: "A Special Message Just For You",
      content: "Ira baby, please never leave me — I can't live without you. You are my whole world."
    }
  }
};

export const contentVariants: Record<string, ContentVariant> = {
  classic: classicContent,
  emotional: emotionalContent
};

export const defaultVariant = 'emotional';
