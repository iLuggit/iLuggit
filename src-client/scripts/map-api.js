import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';

import {bootstrapURLKeys} from './secrets.js'

let Pin = React.createClass({

   render: function(){

      return (
         <div>
            <i className="fa fa-map-marker fa-3x" aria-hidden="true"></i>
         </div>
      )
   }
})

class SimpleMapPage extends Component {

   constructor(props) {
        super(props),
        this.shouldComponentUpdate = shouldPureComponentUpdate

    }

    render() {
      let pinsJSXArray = this.props.pinsData.map(function(obj, i){
         return <Pin lat={obj.latitude} lng={obj.longitude} key = {i} />
      })
       return (

         <GoogleMap
            bootstrapURLKeys={{
               key: {bootstrapURLKeys}
            }}
            defaultCenter = {this.props.mapConfig.center}
            defaultZoom = {this.props.mapConfig.zoom}>
            {pinsJSXArray}
        </GoogleMap>
       );
    }
};


module.exports = SimpleMapPage
