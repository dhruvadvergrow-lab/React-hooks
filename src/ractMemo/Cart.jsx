import React, { useMemo, useState } from "react";

export const cartItems = ({ name, price }) => {
  console.log(`Rendering items...${name}`);
  return (
    <li>
      {name}:${price}
    </li>
  );
};
const MemoizedCartItem = React.memo(cartItems);
export const Cart = () => {
  const [items, setItems] = useState([
    { name: "apple", price: 100 },
    { name: "cat", price: 200 },
  ]);
  const [count, setCount] = useState(0);

  const total = useMemo(() => {
    console.log("calculating total....");
    let sum = 0;
    items.forEach((ele) => (sum += ele.price));
    return sum;
  }, [items]);
  const addItems = () => {
    setItems([...items, { name: "dog", price: 300 }]);
  };
  return (
    <div>
      <h2>Cart</h2>
      {items.map((ele, idx) => {
        <div key={idx}>
          <li>{ele}</li>
        </div>;
      })}
      <p>{total}</p>
      <button onClick={addItems}>Add Items</button>
      <button onClick={() => setCount(count + 1)}>Render Count-{count}</button>
    </div>
  );
};
