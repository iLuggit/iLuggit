import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import AppController from './lugg-view-controller.js'



const LuggAuthView = React.createClass({
   _submitlogin:function(evt){
      evt.preventDefault()

<<<<<<< HEAD
   render: function(){
      return(
      <div>
         <div>
            <h1>Lugger Login</h1>
         </div>
          <form className="form-group grid-container" onSubmit={this._handleUserAuth}>
=======
      let existinUserData = {
         username: evt.target.name.value,
         password: evt.target.password.value

      }
      console.log(existinUserData);
   },

   _submitnewtrucker: function(evt){
   evt.preventDefault()

   let newUserData = {
      userName: evt.target.userName.value,
      password: evt.target.password.value,
      first_name: evt.target.firstName.value,
      last_name: evt.target.lastName.value,
      email: evt.target.email.value,
      phone_number: evt.target.phone.value,
      bedSize: evt.target.bed.value
>>>>>>> 902ba6914f43c015b08af888d015c1bc21720ce4

   }

   console.log(newUserData);

<<<<<<< HEAD
             <div className="form-field sm-12-of-12 md-12-of-12 txt-center">
                 <input type="submit" className="btn primary" value="+"/>
             </div>

          </form>
         </div>
=======
   ACTIONS.authenticateUser(newUserData)
},

   render: function(){
      return(
         <div>
            <div>
               <h1>Lugger Login</h1>
            </div>

            <div className = "row text-center">
                 <form className = "col-sm-offset-3 col-sm-6 " id="login-form" onSubmit = {this._submitlogin}>
                          <a href = "#"><i className="fa fa-home fa-2x " aria-hidden="true"></i></a>
                          <h2 className = "">Existing User Login </h2>
                       <div className = "form-group">
                          <label htmlFor = "name"> </label>
                          <input type = "text" className="form-control" id="name" placeholder = "Enter Username" />
                       </div>
                       <div className="form-group">
                          <label htmlFor = "password"></label>
                          <input type = "password" className="form-control" id="password" placeholder="Enter Password"/>
                       </div>
                          <input type = "submit" className="btn btn-default" />
                 </form>
              </div>
              <br/>
>>>>>>> 902ba6914f43c015b08af888d015c1bc21720ce4

              <div className = "row text-center">
                   <form className = "col-sm-offset-3 col-sm-6 " id="login-form" onSubmit = {this._submitnewtrucker}>
                            <h2 className = "">New Lugger </h2>
                         <div className = "form-group">
                            <label htmlFor = "name"> </label>
                            <input type = "text" className="form-control" id="userName" placeholder = "New Username" />
                         </div>
                         <div className = "form-group">
                            <label htmlFor = "Password"> </label>
                            <input type = "password" className="form-control" id="password" placeholder = "Password" />
                         </div>
                         <div className = "form-group">
                            <label htmlFor = "name"> </label>
                            <input type = "text" className="form-control" id="firstName" placeholder = "First Name" />
                         </div>
                         <div className="form-group">
                            <label htmlFor = "name"></label>
                            <input type = "text" className="form-control" id="lastName" placeholder="Last Name"/>
                         </div>
                         <div className="form-group">
                            <label htmlFor = "name"></label>
                            <input type = "text" className="form-control" id="email" placeholder="Email"/>
                         </div>
                         <div className="form-group">
                            <label htmlFor = "name"></label>
                            <input type = "text" className="form-control" id="phone" placeholder="Phone Number"/>
                         </div>
                         <div className="form-group">
                            <label htmlFor = "name"></label>
                            <input type = "text" className="form-control" id="bed" placeholder="Truck Bed Size"/>
                         </div>

                            <input type = "submit" className="btn btn-default" />
                   </form>
                </div>
          </div>
      )
   }
})

module.exports = LuggAuthView
