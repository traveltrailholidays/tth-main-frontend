'use client';

import { useRouter, usePathname } from 'next/navigation';


interface NavLinkProps {
    href: string;
    exact?: boolean;
    text: string;
    classes?: string;
}


const ActiveLink: React.FC<NavLinkProps> = ({
    href,
    exact,
    text,
    classes
}) => {

    const router = useRouter();
    const pathname = usePathname() ?? '';

    let isActive = exact ? pathname === href : pathname.startsWith(href);

    if (!exact) {
        isActive = false;
    }

    const handleActiveUrl = () => {
        router.push(href);
    };

    return (
        <div
            onClick={handleActiveUrl}
            className={`
                ${classes}
                ${isActive ? '!text-[#FF5956]' : 'text-custom-txl'}
                dark:text-custom-txd
                hover:text-[#FF5956]
                hover:cursor-pointer 
                dark:hover:text-[#FF5956]
            `}
        >
            {text}
        </div>
    )
}

export default ActiveLink;