function ShoppingList(props) {
  if (props.goods.length === 0) {
    return <p>The cart is empty</p>;
  }

  return (
    <ul>
      {props.goods.map((elem) => {
        return <li>{elem}</li>;
      })}
    </ul>
  );
}

export default ShoppingList;
