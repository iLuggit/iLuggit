import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import ACTIONS from './ACTiONS.js';
import STORE from './STORE.js';
import AppController from './lugg-view-controller.js';



const showReviews = React.createClass({
   componentWillMount: function(){
         ACTIONS.fetchLuggData()
     },

   render:function(){
      let reviews = this.props.newReviewData.map(function(model, i){

         return (
            <div key={i}>
               <li>{typeof model === 'object' && model.get('review')}</li>
            </div>
         )

      })

      return(
         <div>
            <div className="home-container">
               <div className="container-fluid text-center main-container ">
                  <button type="button" onClick = {this._logOut} className="btn btn-default">Logout</button>
                  <div className="container ">
                     <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
                  </div>
               </div>
            </div>
            <div>
               <h3>User Reviews</h3>
                  {reviews}
            </div>
         </div>
      )
   }
});


module.exports = showReviews
