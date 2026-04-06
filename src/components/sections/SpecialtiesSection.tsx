'use client';
import { useThemeColors } from '../../hooks/useThemeColors';

export default function SpecialtiesSection({ isLight }: { isLight: boolean }) {
    const theme = useThemeColors(isLight);

    return (
        <div className="max-w-[320px] text-[10px] uppercase tracking-widest leading-relaxed text-right font-light">
            <p
                className={`
                    text-[14px] lg:text-[16px] font-semibold
                    ${theme.textPrimary}
                `}
            >
                ESPECIALIDADES
            </p>

            <div
                className={`
                    mt-4 space-y-2
                    ${theme.textSecondary}
                `}
            >
                <p>APIs RESTful performáticas</p>
                <p>Arquitetura escalável</p>
                <p>Interfaces modernas com React</p>
                <p>UX/UI focado em imersão</p>
            </div>

            <p
                className={`
                    mt-8 text-[14px] lg:text-[16px] font-semibold
                    ${theme.textPrimary}
                `}
            >
                FILOSOFIA
            </p>

            <p
                className={`
                    mt-4 italic leading-relaxed
                    ${theme.textSecondary}
                `}
            >
                Tecnologia vai além do código — envolve sensibilidade, usabilidade e propósito.
                Busco desenvolver soluções que não apenas funcionem bem, mas que proporcionem experiências intuitivas e imersivas.
            </p>
        </div>
    );
}