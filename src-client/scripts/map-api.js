import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';




class SimpleMapPage extends Component {

    constructor(props) {
        super(props),
        this.shouldComponentUpdate=shouldPureComponentUpdate

    }

    render() {
       return (
         <GoogleMap
         bootstrapURLKeys={{
             key: 'AIzaSyAGoG15YaqO4Hp9Si4jUP2u_61EHK-jw-4',
            //  key: 'AIzaSyDefNkXoCXxKRL9B_dIiVAQLej6tmopfLE'
         }}
           defaultCenter={this.props.center}
           defaultZoom={this.props.zoom}>
         </GoogleMap>
       );
    }
};


module.exports = SimpleMapPage
