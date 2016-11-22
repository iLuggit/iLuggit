// import React, {PropTypes, Component} from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';
//
// import GoogleMap from 'google-map-react';
//
// class SimpleMapPage extends Component {
//
//   constructor(props) {
//      super(props);
//      console.log('i', this.props)
//      this.shouldComponentUpdate=shouldPureComponentUpdate
//
//   }
//
//   render() {
//     return (
//        <GoogleMap
//        bootstrapURLKeys={{
//           apiKey: 'AIzaSyAGoG15YaqO4Hp9Si4jUP2u_61EHK-jw-4',
//           language: '',
//        }}
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}>
//       </GoogleMap>
//     );
//   }
// }
//
// let ugh = {
//    center: {lat: 32.784618, lng: -79.940918},
//    zoom: 9,
// }
//
// const Sandbox = React.createClass({
//       render: function(){
//    return(
//       <div>
//          <p> this is a test</p>
//          <div style={{height: "300px", width: '100%'}}>
//             <SimpleMapPage {...ugh} />
//          </div>
//       </div>
//       )
//    }
// })
// module.exports = Sandbox
