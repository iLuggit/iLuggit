import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';

import {bootstrapURLKeys} from './secrets.js'


let Pin = React.createClass({
   render: function(){
      return (
         <div> <i className="fa fa-map-marker" aria-hidden="true"></i> </div>
      )
   }
})

class SimpleMapPage extends Component {

    constructor(props) {
        super(props),
        this.shouldComponentUpdate = shouldPureComponentUpdate

    }
    render() {
      let pins = this.props.luggData.map(function(model, i){
         return <Pin key = {i} lat={model.get('pickUpLatitude')} lng={model.get('pickUpLongitude')} />
      })

       return (

         <GoogleMap
         bootstrapURLKeys={{
             key: {bootstrapURLKeys}
         }}
           defaultCenter = {this.props.center}
           defaultZoom = {this.props.zoom}>
            { pins }
         </GoogleMap>
       );
    }
};


module.exports = SimpleMapPage
