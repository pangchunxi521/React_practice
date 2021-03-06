

import React from 'react';
import '../../public/css/stylea.css'



class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log('完成')
    }

    render() {
        return (
            <div>
                <h1 className="box"> 首页</h1>
                 <p> Seconds: {this.state.seconds}</p>
                <ol start={10} type="i">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ol>
            </div>
        );
    }
}

export default Index;
