import Backbone from 'backbone'
import ReactDOM from 'react-dom'
import ACTIONS from './ACTiONS.js'
import STORE from './STORE.js'
import AppController from './lugg-view-controller.js'
import SimpleMapPage from './map-api.js'
import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';



const LuggProfile = React.createClass({
   // componentWillMount: function(){
   //        ACTIONS.fetchLuggData()
   //   },



   render: function(){

      let luggs = this.props.newLuggData.map(function(model){
        //console.log('its me')
         return <LuggView key = {model.cid} model={model} />
      })
      let CharlestonMap = {
         center: {lat: 32.784618, lng: -79.940918},
         zoom: 13,
      }
      return(
         <div className = " lugg-map-container">
            <div className = "lugger-container">
                        <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
                        <h1 className="display-3">iLuggit</h1>
                        <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
            </div>
              <div className = "row">
                  <div className = "col-xs-12 col-md-6 lugg-list-container">
                     <div className ="lugg-data text-center ">
                        <p>LUGG ITEM</p>
                        { luggs }
                     </div>
                  </div>
               <div id= "map" className ="col-xs-12 col-md-6 map-container">
                        <SimpleMapPage {...CharlestonMap}/>
               </div>
            </div>
         </div>


      );
   }
});


   const LuggView = React.createClass({

     render: function(){
        return(
               <div className = "lugg-data thumbnail">
                     <a href={`#cargo/${this.props.model.get('id')}`}>{this.props.model.get('user').useruser}<br/>
                     {this.props.model.get('haul_description')}</a>
               </div>



      )
   }
})

module.exports = {
   LuggProfile,
   LuggView
}
