'use client';

import { useEffect, useState } from 'react';
import DotGrid from './ui/DotGrid';
import SplashScreen from './ui/SplashScreen';
import { getAge } from '@/utils/getAge';
import { getCurrentYear } from '@/utils/getCurrentYear';
import NavMenu from '@/components/NavMenu';
import { AnimatePresence, motion } from 'framer-motion';
import HomeSection from '@/components/sections/HomeSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SpecialtiesSection from '@/components/sections/SpecialtiesSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';
import ResumeSection from '@/components/sections/ResumeSection';
import { useThemeColors } from '@/hooks/useThemeColors';

const menuItems = ["Início", "Projetos", "Especialidades", "Certificações", "Contato", "Currículo"];

export default function App() {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hasSeenSplash');
    }
    return true;
  });

  const [isLight, setIsLight] = useState(false);
  const [activeSection, setActiveSection] = useState('Início');
  const [navMode, setNavMode] = useState<'sections' | 'projects'>('sections');
  const [direction, setDirection] = useState<'up' | 'down'>('down');

  const theme = useThemeColors(isLight);

  const handleSplashComplete = () => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  const age = getAge('2000-04-02');
  const year = getCurrentYear();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeSection !== 'Projetos') return;

      if (navMode === 'sections' && e.key === 'ArrowRight') {
        setNavMode('projects');
      }

      if (navMode === 'projects' && e.key === 'ArrowLeft') {
        setNavMode('sections');
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeSection, navMode]);

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} name="SANTHIAGO" />;
  }

  return (
    <div className={`${theme.bgPrimary} ${theme.textPrimary} min-h-screen w-full transition-colors duration-700 font-sans p-3 md:p-6 flex flex-col relative md:overflow-hidden`}>

      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={20}
          baseColor={theme.dotGridBase}
          activeColor={theme.dotGridActive}
          proximity={100}
          returnDuration={1.5}
        />
      </div>

      <div className={`flex-1 border-[0.5px] ${theme.borderFrame} relative flex flex-col justify-start md:justify-between p-5 md:p-8 z-20 pointer-events-none ${activeSection === 'Projetos' ? 'overflow-visible' : 'md:overflow-hidden'}`}>

        <div className="flex flex-col relative z-50">
          <header className="pointer-events-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tighter uppercase">Santhiago</h1>
            <p className={`text-[10px] uppercase tracking-[0.4em] mt-2 ${theme.textSubtitle}`}>
              Programador FullStack e Web Design
            </p>
          </header>

          <NavMenu
            isLight={isLight}
            disabled={navMode === 'projects'}
            onSelect={(index, dir) => {
              setActiveSection(menuItems[index]);
              if (dir) setDirection(dir);
              setNavMode('sections');
            }}
          />
        </div>

        <div className={`relative mt-10 flex-1 md:mt-0 md:flex-none md:absolute md:inset-8 pointer-events-none ${activeSection === 'Projetos' ? 'overflow-visible' : 'md:overflow-hidden'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{
                opacity: 0,
                y: direction === 'down' ? 40 : -40,
                filter: 'blur(8px)',
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: direction === 'down' ? -40 : 40,
                filter: 'blur(8px)',
                scale: 0.98,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`pointer-events-auto ${activeSection === 'Projetos'
                ? 'relative md:absolute left-0 top-0 w-full h-full overflow-visible'
                : 'relative w-full max-w-full text-left md:absolute md:right-0 md:bottom-0 md:max-w-[280px] md:text-right'
                }`}
            >
              {activeSection === 'Início' && (
                <HomeSection isLight={isLight} age={age} />
              )}

              {activeSection === 'Projetos' && (
                <ProjectsSection
                  isLight={isLight}
                  isActive={navMode === 'projects'}
                />
              )}

              {activeSection === 'Especialidades' && (
                <SpecialtiesSection isLight={isLight} />
              )}

              {activeSection === 'Certificações' && (
                <CertificationsSection isLight={isLight} />
              )}

              {activeSection === 'Contato' && (
                <ContactSection isLight={isLight} />
              )}

              {activeSection === 'Currículo' && (
                <ResumeSection isLight={isLight} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-between items-end relative z-50 mt-10 md:mt-0">
          <div className="flex flex-col gap-4 mb-2 pointer-events-auto">
            <div className="flex gap-3 items-center cursor-pointer" onClick={() => setIsLight(false)}>
              <div className={`w-4 h-4 border border-zinc-500 ${theme.themeToggleDarkBg}`} />
              <span className={`text-[10px] uppercase tracking-widest ${theme.themeToggleDarkText}`}>Escuro</span>
            </div>

            <div className="flex gap-3 items-center cursor-pointer" onClick={() => setIsLight(true)}>
              <div className={`w-4 h-4 border border-zinc-500 ${theme.themeToggleLightBg}`} />
              <span className={`text-[10px] uppercase tracking-widest ${theme.themeToggleLightText}`}>Claro</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-4 text-[9px] tracking-[0.3em] uppercase opacity-90 flex justify-between z-20 pointer-events-none">
        <span>© {year} Santhiago</span>
      </footer>
    </div>
  );
}