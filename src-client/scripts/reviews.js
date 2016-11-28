import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import ACTIONS from './ACTiONS.js';
import STORE from './STORE.js';
import AppController from './lugg-view-controller.js';



const showReviews = React.createClass({

   render:function(){
      let reviews = this.props.newReviewData.map(function(model, i){

         return (
         <div key={i}>
            <div className ="review-container">
               <div className ="row">
                  <div className ="col-xs-12 col-md-3">
                     <p className ="thumbnail">{model.get('user').useruser}<br/>
                     {typeof model === 'object' && model.get('review')}</p>
                  </div>
               </div>
            </div>
         </div>
         )

      })

      return(
         <div>
            <div className="home-container">
               <div className="container-fluid text-center main-container ">
                     <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
               <div className="container ">
                     <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
               </div>
               </div>
            </div>
            <div className ="reviews-info">
               <h3 className = "text-center">User Reviews</h3>
                  {reviews}
            </div>
         </div>
      )
   }
});


module.exports = showReviews
