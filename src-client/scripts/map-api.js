import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';

import {bootstrapURLKeys} from './secrets.js'


let Pin = React.createClass({
   render: function(){
      return (
         <div style={{width: '40px', height: '40px', padding: "5px", color: '#fff', background: 'darkred'}}>
            {this.props.text}
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
      // const location ={
      //    lat: 32.784618,
      //    lng: -79.940918,
      //    zoom: 13
      // }
      // const marker = {
      //       marker: {
      //          lat: 32.784618,
      //          lng: -79.940918
      //       },
      //       return <Marker {...marker}/>
      //    },

       return (

         <GoogleMap
         bootstrapURLKeys={{
             key: {bootstrapURLKeys},
         }}
           defaultCenter = {this.props.center}
           defaultZoom = {this.props.zoom}>
            <Pin lat={32.7869} lng={-79.9357} text={"Marion Square"}/>
         </GoogleMap>
       );
    }
};


module.exports = SimpleMapPage
