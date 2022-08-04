import React, { ReactPropTypes } from "react";
import Background from "./components/animation/Background";
import { Footer } from './components/navigation/Footer';
import { Navbar } from './components/navigation/Navbar';
import { Sidebar } from './components/navigation/Sidebar';
import AboutMePage from "./page/AboutMe";
import MyProfilePage from './page/MyProfile';
import MyProjectsPage from "./page/MyProjects";

class App extends React.Component {
    public state = {
        listPage: [
            <MyProfilePage animateIn={false} animateOut={false} />,
            <MyProjectsPage animateIn={false} animateOut={false} />,
            <AboutMePage animateIn={false} animateOut={false} />
        ],
        page: {
            page: <MyProfilePage animateIn={false} animateOut={false} />,
            targetPageNumber: 0,
            currentPageNumber: 0,
            currentlyChange: false,
        }
    };

    constructor(props: ReactPropTypes) {
        super(props);

        this.changePage = this.changePage.bind(this);
    }

    changePage(number: number) {
        if (this.state.page.currentlyChange) return;

        this.setState({
            page: {
                ...this.state.page,
                targetPageNumber: number,
                currentlyChange: true,
            }
        }, () => {
            // Set the current page to animate out
            this.setState({
                page: {
                    ...this.state.page,
                    page: React.cloneElement(this.state.listPage[this.state.page.currentPageNumber], {
                        animateOut: true
                    })
                }
            });

            // After animation set the current page to target page with fade in animation
            setTimeout(() => {
                this.setState({
                    page: {
                        ...this.state.page,
                        currentPageNumber: this.state.page.targetPageNumber,
                        page: React.cloneElement(this.state.listPage[this.state.page.targetPageNumber], {
                            animateIn: true
                        })
                    }
                }, () => {
                    // Reset animation status
                    setTimeout(() => {
                        this.setState({
                            page: {
                                ...this.state.page,
                                page: this.state.listPage[this.state.page.currentPageNumber],
                                currentlyChange: false,
                            }
                        });
                    }, 1000);
                });
            }, 1000);
        });
    }

    render(): React.ReactNode {
        const currentPage = this.state.page.page;

        return (
            <>
                <Background />
                <div className='min-h-screen flex'>
                    <Navbar changePage={this.changePage} />
                    <Sidebar />
                    <>
                        {currentPage}
                    </>
                    <Footer />
                </div>
            </>
        );
    }
}

export default App;
