import Link from "./Link";

export default function Navbar() {
    return (
        <nav className="bg-gray-200 bg-opacity-20 fixed w-screen p-1 z-20">
            <div className="wrapper">
                <ul className="flex flex-row-reverse">
                    <li className="nav-item">
                        <Link className='nav-link' href='/'>Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' href='/projects'>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' href='/about-me'>About me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}