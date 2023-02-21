import React from 'react';
import Styles from "./CarsPages.module.css"

function CarsPages({data}) {
    console.log(data);
  return (
    <div>
        {data.map((car) => (
            <p key={car.id}>{car.name}</p>
        ))}
    </div>
  )
}

export default CarsPages