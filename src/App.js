import "./App.css";
import { React, useState, useReducer } from "react";
import TopPage from "./components/TopPage";
import ReceiptName from "./components/ReceiptName";
import ReceiptContributors from "./components/ReceiptContributors";
import ReceiptTable from "./components/ReceiptTable";
import SplitReceipt from "./components/SplitReceipt";
import { Card, Form } from "react-bootstrap";
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
  SET_ITEMS: "set-items",
};

function reducer(items, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return [...items, newItem(action.payload.name, action.payload.cost)];
    case ACTIONS.TOGGLE_ITEM:
      return items.map((item) => {
        if (item._id === action.payload.id) {
          return { ...item, selected: !item.selected };
        }
        return item;
      });
    case ACTIONS.TOGGLE_ITEMS:
      return items.map((item) => {
        return { ...item, selected: action.payload.selected };
      });
    case ACTIONS.DELETE_ITEM:
      return items.filter((item) => item._id !== action.payload.id);
    case ACTIONS.ADD_CONTRIBUTOR:
      return items.map((item) => {
        var hasElement = false;
        item.contributors.map((c) => {
          if (c.name === action.payload.contributor.name) {
            hasElement = true;
          }
        });

        if (item.selected && !hasElement) {
          return {
            ...item,
            contributors: item.contributors.concat(action.payload.contributor),
          };
        }
        return item;
      });
    case ACTIONS.REMOVE_CONTRIBUTOR:
      return items.map((item) => {
        var hasElement = false;
        item.contributors.map((c) => {
          if (c.name === action.payload.contributor.name) {
            hasElement = true;
          }
        });
        if (hasElement) {
          return {
            ...item,
            contributors: item.contributors.filter(
              (contributor) =>
                contributor.name !== action.payload.contributor.name
            ),
          };
        }
        return item;
      });
    case ACTIONS.DELETE_CONTRIBUTOR:
      return items.map((item) => {
        var hasElement = false;
        item.contributors.map((c) => {
          if (c.name === action.payload.contributor.name) {
            hasElement = true;
          }
        });
        if (item.selected && hasElement) {
          return {
            ...item,
            contributors: item.contributors.filter(
              (contributor) =>
                contributor.name !== action.payload.contributor.name
            ),
          };
        }
        return item;
      });
    case ACTIONS.SET_ITEMS:
      return action.payload.items;
    default:
      return items;
  }
}

function newItem(name, cost) {
  return {
    _id: UUID(),
    name: name,
    cost: cost,
    selected: false,
    contributors: [],
  };
}

function App() {
  const [googleId, setGoogleId] = useState("");
  const [receiptId, setReceiptId] = useState("");
  const [name, setName] = useState("");
  const [items, dispatch] = useReducer(reducer, []);
  const [contributors, setContributors] = useState([]);

  const [receipts, setReceipts] = useState([]);

  const [signedIn, setSignedIn] = useState(false);

  async function getAllReceipts(owner) {
    const response = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER}/receipts/${owner}`,
        {
          mode: "cors",
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      );

      const json = await res.json();
      setReceipts(json);
    };
    await response();
  }

  // On successful login
  function onSuccess(res) {
    setGoogleId(() => res.googleId);
    getAllReceipts(res.googleId);
    setSignedIn(() => true);
    console.log(`Successfully logged in, your google id is ${res.googleId}`);
    refreshTokenSetup(res);
  }

  // Save button clicked
  async function onSave() {
    // Not logged in
    if (googleId === "") {
      alert("Please Login");
      return;
    }

    let response = null;

    var data = {
      owner: googleId,
      _id: receiptId,
      name: name,
      items: items,
      contributors: contributors,
    };

    // Receipt already exists, update it
    if (receiptId !== "") {
      response = async () => {
        const res = await fetch(
          `${process.env.REACT_APP_SERVER}/receipts/${googleId}/${receiptId}`,
          {
            mode: "cors",
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
          }
        );
        const json = await res.json();
        console.log(json);
      };
      await response();
    } else {
      // Receipt doesn't exist, create a new one
      data._id = UUID();
      setReceiptId(data._id);

      // Upload receipt
      response = async () => {
        const res = await fetch(`${process.env.REACT_APP_SERVER}/receipts/`, {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(data),
        });
        const json = await res.json();
        console.log(json);
      };
      await response();
    }
    window.location.reload();
  }

  async function onDelete() {
    if (googleId === "") {
      alert("Please Login");
      return;
    }
    if (receiptId === "") {
      console.log("No receipt exists, reloading page");
    } else {
      const response = async () => {
        const res = await fetch(
          `${process.env.REACT_APP_SERVER}/receipts/${googleId}/${receiptId}`,
          {
            mode: "cors",
            method: "DELETE",
            headers: { "Access-Control-Allow-Origin": "*" },
          }
        );
        const json = await res.json();
        console.log(json);
      };
      await response();
    }
    window.location.reload();
  }

  async function onSelect(selection) {
    if (googleId === "") {
      alert("Please Login");
      return;
    }
    setReceiptId(selection.value);

    const response = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER}/receipts/${googleId}/${selection.value}`,
        { mode: "cors", headers: { "Access-Control-Allow-Origin": "*" } }
      );
      const json = await res.json();
      console.log(json);
      setName(json.name);
      dispatch({ type: ACTIONS.SET_ITEMS, payload: { items: json.items } });
      setContributors(json.contributors);
    };
    await response();
  }

  return (
    <div className="App-header">
      <TopPage />
      <Card className="col-11 mx-auto">
        <Card.Body>
          <Form.Group>
            {!signedIn && <LoginHooks onSuccess={onSuccess} />}
            {signedIn && (
              <LogoutHooks setSignedIn={(status) => setSignedIn(status)} />
            )}
          </Form.Group>

          <ReceiptSelect
            receipts={receipts}
            signedIn={signedIn}
            onSave={onSave}
            onDelete={onDelete}
            onSelect={onSelect}
          />
          <ReceiptName name={name} setName={(name) => setName(name)} />
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
