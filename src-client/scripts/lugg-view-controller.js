import Backbone from 'backbone'
import React from 'react'
import $ from 'jquery'

import ACTIONS from './ACTIONS.js'
import STORE from './STORE.js'
import CargoDisplay from './display-cargo-details.js'
import {LuggProfile, LuggView} from './lugg-list.js'
import PackAuthView from './pack-auth-view.js'
import LuggAuthView from './lugg-auth-view.js'
import HomeView from './home-page.js'
import CreateLugg from './create-lugg.js'
import LuggCreated from './display-created-lugg.js'
import Sandbox from './sandbox.js'
import TruckInfo from './truckinfo.js'
import WhatWeDo from './whatwedo.js'
import Reviews from './reviews.js'

let AppController = React.createClass({
   getInitialState: function(){

         return STORE.getLuggData()
     },

     componentWillMount: function(){
         let self = this
         ACTIONS.fetchLuggData()

         STORE.onChange(function(){

             let newState = STORE.getLuggData()
             self.setState(newState)

         })
      },

   render: function(){
      console.log("stateeee", this.state);

      switch(this.props.routedFrom){
         case "LuggAccept":
            return <LuggAccept />
            break;

         case "CargoDisplay":
            return <CargoDisplay newLuggData = {this.state.newLuggData} id={this.props.modelId} />
            break;

         case "LuggProfile":
            return <LuggProfile newLuggData= {this.state.newLuggData}/>
            break;

         case "HomeView":
            return <HomeView />
            break;

         case "LuggAuthView":
            return <LuggAuthView existingUserData = {this.state.existingUserData}/>
            break;

         case "PackAuthView":
            return <PackAuthView />
            break;

         case "CreateLugg" :
            return <CreateLugg newLuggData={this.state.newLuggData} />
            break;

         case "LuggCreated":
            return <LuggCreated />
            break;

         case "Sandbox":
            return <Sandbox />
            break;

         case "TruckInfo":
            return <TruckInfo />
            break;

         case "WhatWeDo":
            return <WhatWeDo />
            break;

         case "Reviews":
               return <Reviews />
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
