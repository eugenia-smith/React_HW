function OrderStatus(props) {
  return (
    <p>
      {props.delivery.map((elem) => {
        return `Order #${elem.orderId}: ${elem.status}`;
      })}
    </p>
  );
}

export default OrderStatus;
