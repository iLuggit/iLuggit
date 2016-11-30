import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import ACTIONS from './ACTiONS.js'
import STORE from './STORE.js'
import AppController from './lugg-view-controller.js'


const showTruckInfo = React.createClass({

   render: function (){

      return (
         <div className="container-fluid">
         <div className="container-fluid home-container">
            <nav className="navbar navbar-default">
               <a className="navbar-brand " href="#"><img className ="navbar-logo" src="../images/logo1.png" alt = "" /></a>
               <ul className="nav navbar-nav navbar-right">
               <li><a href="#">Home</a></li>
               <li><a onClick = {this._logOut}>Logout</a></li>
               </ul>
            </nav>
                  <div className ="container-fluid about-container">
                     <img className ="truck-info-logo" src= "../images/logo1.png" alt="" />
                     <h1 className ="truck-info-lead">iLuggit, Our Story</h1>
                  </div>
               <div className= "container-fluid builderPro">
                  <div className="col-xs-12 col-md-4 luggProfile">
                        <div className="thumbnail text-center">
                           <h3>Jon Gammon</h3>
                           <img className="profileImg1" src="http://st.motortrend.com/uploads/sites/5/2014/06/2014-Dodge-Demon-Challenger-SRT8-Dee-Snider.jpg"/>
                           <p>Front End Engineer, Jon, loving perforamce cars, has never had the ablility to move large items when he need. Wished he had a truck to move his cars.</p>
                        </div>
                  </div>
                  <div className="col-xs-12 col-md-4 luggProfile ">
                        <div className="thumbnail text-center">
                           <h3>Paul Swift</h3>
                           <img className="profileImg2" src="http://www.imcdb.org/i151027.jpg"/>
                           <p>Front End Engineer Paul, has a truck, and grew tired of always having his friends ask him to help them move their items.</p>
                        </div>
                  </div>
                  <div className="col-xs-12 col-md-4 luggProfile">
                        <div className=" thumbnail text-center">
                           <h3>Barry Daniels</h3>
                           <img className="profileImg3" src="./images/WoW!.jpeg"/>
                           <p>Back End Engineer Barry has moved several times, but his moves have never warranted a moving service. Would have been easier with a truck.</p>
                        </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
})

module.exports = showTruckInfo
