import React from "react";

import SelectCustomerType from "./SelectCustomer";
import Menu from "./Menu";
import { categories, items } from "../data/mock_data";

function PlaceOrder(props) {
  return (
    <>
      <div className="place-order">
        <h1 className="text-center">Place an Order</h1>
      </div>
      <SelectCustomerType />
      <Menu categories={categories} allItems={items} />
    </>
  );
}

export default PlaceOrder;
