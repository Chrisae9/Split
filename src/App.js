import "./App.css";
import { React, useState, useReducer, useEffect } from "react";
import TopPage from "./components/TopPage";
import ReceiptName from "./components/ReceiptName";
import ReceiptContributors from "./components/ReceiptContributors";
import ReceiptTable from "./components/ReceiptTable";
import SplitReceipt from "./components/SplitReceipt";
import { Card, Col, Row, Form } from "react-bootstrap";
import { v4 as UUID } from "uuid";
import ReceiptContributorModal from "./components/ReceiptContributorModal";
import LoginHooks from "./components/LoginHooks";
import LogoutHooks from "./components/LogoutHooks";
import ReceiptSelect from "./components/ReceiptSelect";
import { refreshTokenSetup } from "./utils/refreshToken";

export const ACTIONS = {
  ADD_ITEM: "add-item",
  DELETE_ITEM: "delete-item",
  TOGGLE_ITEM: "toggle-item",
  TOGGLE_ITEMS: "toggle-items",
  ADD_CONTRIBUTOR: "add-contributor",
  DELETE_CONTRIBUTOR: "delete-contributor",
  REMOVE_CONTRIBUTOR: "remove-contributor",
};

function reducer(items, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return [...items, newItem(action.payload.name, action.payload.cost)];
    case ACTIONS.TOGGLE_ITEM:
      return items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, selected: !item.selected };
        }
        return item;
      });
    case ACTIONS.TOGGLE_ITEMS:
      return items.map((item) => {
        return { ...item, selected: action.payload.selected };
      });
    case ACTIONS.DELETE_ITEM:
      return items.filter((item) => item.id !== action.payload.id);
    case ACTIONS.ADD_CONTRIBUTOR:
      return items.map((item) => {
        if (
          item.selected &&
          !item.contributors.includes(action.payload.contributor)
        ) {
          return {
            ...item,
            contributors: item.contributors.concat(action.payload.contributor),
          };
        }
        return item;
      });
    // TODO: Reference contributors ONLY by ID
    case ACTIONS.REMOVE_CONTRIBUTOR:
      return items.map((item) => {
        if (item.contributors.includes(action.payload.contributor)) {
          return {
            ...item,
            contributors: item.contributors.filter(
              (contributor) => contributor !== action.payload.contributor
            ),
          };
        }
        return item;
      });
    case ACTIONS.DELETE_CONTRIBUTOR:
      return items.map((item) => {
        if (
          item.selected &&
          item.contributors.includes(action.payload.contributor)
        ) {
          return {
            ...item,
            contributors: item.contributors.filter(
              (contributor) => contributor !== action.payload.contributor
            ),
          };
        }
        return item;
      });
    default:
      return items;
  }
}

function newItem(name, cost) {
  return {
    id: UUID(),
    name: name,
    cost: cost,
    selected: false,
    contributors: [],
  };
}

function App() {
  // Receipt ID for use with database
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [showLogout, setShowLogout] = useState(false);

  const [contributors, setContributors] = useState([]);

  const [items, dispatch] = useReducer(reducer, []);

  const onSuccess = (res) => {
    // console.log("Login Success: currentUser:", res.profileObj);
    // alert(`Your google id is ${res.googleId}`);
    setShowLogout(() => true);
    refreshTokenSetup(res);
  };

  return (
    <div className="App-header">
      <TopPage />
      <Card className="col-11 mx-auto">
        <Card.Body>
          <Form.Group>
            {!showLogout && <LoginHooks onSuccess={onSuccess} />}
            {showLogout && (
              <LogoutHooks setShowLogout={(logout) => setShowLogout(logout)} />
            )}
          </Form.Group>

          <ReceiptSelect />
          <ReceiptName value={name} onChange={(name) => setName(name)} />
          <ReceiptContributors
            contributors={contributors}
            setContributors={(contributors) => setContributors(contributors)}
            dispatch={dispatch}
          />
          <ReceiptContributorModal
            contributors={contributors}
            dispatch={dispatch}
          />
          <ReceiptTable items={items} dispatch={dispatch} />

          <SplitReceipt contributors={contributors} items={items} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
