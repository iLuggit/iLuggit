import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'


const HomeView = React.createClass({

   render: function() {

    return (
      <div className="home-container">
         <div className="container-fluid text-center main-container ">
                  <div className="container ">
                     <h1>iLuggit</h1>
                     <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
                  </div>
            <div className="row profile-row">
            <div className="col-xs-12 col-md-6 ">
                  <div className="luggProfile text-center">
                     <a href="#truck-login"><i className="fa fa-truck fa-5x" aria-hidden="true"></i></a>
                     <h3>Create a Lugger Profile</h3>
                     <p>Want to be a Lugger, create a Lugger Profile and get Started</p>
                  </div>
            </div>
           <div className="col-xs-12 col-md-6 ">
                <div className="create-pack-profile text-center">
                     <a href="#user-login"><i className="fa fa-user-plus fa-5x" aria-hidden="true"></i></a>
                     <h3>Create a Packer Profile</h3>
                     <p>Your a Packer and need a Lugger to help move your items</p>
                </div>
              </div>
            </div>
         </div>
      {<hr/>}
      <div className="container-fluid info-container">
         <div className="row">
            <div className="col-xs-12 col-md-4 text-center">
               <div className="truck-info">
                  <a href="#truckinfo"><img src= "./images/truckclock.png" alt="" /></a>
                  <h3>Truck Info</h3>
                  <p>We have many different types of trucks to fit all your lugging needs. Find a style that fits you.  </p>
               </div>
            </div>
               <div className="col-xs-12 col-md-4 text-center">
               <div className="lugg-reviews">
                  <a href="#luggreviews"><img src="./images/luggerreviews.jpeg" alt=""/></a>
                  <h3>Lugger Reviews</h3>
                  <p>See what our Luggers are saying about the Packers that they have served.</p>
               </div>
            </div>
               <div className="col-xs-12 col-md-4 text-center">
               <div className="pack-reviews">
                  <a href="#packreviews"><img src="./images/userreviews.png" alt=""/></a>
                  <h3>Packer Reviews</h3>
                  <p>Se what out Packers are saying about the Luggers they have hired.</p>
               </div>
            </div>
         </div>
      </div>
   <div className="footer-container text-center">
         <div className="container-fluid">
            <div className="left-chamber">
               <div className="copyright2">
               </div>
               <div className="copyright2016">
                  <p>2016 iLuggit</p>
               </div>
            </div>
            <div className="middle-chamber">
               <div className="quicklinks">
               <ul>
                  <li>How it Works</li>
                  <li>FAQ</li>
                  <li>Blog</li>
                  <li>Imprint</li>
               </ul>
               </div>
            </div>
            <div className ="right-chamber">
               <div className="follow-us">
                     <p> Follow US </p>
               </div>
                     <i className="fa fa-twitter fa-lg twitter" aria-hidden="true"></i>
                     <i className="fa fa-facebook fa-lg facebook" aria-hidden="true"></i>
                     <i className="fa fa-google fa-lg google" aria-hidden="true"></i>
                  </div>
               </div>
              </div>
            </div>
         )
      }
   })
module.exports = HomeView
