import Backbone from 'backbone'
import React from 'react'
import $ from 'jquery'


const LuggerAccepted = React.createClass({

   render: function(){
      return(
         <div class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                  <div class="modal-header">
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                     <h4 class="modal-title">Lugg Accepted</h4>
                     </div>
                  <div class="modal-body">
                     <p>Your lugg has been accepted.  A Lugger will be contacting you shortly.</p>
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
module.exports = LuggerAccepted
