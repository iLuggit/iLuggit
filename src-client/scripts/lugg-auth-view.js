import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import ACTIONS from './ACTIONS.js'

const LuggAuthView = React.createClass({
   _submitTruckLogin:function(evt){
      evt.preventDefault()


      let existingUserData = {
         username: this.refs.user_name.value,
         password: this.refs.pass_word.value

      }
      console.log(existingUserData);
      ACTIONS.loginTruck(existingUserData)

   },

   _submitNewTrucker: function(evt){
   evt.preventDefault()

   let newUserData = {
      username: this.refs.username.value,
      password: this.refs.password.value,
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      email: this.refs.email.value,
      phone_number: parseInt(this.refs.phone_number.value),
      bedSize: this.refs.bedSize.value

   }
   console.log(newUserData);
   ACTIONS.createTruck(newUserData)
},

   render: function(){
      return(
         <div>
            <div className = "row text-center">
                 <form className = "col-sm-offset-3 col-sm-6 " id="login-form" onSubmit = {this._submitTruckLogin}>
                          <a href = "#"><i className="fa fa-home fa-2x " aria-hidden="true"></i></a>
                          <h2 className = "">Existing Lugger Login </h2>
                       <div className = "form-group">
                          <label htmlFor = "name"> </label>
                          <input type = "text" className="form-control" name = "username" ref = "user_name" placeholder = "Enter Username" />
                       </div>
                       <div className="form-group">
                          <label htmlFor = "password"></label>
                          <input type = "password" className="form-control" name = "password" ref = "pass_word" placeholder="Enter Password"/>
                       </div>
                          <input type = "submit" className="btn btn-default" />
                 </form>
              </div>
              <br/>
              <div className = "row text-center">
                   <form className = "col-sm-offset-3 col-sm-6 " id="login-form" onSubmit = {this._submitNewTrucker}>
                            <h2 className = "">Create New Lugger </h2>
                         <div className = "form-group">
                            <label htmlFor = "name"> </label>
                            <input type = "text" className="form-control" id="username" ref = "username" placeholder = "Username" />
                         </div>
                         <div className = "form-group">
                            <label htmlFor = "password"> </label>
                            <input type = "password" className="form-control" id="password" ref = "password" placeholder = "Password" />
                         </div>
                         <div className = "form-group">
                            <label htmlFor = "name"> </label>
                            <input type = "text" className="form-control" id="firstName" ref = "first_name" placeholder = "First Name" />
                         </div>
                         <div className="form-group">
                            <label htmlFor = "name"></label>
                            <input type = "text" className="form-control" id="lastName" ref = "last_name" placeholder="Last Name"/>
                         </div>
                         <div className="form-group">
                            <label htmlFor = "name"></label>
                            <input type = "text" className="form-control" id="email" ref = "email" placeholder="Email"/>
                         </div>
                         <div className="form-group">
                            <label htmlFor = "name"></label>
                            <input type = "text" className="form-control" id="phone" ref ="phone_number" placeholder="Phone Number"/>
                         </div>
                         <div className="form-group">
                            <label htmlFor = "name"></label>
                            <input type = "text" className="form-control" id="bed" ref ="bedSize" placeholder="Truck Bed Size"/>
                         </div>
                            <input type = "submit" className="btn btn-default" />
                   </form>
                </div>
          </div>
      )
   }
})

module.exports = LuggAuthView
