import Backbone from 'backbone';
import $ from 'jquery';

const UserModel = Backbone.Model.extend({
   url: '',

      initialize: function(){

      }
})

const UserCollection = Backbone.Collection.extend({
   model: UserModel,
   url: '',

      initialize: function(){

      }
   })

})

module.exports = {
   UserModel,
   UserCollection

}
