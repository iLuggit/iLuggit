import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

// import LuggAuthView from './auth-view.js'
import HomeView from './home-page.js'

import AppController from './lugg-view-controller.js'

console.log('hello')
const AppRouter = Backbone.Router.extend({
   routes: {

    "user-login" : "showPackAuthView",
   "truck-login" : "showLuggAuthView",
      "luggAcpt" : "showLuggAccept",
         "cargo" : "showDisplayCargo",
      "luggList" : "showLuggList",
       "packPro" : "showPackProfile",
       "luggPro" : "showLuggProfile",
              "" : "showHomeView"
   },
   showPackAuthView: function(){
      ReactDOM.render(<AppController routedFrom = "PackAuthView" />, document.querySelector('#app-container'))
   },

   showLuggAuthView: function(){
      ReactDOM.render(<AppController routedFrom = "LuggAuthView" />, document.querySelector('#app-container'))

   },

   showLuggAccept: function(){
      ReactDOM.render(<AppController routedFrom = "LuggAccept" />, document.querySelector('#app-container'))

   },

   showDisplayCargo: function(){
      ReactDOM.render(<AppController routedFrom = "CargoDisplay" />, document.querySelector('#app-container'))

   },

   showLuggList: function(){
      ReactDOM.render(<AppController routedFrom = "LuggList" />, document.querySelector('#app-container'))

   },

   showPackProfile: function(){
      ReactDOM.render(<AppController routedFrom = "PackProfile" />, document.querySelector('#app-container'))

   },

   showLuggProfile: function(){
      ReactDOM.render(<AppController routedFrom = "LuggProfile" />, document.querySelector('#app-container'))

   },
   showHomeView: function(){
      ReactDOM.render(<AppController routedFrom = "HomeView" />, document.querySelector('#app-container'))

   },

   initialize: function(){
   Backbone.history.start();

   }
})

const app = new AppRouter()
