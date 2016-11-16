import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import AppController from './lugg-view-controller.js'

const AppRouter = Backbone.Router.extend({
   routes: {
    "user-login" : "showAuthView",
      "luggAcpt" : "showLuggAccept",
        "cargo"  : "showDisplayCargo",
      "luggList" : "showLuggList",
       "PackPro" : "showPackProfile",
       "luggPro" : "showLuggProfile",
              "" : "showSplashPage"
   },

   showAuthView: function(){
      ReactDOM.render(<AppController routedFrom = "AuthView" />, document.querySelector('#app-container'))

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

   showSplashPage: function(){
      ReactDOM.render(<AppController routedFrom = "SplashPage" />, document.querySelector('#app-container'))

   },

   initialize: function(){
   Backbone.history.start();

   }
})
const app = new AppRouter()
