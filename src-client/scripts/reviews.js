import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import ACTIONS from './ACTiONS.js'
import STORE from './STORE.js'
import AppController from './lugg-view-controller.js'

const showReviews = React.createClass({
   render:function(){
      return(
         <div>
            <p>on the page</p>
         </div>
      )
   }
})

module.exports = showReviews
