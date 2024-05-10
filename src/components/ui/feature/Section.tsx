'use client';

interface SectionProps {
    children: React.ReactNode;
    classes?: string;
}

const Section: React.FC<SectionProps> = ({
    children,
    classes
}) => {
    return (
        <section
            className={`
            ${classes}
        `}
        >
            {children}
        </section>
    )
}

export default Section;