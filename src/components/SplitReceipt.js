import { React, useState } from "react";
import { Button, Modal, Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function SplitReceipt({ contributors, items }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function handleSplit() {
    setShow(true);
  }

  function getBill() {
    return contributors.map((contributor) => {
      var total = 0;
      return (
        <Card>
          <Card.Body>
            <Card.Title>{contributor.name}</Card.Title>
            <Card.Text>
              <ListGroup>
                {items.map((item) => {
                  if (item.contributors.includes(contributor)) {
                    var splitCost =
                      parseFloat(item.cost) / item.contributors.length;
                    total = total + splitCost;
                    return (
                      <ListGroupItem key={item.id}>
                        {item.name}: ${splitCost.toFixed(2)}
                      </ListGroupItem>
                    );
                  }
                })}
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer>${total.toFixed(2)}</Card.Footer>
        </Card>
      );
    });
  }

  function getRemaining() {
    var remaining = 0;
    return (
      <Card>
        <Card.Body>
          <Card.Title>Remaining</Card.Title>
          <Card.Text>
            <ListGroup>
              {items.map((item) => {
                if (item.contributors.length === 0) {
                  remaining = remaining + parseFloat(item.cost);
                  return (
                    <ListGroupItem key={item.id}>
                      {item.name}: ${item.cost}
                    </ListGroupItem>
                  );
                }
              })}
            </ListGroup>
          </Card.Text>
        </Card.Body>
        <Card.Footer>${remaining.toFixed(2)}</Card.Footer>
      </Card>
    );
  }

  //TODO Remaining Cost

  return (
    <>
      <Button variant="dark" onClick={() => handleSplit()}>
        Split
      </Button>
      {/* Modal Pop-up window */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Split Bill </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {getBill()}
          {getRemaining()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
