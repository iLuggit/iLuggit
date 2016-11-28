import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import ACTIONS from './ACTIONS.js'

const HomeView = React.createClass({

   _logOut: function(){
      ACTIONS._logOut()
   },

   render: function() {



    return (
      <div className="home-container">
         <div className="container-fluid text-center main-container ">
                  <div className="container ">
                        <img className="logo" src= "./images/logo1.png" alt="" />
                        <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
                  </div>
            <div className="row">
               <div className ="profile-row">
                  <div className="col-xs-12 col-md-6 ">
                     <div className="luggerProfile text-center">
                        <a href="/#truck-login"><i className="fa fa-truck fa-5x" aria-hidden="true"></i></a>
                        <h3>Create a Lugger Profile</h3>
                        <p>Want to be a Lugger, create a Lugger Profile and get Started</p>
                     </div>
                  </div>
               <div className="col-xs-12 col-md-6 ">
                  <div className="packerProfile text-center">
                     <a href="/#user-login"><i className="fa fa-user-plus fa-5x" aria-hidden="true"></i></a>
                     <h3>Create a Packer Profile</h3>
                     <p>Your a Packer and need a Lugger to help move your items</p>
                  </div>
              </div>
            </div>
         </div>
      </div>
      <div className="container-fluid info-container">
         <div className="row">
            <div className="col-xs-12 col-md-4 text-center">
               <div className="truck-info">
                  <a href="#truck-info"><img src= "./images/truckclock.png" alt="" /></a>
                  <h3>Our Story</h3>
                  <p>What we do and why iLuggit was born.</p>
               </div>
            </div>
               <div className="col-xs-12 col-md-4 text-center">
               <div className="FAQ">
                  <a href="#whatwedo"><img src="./images/luggerreviews.jpeg" alt=""/></a>
                  <h3>FAQ</h3>
                  <p>Questions and Answers one who we are and what we do.</p>
               </div>
            </div>
               <div className="col-xs-12 col-md-4 text-center">
               <div className="pack-reviews">
                  <a href="#reviews"><img src="./images/userreviews.png" alt=""/></a>
                  <h3>Reviews</h3>
                  <p>See what users are saying.</p>
               </div>
            </div>
         </div>
      </div>
   <div className="footer-container text-center">
      <div className="columns-container updates-section">
         <div className="todays-quote">
            <h6>Quote of the Day</h6>
            <strong>We are all here to help others, what the others are here for I don't know! W.H.Auden</strong>
         </div>
      </div>
      <div className="news">
         <p className="description">Featured Luggers<span className="extra-caret"> »</span></p>
         <h5>Trust Worthy Packers <span className="extra-caret"> »</span></h5>
      </div>
   </div>
</div>


         )
      }
   })
module.exports = HomeView
