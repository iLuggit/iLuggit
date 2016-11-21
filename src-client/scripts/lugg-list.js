import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'

import ACTIONS from './ACTIONS.js'

const LuggProfile = React.createClass({
   componentWillMount: function(){
        ACTIONS.fetchLuggData()
     },


   render: function(){

      let luggsArray = this.props.newluggData.models.map(function(model, index){
      //       return (luggs)
      //       console.log(luggs);
           })
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
                  <a href = "#cargo"><li>${model.get('haul_description')}</li></a>
               </ul>
            </div>
            <div id="map">
            </div>
         </div>
      )

   }

})

module.exports = LuggProfile
