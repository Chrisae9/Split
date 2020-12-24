import { React, useEffect, useState } from "react";
import Select from "react-select";
import { Form, Col, Button } from "react-bootstrap";

export default function ReceiptSelect({
  receipts,
  signedIn,
  onSave,
  onDelete,
  onSelect,
}) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (signedIn) {
      getOptions(receipts);
    } else {
      setOptions();
    }
  }, [receipts]);

  function getOptions(receipts) {
    setOptions(
      receipts.map((receipt) => {
        return { value: receipt._id, label: receipt.name };
      })
    );
  }

  return (
    <>
      <Form>
        <Form.Group>
          <Select
            options={options}
            onChange={(selection) => onSelect(selection)}
            placeholder="Select a Receipt"
          />
        </Form.Group>
      </Form>

      {/* Receipt Save & Delete */}
      <Form.Group>
        <Form.Row>
          <Col>
            {/* Add contributor button */}
            <Button
              type="submit"
              // onClick={() => handleContributor(ACTIONS.ADD_CONTRIBUTOR)}
              variant="secondary"
              className="form-control"
              onClick={onSave}
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
              onClick={onDelete}
            >
              Delete
            </Button>
          </Col>
        </Form.Row>
      </Form.Group>
    </>
  );
}
