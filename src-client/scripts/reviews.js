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
               <div className ="col-xs-6 col-md-4 " key={i}>
                     <p className ="thumbnail">{model.get('user').useruser}<br/>
                     {typeof model === 'object' && model.get('review')}</p>
               </div>

         )

      })

      return(
         <div>
         <div className="container-fluid">
            <nav className="navbar navbar-default">
               <a className="navbar-brand " href="#"><img className ="navbar-logo" src="../images/logo1.png" alt = "" /></a>
               <ul className="nav navbar-nav navbar-right">
               <li><a href="#">Home</a></li>
               <li><a onClick = {this._logOut}>Logout</a></li>
               </ul>
            </nav>
               <div className="container-fluid review-container">
                        <h1 className ="review-lead">User Reviews</h1>
               </div>
                  <div className = "container-fluid reviews-info">
                     <div className ="row">
                        <div >
                           {reviews}
                        </div>
                  </div>
            </div>
         </div>
      </div>
      )
   }
});


module.exports = showReviews
