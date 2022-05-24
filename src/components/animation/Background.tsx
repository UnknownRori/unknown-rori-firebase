import React, { ReactPropTypes } from 'react';
import background1 from './../../asset/image/background/background1.webp';
import background2 from './../../asset/image/background/background2.webp';
import background3 from './../../asset/image/background/background3.webp';
import background4 from './../../asset/image/background/background4.webp';
import background5 from './../../asset/image/background/background5.webp';
import background6 from './../../asset/image/background/background6.webp';
import { BackgroundItem } from './BackgroundItem';

export class Background extends React.Component {
    public state = {
        backgrounds: [background1, background2, background3, background4, background5, background6],
        interval: 1,
        beforeInterval: 0,
        backgroundInterval: undefined
    };

    constructor(props: ReactPropTypes){
        super(props);

        this.changeInterval = this.changeInterval.bind(this);
        this.changeBeforeInterval = this.changeBeforeInterval.bind(this);
    }

    changeBeforeInterval(number: number){
        this.setState({
            beforeInterval: number
        });
    }

    changeInterval(number: number) {
        this.setState({
            interval: number
        });
    }

    componentDidMount(){
        this.setState({
            backgroundInterval: setInterval(() => {
                this.changeInterval(this.state.interval + 1);
                this.changeBeforeInterval(this.state.beforeInterval + 1);

                if (this.state.interval > 6) {
                    this.changeInterval(1);
                }
                if (this.state.beforeInterval > 6) {
                    this.changeBeforeInterval(1);
                }
            }, 8000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.backgroundInterval);
    }

    render(): React.ReactNode {
        const backgroundList = this.state.backgrounds.map((background, index) => {
            return (<BackgroundItem image={background} opacity={this.state.interval == index ? 1 : 0} key={index} />);
        });
        return (
            <div className='fixed background'>
                {backgroundList}
            </div>
        );
    }
}