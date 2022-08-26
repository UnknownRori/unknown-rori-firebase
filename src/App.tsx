import Background from "./components/animation/Background";
import Footer from './components/navigation/Footer';
import Navbar from './components/navigation/Navbar';
import Sidebar from './components/navigation/Sidebar';
import useRoute, { RouterContext } from "./hooks/useRoute";
import router from "./router/router";

export default function App() {
    const [currentPage, changePage] = useRoute(router);

    return (
        <>
            <Background />
            <div className='min-h-screen flex overflow-x-hidden'>
                <RouterContext.Provider value={changePage}>
                    <Navbar />
                </RouterContext.Provider>
                <Sidebar />
                <>
                    {currentPage}
                </>
                <Footer />
            </div>
        </>
    );
}