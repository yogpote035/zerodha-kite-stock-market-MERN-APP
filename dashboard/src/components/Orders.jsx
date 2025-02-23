import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/orders").then((res) => {
      setOrders(res.data);
    });
  }, []);

  const cancelOrder = (id) => {

    axios.delete(`http://localhost:3002/orders/${id}`).then(() => {
      setOrders(orders.filter(order => order._id != id));
    }).catch((error) => {
      console.log('Error In Deletion :', error);
    });
    
  }
  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Quantity.</th>
            <th>Price</th>
            <th>Mode</th>
            <th>Cancel Order</th>
          </tr>

          {orders.map((stock) => {
            return (
              <tr key={stock._id}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
                <td><button className="btn-cancel-orders" onClick={() => cancelOrder(stock._id)}>Cancel order</button></td>
              </tr>
            );
          })}
        </table>
      </div>
      {!orders && <div div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div >
      }
    </>
  );
};

export default Orders;
