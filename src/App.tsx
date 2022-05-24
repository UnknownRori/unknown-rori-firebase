import React, { ReactPropTypes } from "react";
import { Footer } from './components/navigation/Footer';
import { Navbar } from './components/navigation/Navbar';
import { Sidebar } from './components/navigation/Sidebar';
import { AboutMePage } from "./page/AboutMe";
import { ContactMePage } from "./page/ContactMe";
import { MyProfilePage } from './page/MyProfile';
import { MyProjectsPage } from "./page/MyProjects";

class App extends React.Component {
    public state = {
        page: [<MyProfilePage />, <MyProjectsPage />, <ContactMePage />, <AboutMePage />],
        currentPageNumber: 0,
        isAnimate: false,
    };

    constructor(props: ReactPropTypes){
        super(props);
        
        this.changePage = this.changePage.bind(this);
    }

    changePage(number: number){
        this.setState({
            currentPageNumber: number
        });
    }

    render(): React.ReactNode {
        return (
            <>
                <div className='min-h-screen flex'>
                    <Navbar changePage={this.changePage} />
                    <Sidebar />
                    <>
                        {this.state.page[this.state.currentPageNumber]}
                    </>
                    <Footer />
                </div>
            </>
        );
    }
}

export default App;
