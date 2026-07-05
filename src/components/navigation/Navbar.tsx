import { useContext, useState } from 'react';

import LinkProps from '@/types/LinkProps';
import Link from "./Link";
import { RouterContext, RouterContextInner } from '@/hooks/useRoute';
import HamburgerButton from './HamburgerButton';

const NavLinkProps = [
    { href: '/', children: 'Profile' },
    { href: '/projects', children: 'Projects' },
    { href: '/about-me', children: 'About Me' },
] as LinkProps[];

export default function Navbar() {
    const [hamburgerState, setHamburgerState] = useState(false);
    useContext(RouterContext) as RouterContextInner;

    return (
        <nav className="flex flex-row items-center justify-end gap-2 bg-gray-200 bg-opacity-20 fixed w-screen p-1 z-20 py-2">
            <div className={`sm:px-0 md:px-8 sm:absolute md:relative sm:left-0 md:top-0 sm:w-screen md:w-full sm:-top-44 md:translate-y-0 transition duration-500 ${hamburgerState ? "sm:translate-y-[13.75rem]" : "md:flex"}`}>
                <ul className="flex sm:flex-col md:flex-row-reverse sm:gap-4 md:gap-0 bg-gray-200 sm:bg-opacity-20 md:bg-opacity-0 sm:w-full sm:p-4 md:p-1">
                    {NavLinkProps.map((val, index) => {
                        const className = window.location.pathname == val.href ? 'nav-link active' : 'nav-link';
                        return (<li>
                            <Link key={index} className={className} href={val.href}>{val.children}</Link>
                        </li>);
                    })}
                </ul>
            </div>
            <div className='px-12 sm:block md:hidden'>
                <HamburgerButton state={hamburgerState} onClick={() => { setHamburgerState(!hamburgerState); }} />
            </div>
        </nav>
    );
}