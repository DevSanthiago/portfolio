'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useThemeColors } from '../../hooks/useThemeColors';

const projects = [
    {
        title: 'EnergyDrink Landing Page',
        tech: 'HTML / CSS / JS',
        link: 'https://github.com/DevSanthiago/EnergyDrink-Landing-Page'
    },
    {
        title: 'Animated Login Page',
        tech: 'HTML / CSS / JS',
        link: 'https://github.com/DevSanthiago/animated-login-page'
    },
    {
        title: 'Seletor de Carros',
        tech: 'HTML / CSS / JS',
        link: 'https://github.com/DevSanthiago/Seletor-de-Carros'
    },
    {
        title: 'Travel Site',
        tech: 'HTML / CSS / JS',
        link: 'https://github.com/DevSanthiago/travel-site'
    },
    {
        title: 'Real State',
        tech: 'PHP / CSS / JS',
        link: 'https://github.com/DevSanthiago/Real_State'
    },
    {
        title: 'Star Wars API',
        tech: 'Node.js / Express / MongoDB',
        link: 'https://github.com/DevSanthiago/StarWars-API'
    },
    {
        title: 'Spotify Clone + API',
        tech: 'JS / CSS / HTML',
        link: 'https://github.com/DevSanthiago/Spotify-Clone'
    },
    {
        title: 'Naruto Card Gallery',
        tech: 'HTML / CSS',
        link: 'https://github.com/DevSanthiago/Naruto-Card-Gallery'
    },
    {
        title: 'Solo Leveling Front-End',
        tech: 'HTML / CSS / JS',
        link: 'https://github.com/DevSanthiago/Solo-Leveling-Project-Front-End'
    },
    {
        title: 'MetaSpace Instagram',
        tech: 'HTML / CSS / JS',
        link: 'https://github.com/DevSanthiago/MetaSpace-Instagram'
    },
    {
        title: 'Hotliner Tools',
        tech: 'HTML / CSS / JS / ES6',
        link: 'https://github.com/DevSanthiago/hotliner-tools'
    },
    {
        title: 'PDA SYSTEM',
        tech: 'C# / .NET / MySQL / React / TS / Vite / Shadcn / Tailwind',
        link: 'https://github.com/DevSanthiago/PDA-SYSTEM'
    },
    {
        title: 'Ticket System',
        tech: 'C# / .NET 8 / MySQL / TS / React / Chakra UI / Framer',
        link: 'https://github.com/DevSanthiago/ticket-system'
    },
    {
        title: 'SDUI Ticket System',
        tech: 'C# / .NET 8 / MySQL / React 19 / TS / Vite / Chakra UI / SignalR',
        link: 'https://github.com/DevSanthiago/sdui-ticket-system'
    },
    {
        title: 'PointO',
        tech: 'C# / .NET 8 / Supabase / React 19 / TS / shadcn / Tailwind',
        link: 'https://github.com/DevSanthiago/pointo'
    },
    {
        title: 'Kekkin Andon Dashboard',
        tech: 'C# / .NET 8 / React 19 / TS / Vite / Tailwind / Recharts',
        link: 'https://github.com/DevSanthiago/kekkin-andon-dashboard'
    }
];

export default function ProjectsSection({
    isLight,
    isActive
}: {
    isLight: boolean;
    isActive: boolean;
}) {
    const theme = useThemeColors(isLight);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const changeProject = useCallback((direction: number) => {
        setSelectedIndex((prev) => {
            const next = prev + direction;
            if (next < 0) return projects.length - 1;
            if (next >= projects.length) return 0;
            return next;
        });
    }, []);

    useEffect(() => {
        if (!isActive) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown') changeProject(1);
            if (e.key === 'ArrowUp') changeProject(-1);

            if (e.key === 'Enter') {
                const currentProject = projects[selectedIndex];
                if (currentProject.link) {
                    window.open(currentProject.link, '_blank', 'noopener,noreferrer');
                }
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isActive, changeProject, selectedIndex]);

    useEffect(() => {
        if (!isActive) return;
        const el = containerRef.current;
        if (!el) return;

        let isThrottled = false;

        const handleWheel = (e: WheelEvent) => {
            if (isThrottled) return;
            if (Math.abs(e.deltaY) > 10) {
                changeProject(e.deltaY > 0 ? 1 : -1);
                isThrottled = true;
                setTimeout(() => { isThrottled = false; }, 300);
            }
        };

        el.addEventListener('wheel', handleWheel);
        return () => el.removeEventListener('wheel', handleWheel);
    }, [isActive, changeProject]);

    const updatePosition = useCallback(() => {
        const currentItem = itemRefs.current[selectedIndex];
        const container = containerRef.current;

        if (currentItem && container) {
            const containerHeight = container.clientHeight;
            const itemTop = currentItem.offsetTop;
            const itemHeight = currentItem.clientHeight;

            const centerOffset = (containerHeight / 2) - (itemTop + itemHeight / 2);
            setTranslateY(centerOffset);
        }
    }, [selectedIndex]);

    useEffect(() => {
        updatePosition();
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
    }, [updatePosition]);

    return (
        <div
            ref={containerRef}
            className="relative md:absolute md:right-0 md:top-0 w-full md:h-full md:overflow-hidden md:pr-6"
        >
            {/* Mobile: lista tocável, sem depender de teclado */}
            <div className="flex flex-col gap-6 md:hidden">
                {projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.link || '#'}
                        target={project.link ? '_blank' : '_self'}
                        rel={project.link ? 'noopener noreferrer' : undefined}
                        className="block active:opacity-70 transition-opacity"
                    >
                        <h2
                            className={`text-2xl sm:text-3xl leading-tight font-extralight tracking-tight break-words ${theme.textPrimary}`}
                        >
                            {project.title}
                        </h2>
                        <p className={`mt-1 text-[10px] tracking-[0.3em] uppercase ${theme.textMuted}`}>
                            {project.tech}
                        </p>
                    </a>
                ))}
            </div>

            {/* Desktop: navegação por teclado/scroll com centralização */}
            <div
                className="relative w-full hidden md:flex flex-col gap-10 items-end transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateY(${translateY}px)` }}
            >
                {projects.map((project, index) => {
                    const isActiveProject = isActive && index === selectedIndex;

                    return (
                        <a
                            key={project.title}
                            href={project.link || '#'}
                            target={project.link ? '_blank' : '_self'}
                            rel={project.link ? 'noopener noreferrer' : undefined}
                            ref={(el) => { itemRefs.current[index] = el; }}
                            onClick={(e) => {
                                if (!project.link) e.preventDefault();
                                if (!isActiveProject) {
                                    e.preventDefault();
                                    setSelectedIndex(index);
                                }
                            }}
                            className={`transition-all duration-500 ease-out text-right block ${isActiveProject ? 'cursor-pointer' : 'cursor-default'}`}
                            style={{
                                opacity: isActiveProject ? 1 : 0.2,
                                transform: isActiveProject ? 'translateX(-10px)' : 'translateX(0)',
                            }}
                        >
                            <h2
                                className={`
                                  text-[56px] lg:text-[64px] leading-none font-extralight tracking-tight hover:opacity-80 transition-opacity
                                  ${theme.textPrimary}
                                `}
                            >
                                {project.title}
                            </h2>
                            <p
                                className={`
                                  mt-2 lg:mt-4 text-[10px] lg:text-xs tracking-[0.4em] uppercase
                                  ${theme.textMuted}
                                `}
                            >
                                {project.tech}
                            </p>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}