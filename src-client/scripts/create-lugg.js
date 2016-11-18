import Backbone from 'backbone'
import React from 'react'
import $ from 'jquery'

const CreateLugg = React.createClass({
   _createLugg: function(){

      let createNewLugg = {
            pickup_address: this.ref.startAddress.value,
            dropoff_address: this.ref.endAddress.value,
            haul_description: this.ref.cargo_Description.value,
            haul_img: this.ref.cargo_img.value,
         }
         ACTIONS.createLugg(newLugg)

      },

   render: function(){
      return(
            <div className = "row text-center">
               <form className = "col-sm-offset-3 col-sm-6 " id="createLugg-form" onSubmit = {this._createlugg}>
                       <h2 className = "">Create a New Lugg </h2>
                  <div className = "form-group">
                       <label htmlFor = "startAddress"> </label>
                       <input type = "text" className="form-control" name = "s_address" ref="startAddress" placeholder = "Enter Starting Address" />
                  </div>
                    <div className = "form-group">
                       <label htmlFor = "endAddress"> </label>
                       <input type = "text" className="form-control" name = "e_address" ref="endAddress" placeholder = "Enter Destination" />
                    </div>
                    <div className = "form-group">
                       <label htmlFor = "cargoDescription"> </label>
                       <input type = "text" className="form-control" name = "cargo_description" ref="cargoDescription" placeholder = "Enter Description of Lugg" />
                    </div>
                    <div className="form-group">
                       <label htmlFor = "cargoImg"></label>
                       <input type = "text" className="form-control" name = "cargo_img" ref="cargoImg" placeholder="Image of Lugg (Optional)"/>
                    </div>
               </form>
            </div>

      )
   }
})
