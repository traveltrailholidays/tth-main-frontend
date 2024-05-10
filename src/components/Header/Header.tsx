'use client';

import Section from '@/components/ui/feature/Section';
import Container from '@/components/ui/feature/Container';
import Logo from '@/components/ui/Logo';
import MenuBtn from '@/components/Header/MenuBtn';
import Navlink from '@/components/Header/Navlink';

const Header = () => {
    return (
        <Section
            classes={`w-full fixed top-0 z-40 py-3 border-b-[1px] bg-background`}
        >
            <Container
                classes={`lg:relative flex flex-row items-center justify-between gap-3 lg:gap-0`}
            >

                <Logo textClasses='hidden sm:flex'/>

                <div
                    className={`flex items-center gap-10`}
                >
                    <Navlink />
                    <MenuBtn />
                </div>

            </Container>
        </Section>
    )
}

export default Header;