import adire from "../images/adire.png"

const Product = () => {
    return (<div className="container"style={{marginTop:"465px"}}>
         <div className="row">
        <div className="col-4" style={{width:"15px",height:"15px",marginLeft:"30px"}}>
           <img src={adire} alt="adire1.png"/>
        </div>
        <div className="col-4" style={{width:"15px",height:"15px",marginLeft:"30px"}}>
        <img src={adire} alt="adire1.png"/>
     </div>
     <div className="col-4" style={{width:"15px",height:"15px",marginLeft:"30px"}}>
        <img src={adire} alt="adire1.png"/>
     </div>
     </div>
     </div>
     );
}
 
export default Product ;