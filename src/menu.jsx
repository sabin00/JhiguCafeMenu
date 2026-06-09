import { useState } from "react";

function Menu() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Momo",
      price: 120,
    },
    {
      id: 2,
      name: "Sausage",
      price: 40,
    },
    {
      id: 3,
      name: "KeemaNoodles",
      price: 150,
    },
    {
      id: 4,
      name: "Laphing",
      price: 70,
    },
    {
      id: 5,
      name: "CornDog",
      price: 130,
    },
    {
      id: 6,
      name: "PaniPuri",
      price: 50,
    },
  ]);

  return (
    <div>
      <h1>Jhigu Cafe</h1>
      <h2>Items we provide here</h2>
      {items.map((item) => (
        <div className="div-list" key={item.id}>
          <span className="name">{item.name}</span>
          <span className="price">{item.price}</span>
        </div>
      ))}
    </div>
  );
}

export default Menu;
