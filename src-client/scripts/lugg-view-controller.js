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

let AppController = React.createClass({
   getInitialState: function(){
      ACTIONS.fetchLuggData()
      //   let data = ACTIONS.fetchLuggData()
            // STORE.setStore('newLuggData', data)
            let initialState = STORE.getLuggData()
            console.log("init state", initialState)
         return initialState

     },

     componentWillMount: function(){
         let self = this

         STORE.onChange(function(){
            console.log('view willMount');

             let newState = STORE.getLuggData()
             self.setState(newState)

         })
      },

   render: function(){

      switch(this.props.routedFrom){
         case "LuggAccept":
            return <LuggAccept />
            break;

         case "CargoDisplay":
            return <CargoDisplay newLuggData={this.state.newLuggData} id={this.props.modelId}/>
            break;

         case "LuggProfile":
            return <LuggProfile newLuggData= {this.state.newLuggData}/>
            break;

         case "HomeView":
            return <HomeView />
            break;

         case "LuggAuthView":
            return <LuggAuthView />
            break;

         case "PackAuthView":
            return <PackAuthView />
            break;

         case "CreateLugg" :
            return <CreateLugg />
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
