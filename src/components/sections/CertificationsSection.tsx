'use client';
import { useThemeColors } from '../../hooks/useThemeColors';

export default function CertificationsSection({ isLight }: { isLight: boolean }) {
    const theme = useThemeColors(isLight);

    const certifications = [
        {
            name: 'Liderança - Gran Faculdade',
            link: '/certificado-gran-faculdade-lideranca.pdf',
            isExternal: false
        },
        {
            name: 'Fundamentos em Figma - Rocketseat',
            link: 'https://app.rocketseat.com.br/certificates/d629ca70-c7e4-49bb-ae93-d8d2da97a117',
            isExternal: false
        },
        {
            name: 'Trilha Banco de Dados - Fundação Bradesco',
            link: 'https://lms.ev.org.br/mpls/Web/Lms/Track/TrackCertificateDownload.ashx?uid=11916684&p=YzaN6C4xOkK4mGpZS8svjscqhWVAndBzhNDa%252f6LDyhjNc3mGKMMMZql07Vq%252bVb%252fyFnahQyxs5ns%253d',
            isExternal: false
        },
        {
            name: 'Administrando Banco de Dados - Fundação Bradesco',
            link: 'https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateDownload.ashx?uid=11916684&p=CHs4P7WvbihBR4oOUK7G8rsLCekMybMO',
            isExternal: true
        },
        {
            name: 'Introdução à programação oriantada a objetos (POO) - Fundação Bradesco',
            link: 'https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateDownload.ashx?uid=11916684&p=CHs4P7Wvbiju07%252bpy0pXEZlqtnyzbaPY',
            isExternal: true
        },
        {
            name: 'Imersão Front End - Alura',
            link: '/certificado-imersao-alura.pdf',
            isExternal: false
        },
        {
            name: 'Curso HTML e CSS - Alura',
            link: 'https://cursos.alura.com.br/certificate/ca349206-384c-4fe7-91a9-dc1f24055dec',
            isExternal: true
        },
        {
            name: 'User Experience - Faculdade Descomplica',
            link: '/certificado-user-experience.pdf',
            isExternal: true
        },
        {
            name: 'Ferramentas e aplicações de IA - Faculdade Descomplica',
            link: '/certificado-ferramentas-e-aplicacoes-inteligencia-artificial.pdf',
            isExternal: true
        }
    ];

    return (
        <div className="max-w-full md:max-w-[320px] md:ml-auto text-[10px] uppercase tracking-widest leading-relaxed text-left md:text-right">
            <p className={`text-[14px] lg:text-[16px] font-semibold md:pr-5 ${theme.textPrimary}`}>
                CERTIFICAÇÕES
            </p>

            <div className={`mt-3 space-y-2 flex flex-col items-start md:items-end ${theme.textMuted}`}>
                {certifications.map((cert, index) => {
                    if (!cert.link) {
                        return (
                            <p key={index} className="opacity-60 cursor-default md:pr-5">
                                • {cert.name}
                            </p>
                        );
                    }

                    return (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center justify-end gap-2 transition-colors duration-300 cursor-pointer ${theme.hoverText}`}
                        >
                            <span className="group-hover:underline underline-offset-4 text-left md:text-right">
                                • {cert.name}
                            </span>

                            <svg
                                className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a>
                    );
                })}
            </div>

            <p className={`mt-6 italic md:pr-5 ${theme.textSecondary}`}>
                Atualizado constantemente com certificações novas e credenciadas, com novas tecnologias e práticas de mercado.
            </p>
        </div>
    );
}