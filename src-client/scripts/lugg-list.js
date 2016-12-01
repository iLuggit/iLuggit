import Backbone from 'backbone'
import ReactDOM from 'react-dom'
import ACTIONS from './ACTIONS.js'
import STORE from './STORE.js'
import AppController from './lugg-view-controller.js'
import SimpleMapPage from './map-api.js'
import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';



const LuggProfile = React.createClass({

   render: function(){


      let luggs = this.props.newLuggData.map(function(model){
        //console.log('its me')
         return <LuggView key = {model.cid} model={model} />
      })

      let CharlestonMap = {
         center: {lat: 32.784618, lng: -79.940918},
         zoom: 10,
      };
      let pinsArray = this.props.newLuggData.map(function(model, i){


         return {
             latitude: model.get('pickUpLatitude'),
            longitude: model.get('pickUpLongitude'),
            job_price: model.get('job_price')
         }
      })

      return(
         <div >
         <div className="container-fluid home-container">
            <nav className="navbar navbar-default">
               <a className="navbar-brand " href="#"><img className ="navbar-logo" src="../images/logo1.png" alt = "" /></a>
               <ul className="nav navbar-nav navbar-right">
               <li><a href="#">Home</a></li>
               <li><a onClick = {this._logOut}>Logout</a></li>
               </ul>
            </nav>
            <div className="container-fluid text-center packer-container ">
                     <h1>Lugger Dashboard</h1>
            </div>
            <div className = "lugg-map-container">
              <div className = "row">
                  <div className ="lugg-list-container text-center ">
                     <div className = "col-xs-6 col-md-3 lugg-item">
                           <p>Lugg Item</p>
                           { luggs }
                     </div>
                     <div className ="map-container text-center">
                        <div className ="col-xs-12 col-md-6">
                           <div>
                              <p>Lugger Map</p>
                           </div>
                           <div id="map">
                              <SimpleMapPage mapConfig = {CharlestonMap} pinsData = {pinsArray} />
                           </div>
                           <div>
                           <p>*Markers are the Starting Address's of the Packers</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      );
   }
});


   const LuggView = React.createClass({

     render: function(){
        return(
            <div className ="col-xs-12 col-md-4">
               <div className = "lugg-data thumbnail text-center">
                     <a href={`#cargo/${this.props.model.get('id')}`}>{this.props.model.get('user').useruser}<br/>
                     {this.props.model.get('haul_description')}</a>
               </div>
            </div>




      )
   }
})

module.exports = {
   LuggProfile,
   LuggView
}
