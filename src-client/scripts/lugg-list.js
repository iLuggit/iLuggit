import Backbone from 'backbone'
import ReactDOM from 'react-dom'
import ACTIONS from './ACTiONS.js'
import STORE from './STORE.js'
import AppController from './lugg-view-controller.js'
import SimpleMapPage from './map-api.js'
import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';

// const CharlestonMap = {};

const LuggProfile = React.createClass({


   render: function(){

      let luggs = this.props.newLuggData.map(function(model){
         console.log('its me')
         return <LuggView key = {model.cid} model={model} />
      })
      let CharlestonMap = {
         center: {lat: 32.784618, lng: -79.940918},
         zoom: 9,
      }
      return(
            <div>
               <div className = "main-container">
                  <div className="container text-center">
                     <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
                     <h1 className="display-3">iLuggit</h1>
                     <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
                  </div>
               </div>
               <div className ="lugg-list-container">
                  <div className ="luggInfo">
                     <p>LUGG ITEM</p>
                        { luggs }
                  </div>
                  <div id= "map">
                     <SimpleMapPage {...CharlestonMap}/>
                  </div>
               </div>
            </div>

      );
   }
});


   const LuggView = React.createClass({
      // let uName = ''
      //    if ( this.props.model.get('user') ) && (this.props.model.get('user').useruser){
      //       return uName
      //
      //    }



     render: function(){
        return(
             <div className="col-xs-12">
               <div className = "lugg-data">
                  <ul>
                     <li><a href="">{ this.props.model.get('user') && this.props.model.get('user').useruser || ''} : {this.props.model.get('haul_description')}</a></li>
                  </ul>
               </div>
            </div>
      )
   }
})

module.exports = {
   LuggProfile,
   LuggView
}
