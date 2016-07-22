import React,{Component} from 'react';
import StyleSheet from './css/style.css';
import $ from 'jquery';


let ProgressBar = React.createClass({
	getInitialState() {
    	return {
      		remain: 800
    	};
  	},

	handleClick(e){
			this.timer = setInterval(function(){
			if(this.state.remain < 50){
				clearInterval(this.timer)
			}
			var length = this.state.remain/Math.floor(Math.random()*2+1)
			this.setState({
					remain: length
				})
	 		}.bind(this),100)

			setTimeout(function(){
				$.get('../../doc/test.json', function(data) {
				this.setState({
					remain: 0
				})
				}.bind(this));
			}.bind(this),1000)
	},

	render(){
		let reLength = this.state.remain

		let objStyle = {
			width: reLength
		}

		return (
			<div>
			<button className='btn' onClick={this.handleClick}>开始加载</button>
			<div className='progress-bar'>
				<div className='progress-remain' style={objStyle}></div>
			</div>
			</div>
		)
	}
})

export default ProgressBar