
import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';

class SimpleMapPage extends Component {

  constructor(props) {
     super(props);
     console.log('i', this.props)
     this.shouldComponentUpdate=shouldPureComponentUpdate

  }

  render() {
    return (
       <GoogleMap
       bootstrapURLKeys={{
          apiKey: 'AIzaSyAGoG15YaqO4Hp9Si4jUP2u_61EHK-jw-4',
          language: '',
       }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
      </GoogleMap>
    );
  }
}

let CharlestonMap = {
   center: {lat: 32.784618, lng: -79.940918},
   zoom: 9,
}

const Sandbox = React.createClass({
      render: function(){
   return(
      <div>
         <p> this is a test</p>
         <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal</button>

         <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
           <div className="modal-dialog modal-lg" role="document">
             <div className="modal-content">
               ...
             </div>
           </div>
         </div>

         <div style={{height: "300px", width: '100%'}}>
            <SimpleMapPage {...CharlestonMap} />
         </div>
      </div>
      )
   }
});





module.exports = Sandbox
