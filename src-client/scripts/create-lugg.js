import Backbone from 'backbone'
import $ from 'jquery'
import ACTIONS from './ACTIONS.js'
import SimpleMapPage from './map-api.js'
import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';



const CreateLugg = React.createClass({
   _createLugg: function(){

      let createNewLugg = {
            pickup_address: this.refs.start_address.value,
            dropoff_address: this.refs.end_address.value,
            haul_description: this.refs.cargo_description.value,
            haul_img: this.refs.cargo_img.value,
         }
         ACTIONS.createLugg(createNewLugg)

      },

   render: function(){
      let CharlestonMap = {
         center: {lat: 32.784618, lng: -79.940918},
         zoom: 9,
      }
      return(
            <div className = "row text-center lugg-container">
               <form className = "col-xs-12 col-sm-6 " id="create-lugg-form" onSubmit = {this._createLugg}>
                       <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
                       <h2 className = "">Create a New Lugg </h2>
                  <div className = "form-group">
                       <label htmlFor = "startAddress"> </label>
                       <input type = "text" className="form-control" name = "s_address" ref="start_address" placeholder = "Enter Starting Address" />
                  </div>
                    <div className = "form-group">
                       <label htmlFor = "endAddress"> </label>
                       <input type = "text" className="form-control" name = "e_address" ref="end_address" placeholder = "Enter End Address" />
                    </div>
                    <div className = "form-group">
                       <label htmlFor = "cargoDescription"> </label>
                       <input type = "text" className="form-control" name = "cargo_description" ref="cargo_description" placeholder = "Enter Description of Lugg" />
                    </div>
                    <div className="form-group">
                       <label htmlFor = "cargoImg"></label>
                       <input type = "text" className="form-control" name = "cargo_img" ref="cargo_img" placeholder="Image of Lugg (Optional)"/>
                    </div>
                    <input type = "submit" className="btn btn-default" />
               </form>
               <div id= "map2">
                  <SimpleMapPage {...CharlestonMap}/>
               </div>
            </div>

      )
   }
})
module.exports = CreateLugg
