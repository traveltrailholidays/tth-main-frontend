'use client';

import ActiveLink from "@/components/ui/feature/ActiveLink";

import { IconType } from "react-icons";

import { useCallback } from "react";
import { useRouter } from "next/navigation";


interface MenuItemsProps {
    size?: number;
    onClick?: () => void;
    text: string;
    icon?: IconType;
    classes?: string;
    href: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({
    onClick,
    text,
    icon,
    classes,
    href,
    size
}) => {

    const router = useRouter()

    const handleClick = useCallback(() => {
        router.push(href);
    }, []);

  return (
    <div
        onClick={handleClick}
        className={`text-custom-txl dark:text-custom-txd font-[500]`}
    >
        <div
            onClick={onClick}
            className={`${classes} flex items-center gap-3 p-4`}
        >
            {icon && (  // Render icon only if provided
              <div className={`rounded-full w-9 h-9 items-center justify-center flex bg-custom-ibl dark:bg-custom-ibd`}>
                  {icon({size})}  {/* Render the icon component itself */}
              </div>
            )}
            <ActiveLink href={href} text={text} classes=""/>
        </div>
    </div>
  )
}

export default MenuItems;