import React from 'react';
import StyleSheet from './css/style.css';
import PubSub from 'pubsub-js';

class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Btn';
    }

    handleClick(){
    	PubSub.publish('load');
    }

    render() {
       return <button className='btn' onClick={this.handleClick.bind(this)}>开始加载</button>
    }
}

export default Btn;
