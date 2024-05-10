'use client';

import Image from "next/image";

interface AvatarProps {
    src: string | null | undefined;
    classes?: string;
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    classes
}) => {
    return (
        <Image
            className={`
                ${classes}
                rounded-full
                select-none
            `}
            height="100"
            width="100"
            alt="avatar"
            priority={true}
            src={src || "/images/avatar.png"}
        />
    )
}

export default Avatar;