import Dropdown from "../components/dropdown";
import adire from "../images/adire.png";
import results from "../images/result.png";
const  MainHeader=()=>{
    return(
      <div style={{color:"white",backgroundColor:"black",height:"40px"}}>
        <div className="py-1 pt-1" style={{marginLeft:'1200px',position:'absolute',backgroundColor:'black'}}><Dropdown/></div>
        <i className="fa-brands fa-twitter p-2 mx-2"></i>
      <i className="fa-brands fa-instagram p-2 m"></i>
      
      
     
      <div className="navbar my-4 col-4" style={{color:'grey',position:'absolute',}} >
      <i className="fa-solid fa-bars"></i>
      <div className="mx-4 col-4" style={{marginTop:'12px',position:'absolute',marginLeft:'6px',fontSize:'20px'}}>
        <span className="col-2  p-2">Home</span>
        <span className="col-2  p-2">TShirt</span>
        <span className="col-2  p-2">Hoodies</span>
        <span className="col-2  p-2">Sweatshirt</span>
        <span className="col-2  p-2">Shirts</span>
        <span className="col-2  p-2">Fabrics</span>
         </div>
         <img className="col-2"
         style={{width:'400px',height:'150px',marginLeft:'550px',position:'absolute',marginTop:'28px'}}
         src={results} alt="logo"/>

<div className="col-2" style={{position:'absolute',marginLeft:'1040px',marginTop:'15px',fontSize:'20px',color:'grey'}}>
        <h6>Login</h6>
        </div>
         <div className="" style={{position:'absolute',marginLeft:'1100px',marginTop:'15px',fontSize:'20px',color:'grey'}}>
         <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="" style={{position:'absolute',marginLeft:'1150px',marginTop:'15px',fontSize:'20px',color:'grey'}}>
        <i class="fa-regular fa-heart"></i>
        </div>
        
        <div className="" style={{position:'absolute',marginLeft:'1200px',marginTop:'15px',color:'grey'}}>
        <i class="fa-sharp fa-solid fa-cart-shopping"></i>
      </div>
      

        </div>
        <img style={{
          minHeight:"44vh",
          maxHeight:"66vh",
          minWidth:"220vh",
          maxWidth:"120vh",
          margin:"0px"

        }}
        className="img"
        src={adire} alt="adire-"/>
      
      </div>
      
   
      
    
      
    )
  }
  export default MainHeader;