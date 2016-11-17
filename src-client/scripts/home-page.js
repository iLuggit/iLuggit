import Backbone from 'backbone'
import React from 'react'
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
      </div>
     )
  }
})
module.exports = HomeView
