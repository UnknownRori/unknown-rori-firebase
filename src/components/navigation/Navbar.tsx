import React from "react";

export class Navbar extends React.Component {
    render(): React.ReactNode {
        return (
            <nav className="bg-gray-200 bg-opacity-20 fixed w-screen p-4">
                <div className="wrapper">
                    <ul className="flex flex-row-reverse">
                        <li className="nav-item">
                            <button className="nav-link">Profile</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link">Projects</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link">About me</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}