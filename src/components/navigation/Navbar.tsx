import Link from "./Link";
import LinkProps from '../../types/LinkProps';

const NavLinkProps = [
    { href: '/', children: 'Profile' },
    { href: '/projects', children: 'Projects' },
    { href: '/about-me', children: 'About Me' },
] as LinkProps[];
export default function Navbar() {
    return (
        <nav className="bg-gray-200 bg-opacity-20 fixed w-screen p-1 z-20">
            <div className="wrapper">
                <ul className="flex flex-row-reverse">
                    {NavLinkProps.map((val, index) => {
                        const className = window.location.pathname == val.href ? 'nav-link active' : 'nav-link';
                        return (<Link key={index} className={className} href={val.href}>{val.children}</Link>);
                    })}
                </ul>
            </div>
        </nav>
    );
}