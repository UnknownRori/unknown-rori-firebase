import LinkProps from '@/types/LinkProps';
import Link from "./Link";

const NavLinkProps = [
    { href: '/', children: 'Profile' },
    { href: '/projects', children: 'Projects' },
    { href: '/about-me', children: 'About Me' },
] as LinkProps[];

export default function Navbar() {
    return (
        <nav className="bg-gray-200 bg-opacity-20 fixed w-screen p-1 z-20">
            <div className="wrapper">
                <ul className="flex flex-row-reverse p-2">
                    {NavLinkProps.map((val, index) => {
                        const className = window.location.pathname == val.href ? 'nav-link active' : 'nav-link';
                        return (<li>
                            <Link key={index} className={className} href={val.href}>{val.children}</Link>
                        </li>);
                    })}
                </ul>
            </div>
        </nav>
    );
}