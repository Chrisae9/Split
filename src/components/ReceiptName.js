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

      {/* Receipt Save & Delete */}
      <Form>
        <Form.Group>
          <Form.Row>
            <Col>
              {/* Add contributor button */}
              <Button
                type="submit"
                // onClick={() => handleContributor(ACTIONS.ADD_CONTRIBUTOR)}
                variant="secondary"
                className="form-control"
              >
                Save
              </Button>
            </Col>

            <Col>
              {/* Delete contributor button */}
              <Button
                type="submit"
                // onClick={() => handleContributor(ACTIONS.DELETE_CONTRIBUTOR)}
                variant="danger"
                className="form-control"
              >
                Delete
              </Button>
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
    </>
  );
}
