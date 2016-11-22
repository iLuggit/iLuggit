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
            <div className="container-fluid text-center main-container ">
                     <div className="container ">
                        <h1>iLuggit, Our Story</h1>
                        <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
                     </div>
            </div>
               <div className= "builderPro ">
                  <div className="col-xs-12 col-md-4  ">
                        <div className="luggProfile text-center">
                           <h3>Jon Gammon</h3>
                           <img className="profileImg " src="http://st.motortrend.com/uploads/sites/5/2014/06/2014-Dodge-Demon-Challenger-SRT8-Dee-Snider.jpg"/>
                           <p>Front end eningeer, Jon loving perforamce cars, never had the ablility to move large items when he need. </p>
                        </div>
                  </div>
                  <div className="col-xs-12 col-md-4">
                        <div className="luggProfile text-center ">
                           <h3>Paul Swift</h3>
                           <img className="profileImg text-center" src="http://www.imcdb.org/i151027.jpg"/>
                           <p>Front end eningeer Paul, as a truck grew tired of always having his friends ask him to help them move items.</p>
                        </div>
                  </div>
                  <div className="col-xs-12 col-md-4">
                        <div className="luggProfile text-center ">
                           <h3>Barry Daniels</h3>
                           <img className="profileImg text-center" src="http://hd.wallpaperswide.com/thumbs/world_of_warcraft_lich_king-t1.jpg"/>
                           <p>Back end enigeer Barry, have moved several time in the area. His moves have never warrented a moving servious, but would have been easier with a truck.</p>
                        </div>
                  </div>
               </div>

         </div>
      )
   }
})

module.exports = showTruckInfo
