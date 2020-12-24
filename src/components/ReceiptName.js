import React from "react";
import { Form, Col, Button } from "react-bootstrap";

export default function ReceiptName(props) {
  return (
    <>
      {/* Receipt Name */}
      <Form>
        <Form.Group controlId="receiptName">
          <Form.Control
            value={props.value}
            type="text"
            onChange={(event) => props.onChange(event.target.value)}
            placeholder="Receipt Name"
          />
        </Form.Group>
      </Form>
    </>
  );
}
