import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';




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
             key: 'AIzaSyAGoG15YaqO4Hp9Si4jUP2u_61EHK-jw-4',
         }}
           defaultCenter = {this.props.center}
           defaultZoom = {this.props.zoom}>

         </GoogleMap>
       );
    }
};


module.exports = SimpleMapPage
