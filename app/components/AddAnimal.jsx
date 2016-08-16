var React = require("react");
var actions = require("../actions/AnimalActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          type:""
      }  
    },
    addAnimal:function(form){
        form.preventDefault();
        actions.addAnimal(this.state);
    },
    handleInputChange:function(form){
      form.preventDefault();
      var state = this.state;
      state[form.target.name] = form.target.value;
      this.setState(state);
    },
    render:function() {
        return(
            <form className="form" onSubmit={this.addAnimal}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Animal Name:</label>
                    <input type="text" className="form-control" id="name" name="name" 
                    		value={this.state.name} onChange={this.handleInputChange} 
                    		placeholder="Animal Name" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="type">Type:</label>
                    <input type="text" className="form-control" id="type" name="type" 
                    		value={this.state.type} onChange={this.handleInputChange} 
                    		placeholder="Type" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Animal</button>
                </div>
            </form>
        )
    }
})
