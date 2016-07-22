import React from 'react';


// 父组件传子组件
let MyContainer = React.createClass({
	getDefaultProps() {
	    return {
	          
	    };
	},
	getInitialState() {
	    return {
	        checked: true  
	    };
	},
	render(){
		return <ToggleButton text = 'Toggle me' checked={this.state.checked}/>
	}
})

let ToggleButton = React.createClass({
	render(){
		//从父节点获取值
		var checked = this.props.checked,
			text = this.props.text

			return(
				<label>{text}:<input type='checkbox' checked={checked}/></label>
			)
	}
})

export default MyContainer