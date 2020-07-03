import React from 'react';

const ErrorComponent = () => <div>{this.props.ignore}</div>
class Counter extends React.Component {
    constructor(props) {
        console.log('Constructor');
        super(props);
        this.state = {
            counter:0
        }
        this.increment = () => this.setState({counter: this.state.counter + 1});
        this.decrement = () => this.setState({counter: this.state.counter - 1});
    }
    static getDerivedStateFromProps(props, state) {
        if(props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null;
    }
    componentDidMount() {
        console.log('component Did mount');
        console.log('---------------------');
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        
        if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log('Should Component update - Do not Render');
            return false;
        }
        console.log('Should Component update - Render');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get snapshot before update');
        return null;
    }
    render() {
        console.log('render');

        if(this.state.showErrorComponent && this.state.error) {
            return <div>We have encountered error: {this.state.error}</div>
        }
        return( <div>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <div className="counter">
                Counter: {this.state.counter}
            </div>
            {this.props.showErrorComponent ? <ErrorComponent/> : null}
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('Component did update');
        console.log('---------------------');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
        console.log('---------------------');
    }

    componentDidCatch(error, info) {
        console.log('Component did catch');
        this.setState({error, info});
    }
}

export default Counter;