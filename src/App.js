import "./App.css";
import { React, useState, useReducer } from "react";
import TopPage from "./components/TopPage";
import ReceiptName from "./components/ReceiptName";
import ReceiptContributors from "./components/ReceiptContributors";
import ReceiptTable from "./components/ReceiptTable";
import SplitReceipt from "./components/SplitReceipt";
import { Card } from "react-bootstrap";
import { v4 as UUID } from "uuid";
import ReceiptContributorModal from "./components/ReceiptContributorModal";

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
  // const [id, setID] = useState(UUID());
  // const [name, setName] = useState("");

  const [contributors, setContributors] = useState([]);

  const [items, dispatch] = useReducer(reducer, []);
  return (
    <>
      <TopPage />

      <Card className="col-11 mx-auto">
        <Card.Body>
          {/* Uncomment when database is implemented */}
          {/* <ReceiptName value={name} onChange={(name) => setName(name)} /> */}
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
    </>
  );
}

export default App;
