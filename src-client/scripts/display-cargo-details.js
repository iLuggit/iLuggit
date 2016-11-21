import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'

const CargoDisplay = React.createClass({


   render: function (){
      let luggs = this.props.newLuggData.models.map(function(model){
         return 
      })
      return(
         <div>
            <div className="container-fluid text-center main-container">
               <div className="container">
                  <a href = "#"><i className="fa fa-home fa-2x " aria-hidden="true"></i></a>
                  <h1 className="display-3">One Lugg</h1>
                  <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
               </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div>
                     <p>Cargo Img:{this.props.model.get('haul_img')}</p>
                     <p>Haul Description:{this.props.model.get('haul_description')}</p>
                     <p>Pickup address:{this.props.model.get('pickup_address')}</p>
                     <p>Drop off address:{this.props.model.get('dropoff_address')}</p>
                     <p>Cargo description:{this.props.model.get('haul_description')}</p>
                  </div>
                </div>
              </div>
           </div>
         </div>
       );
     }
   });



module.exports = {
    CargoDisplay,


}
