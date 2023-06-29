import React from "react";

function Card({items, handleDelete}) {
  const weaponArray = items;
  const handleCard = weaponArray.map((item) => (
    <section key={item.id} className="card">
      <h1 className="cardName">{item.name}</h1>
      <p>Cost: {item.cost}</p>
      <p>Damage: {item.damage}</p>
      <p>weight: {item.weight}</p>
      <p>properties: {item.properties}</p>
      <p>type: {item.type}</p>
      <button onClick={handleDelete} value={item.id}>Delete</button>
    </section>
  ));

  return (
    <>
      {handleCard}
    </>
  );
}

export default Card;
