import React from 'react';
import '../../public/css/stylea.css';

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            seconds:0,
            time:new Date()
        }
    };

    tick(){
        this.setState(prevState => ({
            seconds:prevState.seconds + 1,
            time:new Date()
        }))
    }
    componentDidMount(){
        this.interval = setInterval(() => {this.tick()},1000)
    }
    componentWillMount(){
        console.log("组件渲染调用前")
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    };
    render(){
        return (
            <div>
                <h1>这是商城页</h1>
                <p>Seconds:  <span>{this.state.seconds}</span>  </p>
                <h3>{this.state.time.toLocaleTimeString()}</h3>
            </div>
        )
    }
}

export default Index;