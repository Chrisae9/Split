import React from "react";
import Select from "react-select";
import { Form } from "react-bootstrap";

export default function ReceiptSelect() {
  const options = [];

  return (
    <>
      <Form>
        <Form.Group>
          <Select
            options={options}
            onChange={(e) => e}
            placeholder="Select a Receipt"
          />
        </Form.Group>
      </Form>
    </>
  );
}
