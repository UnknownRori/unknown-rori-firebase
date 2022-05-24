import React, { ReactPropTypes } from "react";
import { Footer } from './components/navigation/Footer';
import { Navbar } from './components/navigation/Navbar';
import { Sidebar } from './components/navigation/Sidebar';
import { AboutMePage } from "./page/AboutMe";
import { MyProfilePage } from './page/MyProfile';
import { MyProjectsPage } from "./page/MyProjects";

class App extends React.Component {
    public state = {
        listPage: [
            <MyProfilePage isNext={false} isPrevious={false} />, 
            <MyProjectsPage isNext={false} isPrevious={false} />, 
            <AboutMePage isNext={false} isPrevious={false} />
        ],
        page: {
            targetPageNumber: 0,
            currentPageNumber: 0,
        }
    };

    constructor(props: ReactPropTypes){
        super(props);
        
        this.changePage = this.changePage.bind(this);
    }

    changePage(number: number){
        this.setState({
            page: {
                ...this.state.page,
                targetPageNumber: number
            }
        }, () => {
            const interval = setInterval(() => {
                this.setState({
                    page: {
                        ...this.state.page,
                        currentPageNumber: this.state.page.targetPageNumber > this.state.page.currentPageNumber ?
                            this.state.page.currentPageNumber + 1 : this.state.page.currentPageNumber - 1
                    }
                }, () => {
                    if (this.state.page.currentPageNumber == this.state.page.targetPageNumber) clearInterval(interval);
                });

            }, 1000);
        });
    }

    render(): React.ReactNode {
        let lastPage;
        let nextPage;

        const currentPage = this.state.listPage[this.state.page.currentPageNumber];

        if(this.state.listPage[this.state.page.currentPageNumber + 1]){
            nextPage = React.cloneElement(this.state.listPage[this.state.page.currentPageNumber + 1], {
                isNext: true,
                isPrevious: false,
            });
        }

        if(this.state.listPage[this.state.page.currentPageNumber - 1]) {
            lastPage = React.cloneElement(this.state.listPage[this.state.page.currentPageNumber - 1], {
                isNext: false,
                isPrevious: true
            });
        }

        return (
            <>
                <div className='min-h-screen flex'>
                    <Navbar changePage={this.changePage} />
                    <Sidebar />
                    <>
                        {nextPage}
                        {currentPage}
                        {lastPage}
                    </>
                    <Footer />
                </div>
            </>
        );
    }
}

export default App;
