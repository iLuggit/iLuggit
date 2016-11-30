import React from 'react'

let ModalWindow = React.createClass({
   render:function(){

      let modalClassName = 'modal-container'
      if (this.props.modalSettings.isShowing ===false){
         modalClassName = 'modal-container is-hidden '
      }
      console.log(this.props);
      return(
         <div className={modalClassName}>
               <div className="overlay"> </div>
               <div className="window">
                  <ul>
                     <li>{this.props.modalSettings.payload.first_name} {this.props.modalSettings.payload.last_name}</li>
                     <li>{this.props.modalSettings.payload.phone_number}</li>
                     <li>{this.props.modalSettings.payload.email}</li>
                     <li>{this.props.modalSettings.payload.bedSize}</li>

                  </ul>
               </div>
         </div>
      )

   }

})

module.exports=ModalWindow
