import React from 'react';
import background1 from './../../asset/image/background/background1.webp';
import background2 from './../../asset/image/background/background2.webp';
import background3 from './../../asset/image/background/background3.webp';
import background4 from './../../asset/image/background/background4.webp';
import background5 from './../../asset/image/background/background5.webp';
import background6 from './../../asset/image/background/background6.webp';
import './../../asset/css/Background.css';

export class Background extends React.Component {
    public state = {
        interval: 1,
        beforeInterval: 0,
        backgroundInterval: setInterval(() => {
            const current = document.getElementById(`background-${this.state.interval}`);
            const previous = document.getElementById(`background-${this.state.beforeInterval}`);
            if (current != null) {
                current.style.opacity = '1';
            }
            if (previous != null) {
                previous.style.opacity = '0';
            }

            this.state.interval++;
            this.state.beforeInterval++;

            if (this.state.interval > 6) {
                this.state.interval = 1;
            }
            if (this.state.beforeInterval > 6) {
                this.state.beforeInterval = 1;
            }
        }, 4000)
    };

    componentWillUnmount() {
        clearInterval(this.state.backgroundInterval);
    }

    render(): React.ReactNode {
        return (
            <div className='absolute background'>
                <img src={background1} id='background-1' style={{'opacity': 1}} className='background' alt="" />
                <img src={background2} id='background-2' style={{'opacity': 0}} className='background' alt="" />
                <img src={background3} id='background-3' style={{'opacity': 0}} className='background' alt="" />
                <img src={background4} id='background-4' style={{'opacity': 0}} className='background' alt="" />
                <img src={background5} id='background-5' style={{'opacity': 0}} className='background' alt="" />
                <img src={background6} id='background-6' style={{'opacity': 0}} className='background' alt="" />
            </div>
        );
    }
}