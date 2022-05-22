import { Background } from './components/animation/Background';
import { Footer } from './components/navigation/Footer';
import { Navbar } from './components/navigation/Navbar';
import { Profile } from './components/profile/Profile';

function App() {
    return (
        <>
        <Background/>
        <div className='min-h-screen flex'>
            <Navbar />
            <div className='wrapper'>
                <Profile />
            </div>
            <Footer />
        </div>
        </>
    );
}

export default App;
