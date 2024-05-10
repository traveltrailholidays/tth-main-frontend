'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import PrimaryText from "./feature/PrimaryText";


interface LogoProps {
    textClasses?: string;
}

const Logo: React.FC<LogoProps> = ({
    textClasses
}) => {

    const router = useRouter();

    const handleLogo = () => {
        router.push('/');
    }

    return (
        <div
            onClick={handleLogo}
            className={`flex items-center select-none gap-3 hover:cursor-pointer`}
        >
            <Image
                src="/images/logo.png"
                alt='logo'
                priority={true}
                width="100"
                height="100"
                className={`w-10`}
            />
            
            <PrimaryText
                text="travel trail holidays"
                classes={`${textClasses} font-[500] text-2xl`}
            />
        </div>
    )
}

export default Logo;