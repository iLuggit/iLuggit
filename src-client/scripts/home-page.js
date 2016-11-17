import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'


const HomeView = React.createClass({

   render: function() {

    return (
   <div className="home-container">
         <div className="jumbotron jumbotron-fluid text-center main-container">
            <div className="container">
               <h1 className="display-3">iLuggit</h1>
               <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
            </div>
         </div>
        <div className = "container-fluid">
         <div className="row">
            <div className="col-xs-12 col-md-6 ">
               <div className="create-lugg-profile">
                 <div className="luggProfile text-center">
                    <a href="#truck-login"><i className="fa fa-truck fa-5x" aria-hidden="true"></i></a>
                    <h3>Create a Lugger Profile</h3>
                    <p>Want to be a Lugger, create a Lugger Profile and get Started</p>
                 </div>
               </div>
            </div>
           <div className="col-xs-12 col-md-6 ">
             <div className="create-pack-profile ">
                 <div className="packProfile text-center">
                    <a href="#user-login"><i className="fa fa-user-plus fa-5x" aria-hidden="true"></i></a>
                    <h3>Create a Packer Profile</h3>
                    <p>Your a Packer and need a Lugger to help move your items</p>
                 </div>
             </div>
           </div>
         </div>
      </div>
      <div className="container-fluid ">
         <div className="row">
            <div className="col-xs-12 col-md-4 text-center">
               <div className="truck-info">
                  <h3>Truck Info</h3>
                  <p>Lorem ipsum dolor sit amet, nulla pariatur. erunt mollit anim id est laborum.</p>
               </div>
            </div>
            <div className="lugg-reviews">
               <div className="col-xs-12 col-md-4 text-center">
                  <h3>Lugger Reviews</h3>
                  <p>Lorem ipsum dolor situatlpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
            </div>
            <div className="pack-reviews">
               <div className=" col-xs-12 col-md-4 text-center">
                  <h3>Packer Reviews</h3>
                  <p>Lorem ipsum dolor sit amet, dfyidshs akfds kha dlgkgjre im id est laborum.</p>
               </div>
            </div>
        </div>
      </div>
   </div>
     )
  }
})
module.exports = HomeView
