import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'

const LuggProfile = React.createClass({

   render: function(){
      // let luggs = this.props.newLuggData.models.map(function(model){
      //       return luggs
      //     })
      return(
         <div>
            <div className = "row text-center">
            <div className="jumbotron jumbotron-fluid text-center main-container">
            <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
               <div className="container">
                  <h1 className="display-3">iLuggit</h1>
                  <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
               </div>
            </div>
            </div>
            <div>
               <ul>
                  <a href = "#cargo"><li>This is where the object goes.</li></a>
               </ul>
            </div>
            <div id="map">
            </div>
         </div>
      )

   }

})

module.exports = LuggProfile
