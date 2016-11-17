import STORE from './STORE.js'
import $ from 'jquery'
import {UserModel, UserCollection, LoginModel, CreateUserModel, CreateTruckModel} from './lugg-model.js'
const ACTIONS = {

   loginUser: function(newLogin){
      let loginMod = new LoginModel()
      loginMod.set(newLogin)
      loginMod.save().then(function(serverRes){
         location.hash = '#create-packer-profile';
    })
  },

   createUser: function(newCreate){
      let createMod = new CreateUserModel()
      createMod.set(newCreate)
      createMod.save().then(function(serverRes){
         location.hash = '#create-packer-profile';
    })
  },

  loginTruck: function(loginTruck){
     let truckLoginMod = new LoginModel()
     truckLoginMod.set(loginTruck)
     truckLoginMod.save().then(function(serverRes){
        location.hash = '#create-lugger-profile';
    })
  },

  createTruck: function(createTruck){
     let truckCreateMod = new CreateTruckModel()
     truckCreateMod.set(createTruck)
     truckCreateMod.save().then(function(serverRes){
        location.hash = '#create-lugger-profile';
    })
  },
}
module.exports = ACTIONS
