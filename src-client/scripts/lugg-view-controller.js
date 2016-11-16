import Backbone from 'backbone'
import React from 'react'
import $ from 'jquery'

import ACTIONS from './ACTIONS.js'
import STORE from './STORE.js'
import LuggAccept form './display-lugger-accepted.js'
import CargoDisplay from './display-cargo-details.js'
import LuggList from './lugg-list.js'
import PackProfile from './create-packer-profile.js'
import LuggProfile from './create-lugger-profile.js'
import AuthView from './auth-view.js'


let AppController = React.createClass({
   getinitialState: function(){
      return
   }
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

         case "SplashPage":
            return<SplashPage/>
            break:

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

module.export = AppController
