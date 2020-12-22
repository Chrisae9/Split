import React from "react";
import { Form } from "react-bootstrap";

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
            placeholder="Receipt name"
          />
        </Form.Group>
      </Form>

      {/* TODO: Move to different file! */}

      {/* Receipt Save & Delete */}
      {/* <Button variant="secondary">Save</Button>
      <Button variant="danger">Delete</Button> */}
    </>
  );
}
