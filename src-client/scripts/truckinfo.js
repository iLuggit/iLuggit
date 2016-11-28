import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import ACTIONS from './ACTiONS.js'
import STORE from './STORE.js'
import AppController from './lugg-view-controller.js'


const showTruckInfo = React.createClass({

   render: function (){

      return (
         <div className="home-container">
            <div className="container-fluid">
            <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
                     <div className="main-container text-center">
                        <h1>iLuggit, Our Story</h1>
                        <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
                     </div>
            </div>
               <div className= "builderPro">
                  <div className="col-xs-12 col-md-4 luggProfile">
                        <div className=" thumbnail text-center">
                           <h3>Jon Gammon</h3>
                           <img className="profileImg1" src="http://st.motortrend.com/uploads/sites/5/2014/06/2014-Dodge-Demon-Challenger-SRT8-Dee-Snider.jpg"/>
                           <p>Front End Engineer, Jon, loving perforamce cars, has never had the ablility to move large items when he need. Wished he had a truck to move his cars.</p>
                        </div>
                  </div>
                  <div className="col-xs-12 col-md-4 luggProfile ">
                        <div className="thumbnail text-center">
                           <h3>Paul Swift</h3>
                           <img className="profileImg2" src="http://www.imcdb.org/i151027.jpg"/>
                           <p>Front End Engineer Paul, has a truck, and grew tired of always having his friends ask him to help them move their items.</p>
                        </div>
                  </div>
                  <div className="col-xs-12 col-md-4 luggProfile">
                        <div className=" thumbnail text-center">
                           <h3>Barry Daniels</h3>
                           <img className="profileImg3" src="http://hd.wallpaperswide.com/thumbs/world_of_warcraft_lich_king-t1.jpg"/>
                           <p>Back End Engineer Barry has moved several times, but his moves have never warranted a moving service. Would have been easier with a truck.</p>
                        </div>
                  </div>
               </div>

         </div>
      )
   }
})

module.exports = showTruckInfo
