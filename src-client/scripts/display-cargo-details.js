import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'

const CargoDisplay = React.createClass({

   render: function (){

      return(
         <div>
            <div className="jumbotron jumbotron-fluid text-center main-container">
               <div className="container">
                  <h1 className="display-3">One Lugg</h1>
                  <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
               </div>
            </div>
            <div>
               <p>Pickup address</p>
               <p>Drop off address</p>
               <p>Cargo description</p>
               <p>Cargo Img</p>
            </div>
         </div>
      )
   }
})

module.exports = CargoDisplay
