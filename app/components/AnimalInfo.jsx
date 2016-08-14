var React = require("react");
var actions = require("../actions/AnimalActions");

module.exports = React.createClass({
    deleteAnimal: function(form) {
        
        actions.deleteAnimal(this.props.info);
    },

	render: function() {
		return (
			<div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <div className="pull-right delete-button"
                         style={{ cursor: 'pointer' }} 
                         onClick={this.deleteAnimal}>&times;
                    </div>
                </div>
                <div className="panel-body">
                    {this.props.info.type}
                </div>
            </div>
		)
	}
})