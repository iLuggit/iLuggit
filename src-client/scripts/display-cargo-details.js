import Backbone from 'backbone'
import React from 'react'
import ACTIONS from './ACTIONS.js'

const CargoDisplay = React.createClass({
   componentWillMount: function(){
      //   ACTIONS.fetchLuggData()
        console.log(this.props);
     },

   render: function (){
      let id = this.props.id
      console.log('id', id);
      let model = this.props.newLuggData.filter(function(model){
         return Number(model.get('id')) === Number(id)
      })
      model = model[0]
      console.log('model', model);

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
                <div className="col-sm-offset-3 col-sm-6">
                  <div>

                     <p>Cargo Img: {model.get('haul_img')}</p>
                     <p>Haul Description: {model.get('haul_description')}</p>
                     <p>Pickup address: {model.get('pickup_address')}</p>
                     <p>Drop off address: {model.get('dropoff_address')}</p>
                     <p>Cargo description: {model.get('haul_description')}</p>

                  </div>
                </div>
              </div>
           </div>
         </div>
       );
     }
   });



module.exports = CargoDisplay
