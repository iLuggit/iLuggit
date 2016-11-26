import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

const STORE = {
      luggData: {
         newLuggData: [],
         existingUserData: []
   },

   setStore: function(luggProp, maindata){
      // if(typeof this.luggData[luggProp] === 'undefined'){
      //    console.error(`This is not a correct response reSubmit your entry`)
      //    return
      // }

      this.luggData[luggProp] = maindata
      Backbone.Events.trigger('shopChange')
   },

   getLuggData: function(){
      return this.luggData
   },

    onChange: function(someFunc){
      Backbone.Events.on('shopChange', someFunc)

   }
}


module.exports = STORE
