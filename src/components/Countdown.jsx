import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
  

    render() {
        //var count= {this.state}
        return (
            <div>
                <Clock />
                <CountdownForm />
            </div>
        );
    }
}
// timeInSeconds={count}
// onSetCountdownTime={}
export default Countdown;