import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import ACTIONS from './ACTiONS.js'
import STORE from './STORE.js'
import AppController from './lugg-view-controller.js'

const showWhatWeDo = React.createClass({
   render:function(){
      return(
         <div className ="main-faq-container">
         <div className="container-fluid ">
            <nav className="navbar navbar-default">
               <a className="navbar-brand " href="#"><img className ="navbar-logo" src="../images/logo1.png" alt = "" /></a>
               <ul className="nav navbar-nav navbar-right">
               <li><a href="#">Home</a></li>
               <li><a onClick = {this._logOut}>Logout</a></li>
               </ul>
            </nav>
               <div className="container-fluid faq-logo-container">
                     <h1 className ="faq-lead">FAQ's</h1>
               </div>
               <div className = "container-fluid faq-container">
                     <p>Q. What is iLuggit?<br/>
                        A. It is a uber service that pairs people who need a truck with those that own a truck</p><br/>
                     <p>Q. Where is ILuggit available?<br/>
                        A. Currently we are servicing Charleston and surrounding areas</p><br/>
                     <p>Q. What kinds of Items can ILuggit move?<br/>
                        A. What ever can fit into the back of a Pickup Truck, Van, or sometimes Trailer.</p><br/>
                     <p>Q. What kinds of vehicles does ILuggit offer?<br/>
                        A. We offer Luggers with small bed, medium bed, large bed Pickup Trucks, as well as Van, and Trailers</p><br/>
                     <p>Q. Who should use ILuggit?<br/>
                        A. Anyone who needs the services of a truck, whether you are needing items delivered from Home Depot,<br/>
                           or yard trash delivered to the city dump. ILuggit services are for anyone who needs the use of a truck<br/>
                           but does not own a truck</p>
               </div>
         </div>
      </div>

      )
   }
})

module.exports = showWhatWeDo
