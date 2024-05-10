'use client';

interface PrimaryTextProps {
    text: string;
    classes?: string;
}

const PrimaryText: React.FC<PrimaryTextProps> = ({
    text,
    classes
}) => {
  return (
    <div
        className={`
            ${classes}
            text-[#FF5956]
        `}
    >
        {text}
    </div>
  )
}

export default PrimaryText;