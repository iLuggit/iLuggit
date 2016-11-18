import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'

const LuggProfile = React.createClass({

   render: function(){

      return(
         <div>
            <div className = "row text-center">
            <div className="jumbotron jumbotron-fluid text-center main-container">
               <div className="container">
                  <h1 className="display-3">iLuggit</h1>
                  <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
               </div>
            </div>
               <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
            </div>
            <div>
               <ul>
                  <a href = "#cargo"><li>Object from lugg database</li></a>
               </ul>
            </div>
            <div id="map">
            </div>
         </div>
      )

   }

})

module.exports = LuggProfile
