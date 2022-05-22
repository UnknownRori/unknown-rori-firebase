import React from 'react';
import './../../asset/css/Footer.css';

export class Footer extends React.Component {
    render(): React.ReactNode {
        const date = new Date();
        return (
            <footer className='footer'>
                <div className='wrapper flex flex-row m-auto items-center'>
                    <div className='m-auto text-center'>
                        <span>{date.getFullYear()}&copy; UnknownRori</span>
                    </div>
                </div>
            </footer>
        );
    }
}