import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'


const HomeView = React.createClass({

   render: function() {

    return (
      <div className="home-container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">ILuggit</h1>
            <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
          </div>
        </div>
        <div className="row">
           <div className="col-xs-12 col-md-6 ">
             <div className="create-lugg-profile">
                 <div className="luggProfile">
                    <h3>Create a Lugger Profile</h3>
                    <p>Want to be a Lugger, create a Lugger Profile and get Started</p>
                 </div>
             </div>
           </div>
           <div className="col-xs-12 col-md-6 ">
             <div className="create-pack-profile ">
                 <div className="packProfile">
                    <h3>Create a Packer Profile</h3>
                    <p>Your a Packer and need a Lugger to help move your items</p>
                 </div>
             </div>
           </div>
        </div>
      </div>

     )
  }
})
module.exports = HomeView
