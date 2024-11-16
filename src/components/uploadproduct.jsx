import React from 'react';
 const  UploadProduct = () => {

    return (  
   
        <div className="border row text-white py-2">
            <div className="col-12 text-black-50">Add a New Product </div>
            <div className="col-12 col-md-4 py-1">
                <input className="form-control form-control-sm" placeholder="Name..............."></input>
            </div>
            <div className="col-12 col-md-4 py-1">
                <input className="form-control form-control-sm" placeholder="Price.............."></input>
            </div>
            <div className="col-12 col-md-4 py-1">
                <input className="form-control form-control-sm" placeholder="Description.........."></input>
            </div>
           <div className="col-12 col-md-6 offset-md-3">
            <button className="btn btn-primary btn-sm  form-control">Create</button>
           </div>
        </div>
      
    );
 }


export default UploadProduct ;