import React, { useState } from "react";



const Star = () => {
    const score =0;
    const cantStar = (score /2);
    const cantStarInt = parseInt(cantStar);
    const cantStarEmpty = (5-cantStar);
   
    const stars= [];

    if (score % 2 != 0){
        stars.push(<i class="fas fa-star-half-alt"></i>);
    } 


    for(let i=1; i<=cantStarInt; i++ ){
        stars.push(<i class="fas fa-star"></i>)
    }

    for(let i=1; i<=cantStarEmpty; i++){
        stars.push(<i class="far fa-star"></i>)
    }
    
    return(
        <>
            <span>{stars.map(star =>star)}</span>  
        </>
       
    )
}

export default Star;