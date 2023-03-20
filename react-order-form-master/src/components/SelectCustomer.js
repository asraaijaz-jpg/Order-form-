import React, { useState } from "react";
import "./styles.css";

const CustomerType = {
  New: "New Customer",
  Existing: "Existing Customer",
};

Object.freeze(SelectCustomerType);

function SelectCustomerType() {
  const [customerType, setCustomerType] = useState(SelectCustomerType.New);

  return (
    <>
      <div className="customer-type">
        <div className="form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="customerType"
            value={CustomerType.New}
            onChange={(type) => {
              setCustomerType(CustomerType.New);
            }}
            checked={customerType == CustomerType.New}
          />{" "}
          <label className="form-check-label" htmlFor="customerType">
            {CustomerType.New}
          </label>
        </div>
        <div className="form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="customerType"
            value={CustomerType.Existing}
            onChange={() => setCustomerType(CustomerType.Existing)}
            checked={customerType == CustomerType.Existing}
          />{" "}
          <label className="form-check-label" htmlFor="customerType">
            {CustomerType.Existing}
          </label>
        </div>
      </div>
    </>
  );
}

export default SelectCustomerType;
