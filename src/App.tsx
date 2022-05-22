import React from "react";
import { Footer } from './components/navigation/Footer';
import { Navbar } from './components/navigation/Navbar';
import { Sidebar } from './components/navigation/Sidebar';
import { AboutMePage } from "./page/AboutMe";
import { ContactMePage } from "./page/ContactMe";
import { MyProfilePage } from './page/MyProfile';
import { MyProjectsPage } from "./page/MyProjects";

class App extends React.Component {
    public state = {
        page: [MyProfilePage, MyProjectsPage, ContactMePage, AboutMePage],
        currentPage: 0,
        isAnimate: false,
    };

    render(): React.ReactNode {
        const display = this.state.page[this.state.currentPage];

        return (
            <>
                <div className='min-h-screen flex'>
                    <Navbar />
                    <Sidebar />
                    <>
                        {display}
                    </>
                    <Footer />
                </div>
            </>
        );
    }
}

export default App;
