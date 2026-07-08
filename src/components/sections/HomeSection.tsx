'use client';
import { useThemeColors } from '../../hooks/useThemeColors';

export default function HomeSection({
    isLight,
    age,
}: {
    isLight: boolean;
    age: number;
}) {
    const theme = useThemeColors(isLight);

    return (
        <div className="max-w-full md:max-w-[320px] md:ml-auto text-[10px] uppercase tracking-widest leading-relaxed text-left md:text-right font-light">
            <p
                className={`
                    text-[14px] lg:text-[16px] font-semibold
                    ${theme.textPrimary}
                `}
            >
                Nascido em 2000 em Santo André, SP, Brasil.
            </p>

            <p
                className={`
                    mt-4 italic leading-relaxed
                    ${theme.textSecondary}
                `}
            >
                Sou um desenvolvedor Full Stack de {age} anos, com foco no desenvolvimento de APIs RESTful utilizando C# e na construção de interfaces modernas com React. Tenho experiência com bibliotecas de interface como Shadcn, Chakra UI e Material UI, sempre buscando criar aplicações performáticas, escaláveis e com forte atenção à experiência do usuário.

                <br /><br />

                Acredito que tecnologia vai além do código — envolve sensibilidade, usabilidade e propósito. Por isso, busco desenvolver soluções que não apenas funcionem bem, mas que proporcionem experiências intuitivas e imersivas.

                <br /><br />

                Fora do ambiente de desenvolvimento, sou apaixonado por música e festivais, pratico musculação, aprecio animes e a cultura geek, além de ter grande interesse por viagens, novas culturas e diferentes perspectivas de vida.
            </p>
        </div>
    );
}