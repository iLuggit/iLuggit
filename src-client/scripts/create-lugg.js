import Backbone from 'backbone'
import $ from 'jquery'
import ACTIONS from './ACTIONS.js'
import SimpleMapPage from './map-api.js'
import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
import STORE from './STORE.js'
import ModalWindow from './modal-window.js'


const CreateLugg = React.createClass({

   componentWillMount: function(){
      ACTIONS.fetchLuggData()
        console.log('cr-lugg view', this.props);

     },

   _createLugg: function(evt){
      evt.preventDefault()
      let createNewLugg = {
            pickup_address: this.refs.start_address.value,
            dropoff_address: this.refs.end_address.value,
            haul_description: this.refs.cargo_description.value,
         }

         ACTIONS.createLugg(createNewLugg)

      },

   _modalDisplayLugger: function(jobMod){
      console.log(jobMod);
      ACTIONS.setModal(true, jobMod.get('truck'))
   },

   render: function(){
      let component = this
   //  console.log('props', this.props);
    let outstandingPacks = this.props.newLuggData.map(function(model, i){
      let acceptedStatus
      if (model.get('truck')){
         acceptedStatus = <button onClick={ function(){component._modalDisplayLugger(model) } } type='button' className='btn btn-primary status-btn' data-toggle='modal' data-target='.modal-lg'> Accepted By: {model.get('truck').first_name} {model.get('truck').last_name}</button>
      } else {
         acceptedStatus = <button type='button' className='btn btn-primay pendingBtn status-btn'>Pending</button>
      }


      return (


                  <div key={i} className="list-group">
                     <div className="list-group-item">
                        <h4 ><span className ="userNameList"> {model.get('user').first_name}</span>, you're moving <span className="userNameList">  {typeof model === 'object' && model.get('haul_description')} </span> {acceptedStatus} </h4> <br/>
                     </div>
                  </div>


       )
    });





      let CharlestonMap = {
         center: {lat: 32.784618, lng: -79.940918},
         zoom: 10,
      }

      let pinsArray = this.props.newLuggData.map(function(model, i){

         return {
             latitude: model.get('pickUpLatitude'),
            longitude: model.get('pickUpLongitude'),
            job_price: model.get('job_price')
         }
      })


      return(
         <div>
            <nav className="navbar navbar-default">
            <a className="navbar-brand " href="#"><img className ="navbar-logo" src="../images/logo1.png" alt = "" /></a>
            <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Home</a></li>
            <li><a onClick = {this._logOut}>Logout</a></li>
            </ul>
         </nav>
         <div className = "lugg-home-container">
            <ModalWindow modalSettings={this.props.modalWindowInfo}/>
            <div className="container-fluid text-center packer-container ">
                     <h1>iLuggit</h1>
                     <h3 className="lead">Tell us what you need moved, we'll find a Lugger!</h3>
            </div>
            <div>
               <h3>Oustanding Packs </h3>
               <div className="row">
                  <ul>
                     { outstandingPacks }
                  </ul>
               </div>
            </div>

            <div className ="form-container">
               <div className ="row ">
                  <form className = "col-xs-12 col-md-6 " id="create-lugg-form" onSubmit = {this._createLugg}>
                       <h2 className = "">Welcome, Create a New Lugg </h2>
                  <div className = "col-xs-12 form-group">
                       <label htmlFor = "startAddress"> </label>
                       <input type = "text" className="form-control" id = "s_address" ref = "start_address" placeholder = "Enter Starting Address" />
                  </div>
                    <div className = "col-xs-12 form-group">
                       <label htmlFor = "endAddress"> </label>
                       <input type = "text" className="form-control" id = "e_address" ref = "end_address" placeholder = "Enter End Address" />
                    </div>
                    <div className = "col-xs-12 form-group">
                       <label htmlFor = "cargoDescription"> </label>
                       <input type = "text" className="form-control" id = "cargo_description" ref = "cargo_description" placeholder = "Enter Description of Lugg" />
                    </div>

                    <input type = "submit" className="btn btn-default" />
               </form>
               <div className="map-container2">
                  <div id= "map2">
                     <SimpleMapPage mapConfig = {CharlestonMap} pinsData = {pinsArray} />
                  </div>
               </div>
              </div>
            </div>
         </div>
         </div>
    );
   }
})

module.exports = CreateLugg
