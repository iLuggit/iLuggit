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

            <div className="container pack-description-container">
                <div className="col-sm-offset-3 col-sm-6">
                  <div className="panel panel-info">
                     <div className="panel-heading">
                        <h3 className="panel-title">Details Of Pack</h3>
                     </div>
                     <div className="panel-body">
                     <table class="table table-striped table-hover">

                       <thead>
                         <tr>
                           <th>Packer Info</th>
                           <th>Packer Description</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr >
                           <td>First Name: &nbsp; &nbsp;</td>
                           <td>{typeof model === 'object' && model.get('user').first_name}</td>
                        </tr>
                        <tr>
                           <td>email: &nbsp; &nbsp;</td>
                           <td>{typeof model === 'object' && model.get('user').email}</td>
                        </tr>
                        <tr>
                           <td>Phone Number: &nbsp; &nbsp;</td>
                           <td>{typeof model === 'object' && model.get('user').phone_number}</td>
                        </tr>
                        <tr>
                           <td>Haul Description: &nbsp; &nbsp;</td>
                           <td>{typeof model === 'object' && model.get('haul_description')}</td>
                        </tr>
                        <tr>
                           <td>Pickup address: &nbsp; &nbsp; </td>
                           <td>{typeof model === 'object' && model.get('pickup_address')}</td>
                        </tr>
                        <tr>
                           <td>Drop off address: &nbsp; &nbsp;</td>
                           <td>{typeof model === 'object' && model.get('dropoff_address')}</td>
                        </tr>
                        <tr>
                           <td>Job Price: &nbsp; &nbsp;</td>
                           <td> ${typeof model === 'object' && model.get('job_price')}</td>
                        </tr>
                     </tbody>
                  </table>
                     </div>
                  <div>
                     <div className="btn-group">
                        <button type="button" onClick = {this._acceptLugg}  ref={'id'} data-id = {typeof model === 'object' && model.get('id')} className="btn btn-success accept-button">Accept Lugg</button>
                        <a href="/#lugg-list"><button type="button"  className="btn btn-info return-button">Return</button></a>
                     </div>
                     </div>
                    <div className="container-fluid text-right oneLugg-container">
                        <h1 className="lead">...One Lugg</h1>
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
