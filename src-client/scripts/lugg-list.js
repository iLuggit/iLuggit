import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import ACTIONS from './ACTiONS.js'
import STORE from './STORE.js'
import AppController from './lugg-view-controller.js'


const LuggProfile = React.createClass({
   componentWillMount: function(){
      //   ACTIONS.fetchLuggData()
     },



   render: function(){

      let luggs = this.props.newLuggData.map(function(model){
      //   console.log('its me')
         return <LuggView key = {model.cid} model={model} />
      })
      return(
         <div>
            <div className = "row text-center">
               <div className="container-fluid text-center main-container">
                     <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
                  <div className="container">
                     <h1 className="display-3">iLuggit</h1>
                     <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
                  </div>
               </div>
            </div>
            <div className="container">
            <p>LUGG ITEM</p>
             <div className="row">
               { luggs }
             </div>
           </div>
         </div>
       );
     }
   });

   const LuggView = React.createClass({


     render: function(){
        return(
             <div className="col-xs-12">
               <div className = "lugg-data">
                  <ul>
                     <li><a href={`#cargo/${this.props.model.get('id')}`}>{this.props.model.get('username')}:{this.props.model.get('haul_description')}</a></li>
                  </ul>
               </div>
            <div id="map"></div>
            </div>




      )

   }

})

module.exports = {
   LuggProfile,
   LuggView
}
