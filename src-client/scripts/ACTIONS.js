import STORE from './STORE.js'
import $ from 'jquery'
import {UserModel, UserCollection, LoginModel, CreateUserModel, CreateTruckModel} from './lugg-model.js'

const ACTIONS = {

   loginUser: function(newLogin){
      let loginMod = new LoginModel()
      loginMod.set(newLogin)
         window.location.hash = '#create-lugg';
    })
  },

   createUser: function(newCreate){
      let createMod = new CreateUserModel()
      createMod.set(newCreate)
         window.location.hash = '#create-lugg';
    })
  },

  loginTruck: function(loginTruck){
     let truckLoginMod = new LoginModel()
     truckLoginMod.set(loginTruck)
        window.location.hash = '#lugg-list';
    })
  },

  createTruck: function(createTruck){
     let truckCreateMod = new CreateTruckModel()
     truckCreateMod.set(createTruck)
     truckCreateMod.save().then(function(serverRes){
        window.location.hash = '#lugg-list';
    })
  },

  createLugg: function(newLugg){
     let createLuggMod = new CreateLuggModel()
     createLuggMod.set(newLugg)
     createLuggMod.save().then(function(serverRes){
        window.location.hash = '#create-lugger-profile';
    })
  },
}

module.exports = ACTIONS
