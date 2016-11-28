import Backbone from 'backbone'
import React from 'react'
import $ from 'jquery'


const LuggCreated = React.createClass({

   render: function(){
      let launchModal = function(){
         if (this.props.view === true) {
            return <LuggCreated/>
         }
      }.bind(this)
      return(
         <div class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
            {launchModal()}
               <div class="modal-content">
                  <div class="modal-header">
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                     <h4 class="modal-title">Lugg Created</h4>
                  </div>
                     <div class="modal-body">
                     <p>Your Lugg has been created. A detailed list of your Lugg has been sent to be viewed by our Luggers.  </p>
                  </div>
                  <div class="modal-footer">
                     <a href="#"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></a>
                  </div>
               </div>
            </div>
         </div>

      )
   }
})
module.exports = LuggCreated
