import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
    constructor(){
        super();
        this.state={
            count:0,
        }
    };

    onSetCountdownTime = (e) => {
        this.setState({
            count:e,
        });
    }


    resetCount = () => {
		this.setState({ count: 0 });
    };
    

    render() {
        var {count}= this.state;
        return (
            <div>
                {count!==0 && (
                    <Clock timeInSeconds={count} resetCount={this.resetCount}/>
                )}
                
                <CountdownForm onSetCountdownTime={this.onSetCountdownTime}/>
            </div>
        );
    }
} 
export default Countdown;