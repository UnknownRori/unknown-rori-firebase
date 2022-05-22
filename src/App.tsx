import { Background } from './components/animation/Background';
import { Footer } from './components/navigation/Footer';
import { Navbar } from './components/navigation/Navbar';
import { Sidebar } from './components/navigation/Sidebar';
import { Profile } from './components/profile/Profile';

function App() {
    return (
        <>
        <Background/>
        <div className='min-h-screen flex'>
            <Navbar />
            <Sidebar/>
            <div className='wrapper'>
                <Profile />
            </div>
            <Footer />
        </div>
        </>
    );
}

export default App;
