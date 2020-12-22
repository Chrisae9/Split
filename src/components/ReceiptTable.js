import { React, useState, useRef, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Card, Form, Button } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import { ACTIONS } from "../App.js";

export default function ReceiptTable({ items, dispatch }) {
  // Datafeilds for the receipt table
  const columns = [
    {
      dataField: "id",
      hidden: true,
    },
    {
      dataField: "name",
      text: "Name",
      // sort: true,
    },
    {
      dataField: "cost",
      text: "Cost",
      // sort: true,
      formatter: (cell, row) => {
        return <>${cell}</>;
      },
    },
    {
      dataField: "selected",
      text: "Selected",
      hidden: true,
    },
    {
      dataField: "contributors",
      text: "Contributors ",
      formatter: contributorsFormatter,
    },
  ];

  // Formatter for the contributors column
  function contributorsFormatter(col, colIndex) {
    var string = col.map((contrib, i) => {
      if (i < col.length - 1) {
        return contrib.name + ", ";
      } else {
        return contrib.name;
      }
    });

    return string;
  }

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [total, setTotal] = useState("");

  const inputNameRef = useRef();

  // Click to delete item
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      dispatch({ type: ACTIONS.DELETE_ITEM, payload: { id: row.id } });
    },
  };

  // Submit form action
  function handleSubmit(event) {
    event.preventDefault();

    // Add to the start of items
    dispatch({
      type: ACTIONS.ADD_ITEM,
      payload: {
        name: name,
        cost: cost,
      },
    });
    // Reset fields and focus item name
    setName("");
    inputNameRef.current.focus();
    setCost("");
  }

  useEffect(() => {
    // Computes the total cost, ugly but works for now.
    var total = 0;
    items.forEach((element) => {
      total = total + (parseFloat(element.cost) || 0);
    });
    setTotal(total);
  }, [items]);

  // React bootstrap table select row feature
  const selectRow = {
    mode: "checkbox",
    onSelect: (row, isSelect, rowIndex, e) => {
      dispatch({ type: ACTIONS.TOGGLE_ITEM, payload: { id: row.id } });
    },
    onSelectAll: (isSelect, rows, e) => {
      dispatch({ type: ACTIONS.TOGGLE_ITEMS, payload: { selected: isSelect } });
    },
  };

  return (
    <>
      {/* Table to display items */}
      <BootstrapTable
        keyField="id"
        data={items}
        columns={columns}
        rowEvents={rowEvents}
        selectRow={selectRow}
        striped
        hover
        condensed
      />

      {/* Total cost of the items */}
      <h4>Total = ${parseFloat(total).toFixed(2)}</h4>
      <Form.Group>
        <Card>
          <Card.Body>
            {/* Form to submit the items */}
            <Form onSubmit={handleSubmit}>
              {/* Name of the Item */}
              <Form.Group controlId="itemName">
                <Form.Control
                  type="text"
                  placeholder="Item"
                  value={name}
                  ref={inputNameRef}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              {/* Cost of the item */}
              <Form.Group controlId="itemCost">
                <CurrencyInput
                  placeholder="$0.00"
                  allowDecimals={true}
                  decimalsLimit={2}
                  prefix="$"
                  className="form-control"
                  value={cost}
                  onChange={(value) => setCost(value)}
                />
              </Form.Group>

              {/* Button to add the item to the table */}
              <Form.Group controlId="formSubmit">
                <Button type="submit" variant="dark" className="form-control">
                  Add Item
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Form.Group>
    </>
  );
}
