import React from "react";
import img from "./img_tem.jpg";
import "./temporada.scss";

const Temporada = () => {
  return (
    <div className='temporada'>
      <div className='img'>
        <img src={img} />
      </div>
      <div className='titles'>
        <span className='episodio'>EP01</span>
        <h4 className='title'>La recompensa</h4>
      </div>
      <div>
        <p className='paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, culpa?
          Assumenda, at iste suscipit exercitationem libero odio a excepturi?
          Dolorum assumenda inventore vel, temporibus quisquam sit modi veniam
          rem omnis?
        </p>
      </div>
    </div>
  );
};

export default Temporada;