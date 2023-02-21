import CarsPages from '@/components/template/carsPages';
import React from 'react';
import carsData from "../../data/carsData";

function index() {
    // console.log(carsData);
  return (
    <>
        <CarsPages data={carsData} />
    </>
  )
}

export default index