'use client';
import { useThemeColors } from '../../hooks/useThemeColors';

export default function ResumeSection({ isLight }: { isLight: boolean }) {
    const theme = useThemeColors(isLight);

    return (
        <div className="flex flex-col items-end">
            <p className={`text-[14px] lg:text-[16px] font-semibold mb-8 pr-4 ${theme.textPrimary}`}>
                CURRÍCULO
            </p>

            <div className="flex flex-col gap-4 items-end pr-4">
                <a
                    href="/CurriculoDevSanthiagoSemFoto.pdf"
                    download="Curriculo_Santhiago_SemFoto.pdf"
                    className={`
                        block text-center border px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 min-w-[200px]
                        ${theme.buttonOutline}
                    `}
                >
                    Baixar CV (Sem Foto)
                </a>

                <a
                    href="/CurriculoDevSanthiagoComFoto.pdf"
                    download="Curriculo_Santhiago_ComFoto.pdf"
                    className={`
                        block text-center border px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 min-w-[200px]
                        ${theme.buttonOutline}
                    `}
                >
                    Baixar CV (Com Foto)
                </a>
            </div>
        </div>
    );
}