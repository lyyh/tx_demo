import React from 'react';
import PubSub from 'pubsub-js';
// 定义一个容器
var ProductList = React.createClass({
    render: function () {
      return (
        <div>
          <ProductSelection />
          <Product name="product 1" />
          <Product name="product 2" />
          <Product name="product 3" />
        </div>
      );
    }
});
// 用于展示点击的产品信息容器
var ProductSelection = React.createClass({
  getInitialState: function() {
    return {
      selection: 'none'
    };
  },
  componentDidMount: function () {
    this.pubsub_token = PubSub.subscribe('products', function (topic, product) {
      this.setState({
        selection: product
      });
    }.bind(this));
  },
  componentWillUnmount: function () {
    PubSub.unsubscribe(this.pubsub_token);
  },
  render: function () {
    return (
      <p>You have selected the product : {this.state.selection}</p>
    );
  }
});

var Product = React.createClass({
  onclick: function () {
    PubSub.publish('products', this.props.name);
  },
  render: function() {
    return <div onClick={this.onclick}>{this.props.name}</div>;
  }
});

export default ProductList