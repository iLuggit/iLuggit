const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');



const AppRouter = Backbone.Router.extend({
   routes: {
      "luggAcpt" : "showLuggAccept",
        "cargo"  :  "showDisplayCargo",
      "luggList" : "showLuggList"
       "PackPro" : "showPackProfile",
       "luggPro" : "showLuggProfile",
        "splash" : "showSplashPage"
   }

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
      ReactDOM.render(<AppController routedFrom = "" />, document.querySelector('#app-container'))

   }

})


initialize: function(){
   Backbone.history.start();
}

new AppRouter()
