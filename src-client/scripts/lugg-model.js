import Backbone from 'backbone';
import $ from 'jquery';

const UserModel = Backbone.Model.extend({
   url: '',

      initialize: function(){

      }
})

const UserCollection = Backbone.Collection.extend({
   model: UserModel,
   url: 'localhost:8080/luggs',

      initialize: function(){

      }
   })

const LoginModel = Backbone.Model.extend({
   model: UserModel,
   url: 'localhost:8080/user-login',

      initialize: function(){

      }
})
const CreateUserModel = Backbone.Model.extend({
   model: UserModel,
   url: 'localhost:8080/create-user',

      initialize: function(){

      }

})

const TruckModel = Backbone.Model.extend({
   model: UserModel,
   url: 'localhost:8080/truck-login',

      initialize: function(){

      }
})

const CreateTruckModel = Backbone.Model.extend({
   model: UserModel,
   url: 'localhost:8080/create-truck',

      initialize: function(){

      }

})
module.exports = {
   UserModel,
   UserCollection,
   LoginModel,
   CreateUserModel,
   CreateTruckModel

}
