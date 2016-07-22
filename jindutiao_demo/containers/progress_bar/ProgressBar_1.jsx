import React from 'react';
import StyleSheet from './css/style.css';
import $ from 'jquery';


class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ProgressBar';
    }
    render() {
        return <div>ProgressBar</div>;
    }
}


class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Btn';
    }
    render() {
        return <div>Btn</div>;
    }
}


export default ProgressBar;
