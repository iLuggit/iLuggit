import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'

import ACTIONS from './ACTIONS.js'

const PackAuthView = React.createClass({
   _submitLogin: function(evt){
      console.log('evt', evt);
         evt.preventDefault()


         let newLogin = {
            useruser: this.refs.user_name2.value,
            password: this.refs.pass_word2.value
         }
         console.log(newLogin)

         ACTIONS._loginUser(newLogin)
      },
      _submitCreate: function(evt){
            evt.preventDefault()

            let newCreate = {
               first_name: this.refs.first_name2.value,
               last_name: this.refs.last_name2.value,
               email: this.refs.email2.value,
               phone_number: parseInt(this.refs.phone_number2.value),
               useruser: this.refs.new_username.value,
               password: this.refs.new_password.value

            }
            console.log(newCreate)

            ACTIONS._createUser(newCreate)
         },

   render: function(){
      return(
            <div>
               <div className = "row text-center">
                  <form className = "col-sm-offset-3 col-sm-6 " id="login-form" onSubmit = {this._submitLogin}>
                           <a href = "#"><i className="fa fa-home fa-2x " aria-hidden="true"></i></a>
                           <h2 className = "">Existing Packer Login </h2>
                        <div className = "form-group">
                           <label htmlFor = "new-username"></label>
                           <input type = "text" className="form-control" name = "username" ref = "user_name2" placeholder = "Enter Username" />
                        </div>
                        <div className="form-group">
                           <label htmlFor = "new-password"></label>
                           <input type = "password" className="form-control" name = "password" ref = "pass_word2" placeholder="Enter Password"/>
                        </div>
                           <input type = "submit" className="btn btn-default" />
                  </form>
               </div>
               <div className = "row text-center">
                  <form className = "col-sm-offset-3 col-sm-6 " id="create-form" onSubmit = {this._submitCreate}>
                           <h2 className = "">Create New Packer </h2>
                        <div className = "form-group">
                           <label htmlFor = "firstname"> </label>
                           <input type = "text" className="form-control" name = "firstname" ref = "first_name2" placeholder = "Enter First Name" />
                        </div>
                        <div className="form-group">
                           <label htmlFor = "lastname"></label>
                           <input type = "text" className="form-control" name ="lastname" ref = "last_name2" placeholder="Enter Last Name"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor = "new-email"></label>
                           <input type = "text" className="form-control" name = "email" ref = "email2" placeholder="Enter Email"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor = "new-phone"></label>
                           <input type = "text" className="form-control" name = "phone_number" ref = "phone_number2" placeholder="Enter Phone Number"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor = "new-username"></label>
                           <input type = "text" className="form-control" name = "new-username" ref = "new_username" placeholder="Enter Username"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor = "new-password"></label>
                           <input type = "password" className="form-control" name ="new-password" ref = "new_password" placeholder="Enter Password"/>
                        </div>
                           <input type = "submit" className="btn btn-default" />
                  </form>
               </div>
            </div>
      )
   }
})

module.exports = PackAuthView
