import React from "react";
import { Form } from "react-bootstrap";

export default function ReceiptName({ name, setName }) {
  return (
    <>
      {/* Receipt Name */}
      <Form.Group controlId="receiptName">
        <Form.Control
          value={name}
          type="text"
          onChange={(event) => setName(event.target.value)}
          placeholder="Receipt Name"
        />
      </Form.Group>
    </>
  );
}
