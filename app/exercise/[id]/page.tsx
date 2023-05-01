"use client";

interface Prop {
  params: {
    id: string;
  };
}
import { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../../utils/fetchData";

const Excerise = (props: Prop) => {
  console.log(props.params.id);
  return <div>id</div>;
};

export default Excerise;
