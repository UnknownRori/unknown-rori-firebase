import NavbarProps from "../../types/NavbarProps";

export default function Navbar(props: NavbarProps) {

    const Profile = () => {
        props.changePage(0);
    };

    const Projects = () => {
        props.changePage(1);
    };

    const AboutMe = () => {
        props.changePage(2);
    };

    return (
        <nav className="bg-gray-200 bg-opacity-20 fixed w-screen p-1 z-20">
            <div className="wrapper">
                <ul className="flex flex-row-reverse">
                    <li className="nav-item">
                        <button className="nav-link" onClick={Profile}>Profile</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={Projects}>Projects</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={AboutMe}>About me</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}