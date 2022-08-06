import Background from "./components/animation/Background";
import Footer from './components/navigation/Footer';
import Navbar from './components/navigation/Navbar';
import Sidebar from './components/navigation/Sidebar';
import PageList from "./data/PageList";
import useRoute from "./hooks/useRoute";
export default function App() {
    const [currentPage, changePage] = useRoute(PageList);

    return (
        <>
            <Background />
            <div className='min-h-screen flex'>
                <Navbar changePage={changePage} />
                <Sidebar />
                <>
                    {currentPage}
                </>
                <Footer />
            </div>
        </>
    );
}