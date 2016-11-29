import Backbone from 'backbone';
import $ from 'jquery';

const UserModel = Backbone.Model.extend({
   url: '',

      initialize: function(){

      }
})

const UserCollection = Backbone.Collection.extend({
   model: UserModel,
   url: '/luggs',

      initialize: function(){

      }
})

const LoginModel = Backbone.Model.extend({
   model: UserModel,
   url: '/user-login',

      initialize: function(){

      }
})
const CreateUserModel = Backbone.Model.extend({
   model: UserModel,
   url: '/create-user',

      initialize: function(){

      }
})

const TruckModel = Backbone.Model.extend({
   model: UserModel,
   url: '/truck-login',

      initialize: function(){

      }
})

const CreateTruckModel = Backbone.Model.extend({
   model: UserModel,
   url: '/create-truck',

      initialize: function(){

      }
})

const CreateLuggModel = Backbone.Model.extend({
   model: UserModel,
   url: '/create-lugg',

      initialize: function(){

      }
})

const ReviewCollection = Backbone.Collection.extend({
   model: UserModel,
   url: '/reviews',

      initialize: function(){

      }
})
const AuthenticateUser = Backbone.Model.extend({
   model: UserModel,
   url: '/auth-user',

      initialize: function(path){
         this.url = path

      }
})
const LogOut = Backbone.Model.extend({
   model: UserModel,
   url: '/logout',

      initialize: function(path){
         this.url = path
      }
})

module.exports = {
   UserModel,
   UserCollection,
   LoginModel,
   CreateUserModel,
   CreateTruckModel,
   TruckModel,
   CreateLuggModel,
   ReviewCollection,
   AuthenticateUser,
   LogOut

}
