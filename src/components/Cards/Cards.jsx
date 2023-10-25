import React from "react";
import s from "./Cards.module.scss"

export const Cards = ({ name, img, height, id, attack }) => {
  return (
    <>
      <div className={s.cards}>
        <h1>{name[0].toUpperCase() + name.slice(1)}</h1>
        <img src={img} alt="" />
        <p>Снялся в сериях</p>
        <p>id: {id}</p>
        <p>height: {height}</p>
        <p>Attack: {attack}</p>
      </div>
    </>
  );
};
