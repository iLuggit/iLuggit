import Backbone from 'backbone'
import React from 'react'
import $ from 'jquery'


// import AuthView from './auth-view.js'
import HomeView from './home-page.js'

let AppController = React.createClass({

   render: function(){

      switch(this.props.routedFrom){
         case "LuggAccept":
            return <LuggAccept/>
            break;

         case "CargoDisplay":
            return <CargoDisplay/>
            break;

         case "LuggList":
            return <LuggList/>
            break;

         case "PackProfile":
            return<PackProfile/>
            break;

         case "LuggProfile":
            return<LuggProfile/>
            break;

         case "HomeView":
            return<HomeView/>
            break;

         case "AuthView":
            return<AuthView/>
            break;

         default:
            return
            <div>
               <h1>Please Return to the home page</h1>
               <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
            </div>
      }
   }
})

module.exports = AppController
