'use client';

import { useEffect, useRef, useState } from 'react';

const menuItems = ["Início", "Projetos", "Especialidades", "Certificações", "Contato", "Currículo"];

export default function NavMenu({
    isLight,
    onSelect,
    disabled
}: {
    isLight: boolean;
    onSelect: (index: number, direction?: 'up' | 'down') => void;
    disabled?: boolean;
}) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        const currentItem = itemRefs.current[selectedIndex];

        if (currentItem) {
            setIndicatorStyle({
                top: currentItem.offsetTop,
                height: currentItem.offsetHeight,
            });
        }
    }, [selectedIndex]);

    useEffect(() => {
        if (disabled) return;

        const handleKey = (e: KeyboardEvent) => {
            setSelectedIndex((prev) => {
                if (e.key === 'ArrowDown') {
                    const next = Math.min(prev + 1, menuItems.length - 1);
                    if (next !== prev) onSelect(next, 'down');
                    return next;
                }

                if (e.key === 'ArrowUp') {
                    const next = Math.max(prev - 1, 0);
                    if (next !== prev) onSelect(next, 'up');
                    return next;
                }

                return prev;
            });

            if (e.key === 'Enter') {
                onSelect(selectedIndex);
            }
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [selectedIndex, disabled, onSelect]);

    return (
        <nav className="mt-8 pointer-events-auto">
            <ul className="space-y-4 relative">
                <div
                    className={`
                        absolute left-0 w-[2px] transition-all duration-300 ease-in-out
                        ${isLight ? 'bg-black' : 'bg-white'}
                    `}
                    style={{
                        top: indicatorStyle.top,
                        height: indicatorStyle.height,
                    }}
                />

                {menuItems.map((item, index) => (
                    <li
                        key={item}
                        ref={(el) => {
                            itemRefs.current[index] = el;
                        }}
                        onClick={() => {
                            let direction: 'down' | 'up' | undefined;

                            if (index > selectedIndex) direction = 'down';
                            else if (index < selectedIndex) direction = 'up';

                            setSelectedIndex(index);
                            onSelect(index, direction);
                        }}
                        className={`
                            text-xl font-light cursor-pointer transition-colors duration-300 pl-4
                            ${isLight
                                ? index === selectedIndex
                                    ? 'text-black'
                                    : 'text-black/40 hover:text-black/70'
                                : index === selectedIndex
                                    ? 'text-white'
                                    : 'text-white/40 hover:text-white/70'
                            }
                        `}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}