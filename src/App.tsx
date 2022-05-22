import React from 'react';
import { Footer } from './components/navigation/Footer';
import { Navbar } from './components/navigation/Navbar';
import { Profile } from './components/profile/Profile';

function App() {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <Profile />
            <Footer />
        </div>
    );
}

export default App;
