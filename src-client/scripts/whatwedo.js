import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import ACTIONS from './ACTiONS.js'
import STORE from './STORE.js'
import AppController from './lugg-view-controller.js'

const showWhatWeDo = React.createClass({
   render:function(){
      return(
         <div>
            <div className="container-fluid main-faq-container text-center">
            <a href = "#"><i className="fa fa-home fa-2x " aria-hidden="false"></i></a>
                  <div className="container ">
                        <h1>iLuggit</h1>
                        <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
                  </div>
            </div>
            <div className ="faq-container text-center ">
                     <h1>FAQ's for our Customers</h1>
            </div>
                  <div className="faq-info">
                     <p>Q. What is iLuggit?<br/>
                        A. It is a uber service that pairs people who need a truck with those that own a truck</p><br/>
                     <p>Q. Where is ILuggit available?<br/>
                        A. Currently we are servicing the Charleston and surrounding areas</p><br/>
                     <p>Q. What Kinds of Items can ILuggit Move?<br/>
                        A. What ever can fit into the back of a Pickup Truck, Van, or sometimes Trailer.</p><br/>
                     <p>Q. What kinds of Vehicles does ILuggit Offer?<br/>
                        A. We Offer Luggers with small bed, medium bed, large bed Pickup Trucks, as well as Van, and Trailers</p><br/>
                     <p>Q. Who Should use ILuggit?<br/>
                        A. Anyone who needs the services of a truck, whether you are needing items delivered from Home Depot,<br/>
                           or yard trash delivered to the city dump. ILuggit services are for anyone who needs the use of a truck<br/>
                           but does not own a truck</p>
                  </div>

            </div>



      )
   }
})

module.exports = showWhatWeDo
