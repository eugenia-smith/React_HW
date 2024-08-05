import "./App.css";
import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";
import OrderStatus from "./components/OrderStatus";

function App() {
  const items = ["eggs", "bread", "milk"];
  const orderStatus = [{ orderId: 123, status: "on the way" }];

  return (
    <div className="App">
      <Greeting name="Ann"></Greeting>
      <ShoppingList goods={items}></ShoppingList>
      <OrderStatus delivery={orderStatus}></OrderStatus>
    </div>
  );
}

export default App;
