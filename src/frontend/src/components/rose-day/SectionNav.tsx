import { useState, useEffect } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'note', label: 'Love Note' },
  { id: 'reasons', label: 'Reasons' },
  { id: 'closing', label: 'Closing' }
];

export function SectionNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-cream-50/95 dark:bg-rose-950/95 backdrop-blur-sm border-b border-rose-200 dark:border-rose-800 shadow-sm">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center items-center gap-2 py-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 ${
                  activeSection === section.id
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-rose-800 dark:text-rose-200 hover:bg-rose-100 dark:hover:bg-rose-900/50'
                }`}
                aria-current={activeSection === section.id ? 'true' : undefined}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
