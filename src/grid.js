/** @jsx React.DOM */

var Cell = React.createClass({
  render: function(){
    return React.DOM.td({
      children: this.props.content
    });
  }
});

React.renderComponent(
  React.DOM.h1({
    children: "Hello World!"
  }),
  document.getElementById('example')
);
