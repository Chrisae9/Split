import { React, useState } from "react";
import { Form, Button, Modal, Col } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { ACTIONS } from "../App";

export default function ReceiptContributorModal({ contributors, dispatch }) {
  const columns = [
    {
      dataField: "_id",
      hidden: true,
    },
    {
      dataField: "name",
      text: "Name",
      headerAttrs: {
        hidden: true,
      },
    },
  ];

  function handleContributor(mode) {
    setMode(mode);
    setShow(true);
  }

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState(ACTIONS.ADD_CONTRIBUTOR);

  const handleClose = () => setShow(false);

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      dispatch({
        type: mode,
        payload: { contributor: row },
      });
      handleClose();
    },
  };

  return (
    <>
      {/* Modal Pop-up window */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Contributor </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BootstrapTable
            keyField="_id"
            data={contributors}
            columns={columns}
            rowEvents={rowEvents}
            hover
            condensed
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Form>
        <Form.Group>
          <Form.Row>
            <Col>
              {/* Add contributor button */}
              <Button
                onClick={() => handleContributor(ACTIONS.ADD_CONTRIBUTOR)}
                variant="secondary"
                className="form-control"
              >
                Assign
              </Button>
            </Col>

            <Col>
              {/* Delete contributor button */}
              <Button
                onClick={() => handleContributor(ACTIONS.DELETE_CONTRIBUTOR)}
                variant="danger"
                className="form-control"
              >
                Remove
              </Button>
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
    </>
  );
}
