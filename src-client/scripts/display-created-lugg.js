import Backbone from 'backbone'
import React from 'react'
import $ from 'jquery'


const LuggCreated = React.createClass({

   render: function(){
      return(
         <div class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                  <div class="modal-header">
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                     <h4 class="modal-title">Lugg Created</h4>
                  </div>
                     <div class="modal-body">
                     <p>Your Lugg has been created. A detailed lis of your Lugg has been sent to be viewed by our Luggers.  </p>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
               </div>
            </div>
         </div>

      )
   }
})
module.exports = LuggCreated
