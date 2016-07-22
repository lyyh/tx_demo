import React from 'react';

//父组件
class MyComponents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }

    onChildChange(newState){
        this.setState({
            checked: newState
        })
    }

    render() {
        var isChecked = this.state.checked? 'yes':'no'
        return (
            <div>
                <div>Are you checked: {isChecked}</div>
                <ToggleButton text = 'Toggle me'
                initialChecked = {this.state.checked}
                callBackParent = {this.onChildChange.bind(this)}
                />
            </div>
        )
    }
}


//子组件
class ToggleButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.initialChecked
        }
        this.onTextChange = this.onTextChange.bind(this)
    }

    onTextChange(){
        var newState = !this.state.checked
        this.setState({
            checked: newState
        })

        this.props.callBackParent(newState)
    }

    render() {
        var text = this.props.text
        var checked = this.state.checked
        return(
            <label>{text}: 
            <input type="checkbox" checked={checked} 
            onChange={this.onTextChange} />
            </label>
            )
    }
}

export default MyComponents;