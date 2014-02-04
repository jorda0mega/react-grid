/** @jsx React.DOM */
var _ = require("../bower_components/underscore/underscore-min.js");

var Cell = React.createClass({
  render: function(){
    return (
      React.DOM.td({
        children: (this.props.expr)? this.props.expr(): this.props.content
      })
    );
  }
});


var Row = React.createClass({
  render: function(){
    var items = _.map(this.props.rows, function(row){
      return _.map(row, function(item){
      });
    });

    return(
      React.DOM.tr({
        children: Cell({expr: function(){ return "execution"; }, content: "testing"})
      })
    );
  }
});

var Grid = React.createClass({
  render: function(){
    return (
      React.DOM.table({
        id: "grid",
        style: {"border":"1px solid black"},
        children: Row({})
      })
    );
  }
});

React.renderComponent(
  Grid({}),
  document.getElementById('grid')
);
