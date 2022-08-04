import React from "react";
import NavbarProps from "../../interface/NavbarProps";

export default class Navbar extends React.Component<NavbarProps> {

    constructor(props: NavbarProps) {
        super(props);

        this.Profile = this.Profile.bind(this);
        this.Projects = this.Projects.bind(this);
        this.AboutMe = this.AboutMe.bind(this);
    }

    Profile() {
        this.props.changePage(0);
    }

    Projects() {
        this.props.changePage(1);
    }

    AboutMe() {
        this.props.changePage(2);
    }

    render(): React.ReactNode {
        return (
            <nav className="bg-gray-200 bg-opacity-20 fixed w-screen p-1 z-20">
                <div className="wrapper">
                    <ul className="flex flex-row-reverse">
                        <li className="nav-item">
                            <button className="nav-link" onClick={this.Profile}>Profile</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={this.Projects}>Projects</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={this.AboutMe}>About me</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}