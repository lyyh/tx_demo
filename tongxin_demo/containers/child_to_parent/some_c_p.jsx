import React from 'react';

class MyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MyContainer';
    	this.state = {
    		totalChecked: 0
    	}
    }

    onChildChanged(){
    	var newTotal = this.state.totalChecked+(newState?1:-1)
    	this.setState({
    		totalChecked: newTotal
    	})
    }
    render() {
       
    }
}

export default MyContainer;
