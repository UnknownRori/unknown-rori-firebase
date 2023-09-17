import Background from "@/components/animation/Background";
import Footer from '@/components/navigation/Footer';
import Navbar from '@/components/navigation/Navbar';
import Sidebar from '@/components/navigation/Sidebar';
import RouterView from "@/components/navigation/RouterView";
import ToastProvider from "./components/notification/ToastProvider";
import ToastView from "./components/notification/ToastView";

import router from "@/router/router";
import Router from "./components/navigation/Router";

export default function App() {
    return (
        <>
            <Background />
            <ToastProvider>
                <ToastView />
                <div className='min-h-screen flex overflow-x-hidden'>
                    <Router router={router}>
                        <Navbar />

                        <Sidebar />

                        <RouterView />
                    </Router>
                    <Footer />
                </div>
            </ToastProvider>
        </>
    );
}