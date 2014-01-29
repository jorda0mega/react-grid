/** @jsx React.DOM */

var Cell = React.createClass({
  render: function(){
    return React.DOM.td({
    });
  }
});

React.renderComponent(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
