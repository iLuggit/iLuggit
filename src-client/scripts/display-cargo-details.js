import Backbone from 'backbone'
import React from 'react'
import ACTIONS from './ACTIONS.js'
import LuggAuthView from './lugg-auth-view.js'
import $ from 'jquery'
const CargoDisplay = React.createClass({

     _acceptLugg: function(){

      let userid = this.refs.id.dataset.id
      // console.log('id', userid);

         ACTIONS._acceptLugg(userid)
     },


   render: function (){
      // console.log('username', existingUserData);
      let id = this.props.id
      // console.log('id', id);
      let model = this.props.newLuggData.find(function(model){
         // console.log('model', model)
         return Number(model.get('id')) === Number(id)
      })

      return(
      <div className ="home-container">
         <div className="container-fluid">
            <nav className="navbar navbar-default">
               <a className="navbar-brand " href="#"><img className ="navbar-logo" src="../images/logo1.png" alt = "" /></a>
                  <ul className="nav navbar-nav navbar-right">
                     <li><a href="#">Home</a></li>
                     <li><a href="#">Logout</a></li>
                  </ul>
               </nav>
            <div className="container-fluid text-center lugger-container">
                  <h1 className="lead">One Lugg</h1>
                  <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
            </div>
            <div className="container pack-description-container">
                <div className="col-sm-offset-3 col-sm-6 text-center">
                  <div className="panel panel-info">
                     <div className="panel-heading">
                        <h3 className="panel-title">Details Of Pack</h3>
                     </div>
                     <div className="panel-body">
                        <p>First Name: {typeof model === 'object' && model.get('user').first_name}</p>
                        <p>email: {typeof model === 'object' && model.get('user').email}</p>
                        <p>Phone Number: {typeof model === 'object' && model.get('user').phone_number}</p>
                        <p>Haul Description: {typeof model === 'object' && model.get('haul_description')}</p>
                        <p>Pickup address: {typeof model === 'object' && model.get('pickup_address')}</p>
                        <p>Drop off address: {typeof model === 'object' && model.get('dropoff_address')}</p>
                        <p>Job Price: ${typeof model === 'object' && model.get('job_price')}</p>
                     </div>
                  </div>
               <div>
                  <div className="btn-group">
                     <button type="button" onClick = {this._acceptLugg}  ref={'id'} data-id = {typeof model === 'object' && model.get('id')} className="btn btn-default">Accept Lugg</button>
                     <a href="/#lugg-list"><button type="button"  className="btn btn-default">Return</button></a>


                     </div>
                   </div>
                  </div>
                </div>
              </div>
          </div>

       );
     }
   });



module.exports = CargoDisplay
