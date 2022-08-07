import NavbarProps from "../../types/NavbarProps";

export default function Navbar(props: NavbarProps) {

    const changePage = (pageName: string) => {
        props.changePage(pageName);
    };

    return (
        <nav className="bg-gray-200 bg-opacity-20 fixed w-screen p-1 z-20">
            <div className="wrapper">
                <ul className="flex flex-row-reverse">
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => changePage('home')}>Profile</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => changePage('projects')}>Projects</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => changePage('aboutme')}>About me</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}