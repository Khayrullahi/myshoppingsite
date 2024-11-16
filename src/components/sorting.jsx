import React from 'react'
 function Sorting(){
    return (
        <div>
        <div  className=''  style={{position:'absolute',marginLeft:'1000px',marginTop:'430px'}}>
        <span className='p-2'>Filter</span>
        <i class="fa-solid fa-filter p-2"></i>
        </div>

        
         
        <div className='p-2' style={{position:'absolute',marginLeft:'1100px',marginTop:'430px'}}>
            <select style={{width:"120px"}}>Default Sort
            <option> Default sort </option>
                <option> sort by average rating </option>
                <option> sort by popularity</option>
                <option>sort by latest</option>
                <option>sort by price :high to low</option>
                <option>sort by price:low to high</option>
            </select>    
                 </div>  
                 
   <div className='p-2' style={{position:'absolute',marginLeft:'1240px',marginTop:'430px'}}>
   <i class="fa-solid fa-border-all"></i>
    </div>  
    <div className='p-2' style={{position:'absolute',marginLeft:'1260px',marginTop:'430px'}}>
    <i class="fa-solid fa-table-cells"></i>
    </div>
    <div className='p-2' style={{position:'absolute',marginLeft:'1280px',marginTop:'430px'}}>
    <i class="fa-solid fa-bars"></i>          
     </div>
   
    </div>
    )
 }
 export default Sorting;