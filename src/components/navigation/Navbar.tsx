import React from "react";

export class Navbar extends React.Component {
    render(): React.ReactNode {
        return (
            <nav className="navbar">
                <div className="wrapper">
                    <ul className="nav-menu flex flex-row-reverse">
                        <li className="nav-item">
                            <a href="#profile" className="nav-link">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about-me" className="nav-link">About me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}