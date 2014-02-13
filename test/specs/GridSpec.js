var ReactTestUtils,
    data;

describe("Grid suite", function(){
  beforeEach(function(){
    data = $.ajax({
      url: "http://localhost:8080/data",
      datatype: "jsonp"
    });
    ReactTestUtils = React.addons.ReactTestUtils;
  });

  it("gets the data", function(){
    var d;
    data.done(function(d){
      d = d;
    });
    data.fail(function(){
      alert("failure");
    });

    data.always(function(){
      alert("complete");
    });

    expect(d.length > 0).toBe(true);
  });

  it("check text assignment", function(){
    var label = React.DOM.label({
      children: "hello world!"
    });

    ReactTestUtils.renderIntoDocument(label);
    expect(label.props).toBeDefined();
    expect(label.props.children).toBe("hello world!");
  });
});
