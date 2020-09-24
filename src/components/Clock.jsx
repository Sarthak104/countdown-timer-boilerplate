import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayTime: "",
			timeSeconds: 0,
        };
    };
    

    formatTime(timeInSeconds) {
        var seconds = timeInSeconds % 60;
        var minutes = Math.floor(timeInSeconds / 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return minutes + ':' + seconds;
    }

    startTime = () =>{
        var {timeInSeconds} = this.props;
        this.clock = setInterval(() => {
            this.setState({
                timeSeconds : this.state.timeSeconds - 1,
                displayTime : this.formatTime(this.state.timeSeconds - 1),
            });
        },1000);

        setTimeout(() => {
            clearInterval(this.clock);
            this.props.resetCount();
        }, (timeInSeconds+1) * 1000);
    };

    componentDidMount() {
		this.setState({ timeSeconds: this.props.timeInSeconds + 1 });
		if (this.props.timeInSeconds > 0) this.startTime();
	}


    render() {
        var {displayTime, timeSeconds} = this.state;
        //Keep the classes name. Try to inject your code and do not remove existing code
        return (
            <div className="clock">
                <span className="clock-text">
                  {timeSeconds!==0 && displayTime}
                </span>
            </div>
        );
    }
}

export default Clock;