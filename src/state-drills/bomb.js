import React, {Component} from 'react';

export default class Bomb extends Component{
    state ={
        count:0,
    };

    componentDidMount() {
        console.log ("component mounted")
        this.interval = setInterval(() => {
            this.setState({
              count: this.state.count + 1
            })
          }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderDisplay() {
        const {count} =  this.state;
        if (count >=8){
            clearInterval(this.interval)
            return "BOOM!"
        } else if (count %2 === 0) {
            return "Tick"
            
        } else {
            return "Tock"
        }
    }

    render() {
        console.log("Rendered")
        return (
          <div className='CountdownBomb'>
            {this.renderDisplay()}
          </div>
        )
      }
}
