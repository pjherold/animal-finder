var React = require("react");
var AnimalInfo = require("./AnimalInfo.jsx");
var AddAnimal = require("./AddAnimal.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-sm-6">
                    <AddAnimal />
                </div>
                <div className="col-sm-6">
                    {
                        this.props.animals.map(function(s,index){
                            return(
                                <AnimalInfo info={s} key={"animal"+index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});
