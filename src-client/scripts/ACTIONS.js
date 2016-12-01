import Backbone from 'backbone'
import React from 'react'
import $ from 'jquery'

import {UserModel, UserCollection, LoginModel, CreateUserModel, TruckModel, CreateTruckModel, CreateLuggModel, ReviewCollection, AuthenticateUser, LogOut} from './lugg-model.js'
import STORE from './STORE.js'
const ACTIONS = {

   _authenticateUser: function(loginPack){
      let loginMod = new LoginModel()
      loginMod.set(loginPack)
      loginMod.save().then(function(serverRes){
       STORE.setStore('currentUser', loginPack)

      // console.log('are we changing the route?', window.location);
         location.hash = '/create-lugg';
    })
  },

   _createUser: function(newCreate){
      let createMod = new CreateUserModel()
      createMod.set(newCreate)
      createMod.save().then(function(serverRes){
         location.hash = '/create-lugg';
    })
  },

  _authenticateTruck: function(loginTruck){
     let truckLoginMod = new TruckModel()
     truckLoginMod.set(loginTruck)
     truckLoginMod.save().then(function(serverRes){
        STORE.setStore('currentTruck', loginTruck)

      //   console.log('am i even here?')

        location.hash = '/lugg-list';
    })
  },

  _createTruck: function(createTruck){
     let truckCreateMod = new CreateTruckModel()
     truckCreateMod.set(createTruck)
     truckCreateMod.save().then(function(serverRes){
      //   console.log('are we changing the route?', window.location);
        location.hash = '/lugg-list';
    })
  },

  createLugg: function(newLugg){
     console.log(newLugg)
     let createLuggMod = new CreateLuggModel()
     createLuggMod.set(newLugg)
     createLuggMod.save().then(function(){
        location.hash ='#'
    })
  },

  fetchLuggData: function(){
      let luggCollInstance = new UserCollection();
         luggCollInstance.fetch().then(function(){
            STORE.setStore('newLuggData', luggCollInstance.models);
            // console.log('fetch ', luggCollInstance);
      })
      // return luggCollInstance
   },

   fetchReview: function(){
      let reviewCollInstance = new ReviewCollection();
         reviewCollInstance.fetch().then(function(){
            STORE.setStore('newReviewData', reviewCollInstance.models);
            // console.log('review fetch', reviewCollInstance);
         })
      return reviewCollInstance
   },

   _acceptLugg: function(id){
      let acceptlugg = new CreateLuggModel()
      acceptlugg.url = `/accept-lugg/${id}`
      // console.log('saving teh lugg')
      acceptlugg.save().then(function(serverRes){
         // console.log("okay this should route somewhere else now")
         location.hash = '/lugg-list';
     }).fail(function(error){
      //   console.log("did i fail??", error)
     })
  },

  _logOut: function(){
     $.ajax({
        method: 'POST',
        url: '/logout'
     }).then(function(){
        STORE.setStore('currentUser', {})
        STORE.setStore('currentTruck', {  })
        location.hash = ''
     })
  },

  setModal:function(showingStatus, modalData){
      console.log(modalData)
      STORE.setStore('modalWindowSettings', {
        isShowing:showingStatus,
        payload: modalData,
     })
 },

   getCurrentUser: function(){
      let uMod = new UserModel()
      let tMod = new TruckModel()
      tMod.checkAuth().then(function(servRes){
         STORE.setStore('currentTruck', tMod)
         console.log('truck auth', servRes)
   })
      uMod.checkAuth().then(function(servRes){
         console.log('packer auth', servRes)
         STORE.setStore('currentUser', uMod)
   })






}

   // _authenticateUser: function(){
   //    let currentUser = new AuthenticateUser()
   //    currentUser.set(currentUser)
   //    currentUser.save().then(function(){
   //       location.hash = '';
   //
   //
   //    })
   // }
}


module.exports = ACTIONS
