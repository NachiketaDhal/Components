import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const [edit, setEdit] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setAlert({ show: true, msg: "Please enter a value", type: "danger" });
    } else if (inputValue && edit) {
      setItemList(
        itemList.map((item) => {
          if (item === editItem) {
            return { ...item, name: inputValue };
          }
          return item;
        })
      );
      setAlert({
        show: true,
        msg: "Item edited successfully",
        type: "success",
      });
      setEdit(false);
      setEditItem(null);
      setInputValue("");
    } else {
      const newItem = { id: new Date().getTime().toString(), name: inputValue };
      setItemList((prevValue) => [...prevValue, newItem]);
      setAlert({
        show: true,
        msg: "Item added successfully",
        type: "success",
      });
      setInputValue("");
    }
  };

  const onDeleteIconClick = (id) => {
    const newItemList = itemList.filter((item) => item.id !== id);
    setItemList(newItemList);
    setAlert({ show: true, msg: "Item deleted", type: "danger" });
  };

  const onEditIconClick = (item) => {
    setEdit(true);
    setEditItem(item);
    setInputValue(item.name);
  };

  useEffect(() => {
    const timeOut = setTimeout(
      () => setAlert({ show: false, msg: "", type: "" }),
      1000
    );
    return () => clearTimeout(timeOut);
  }, [alert]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(itemList));
  }, [itemList]);

  return (
    <React.Fragment>
      <section className="section-center">
        <form className="grocery-form">
          {alert.show && <Alert alert={alert} />}
          <h3>Grocery Bud</h3>
          <div className="form-control">
            <input
              className="grocery"
              placeholder="e.g. eggs"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="submit-btn" onClick={handleSubmit}>
              {edit ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {itemList.length > 0 && (
          <div className="grocery-container">
            <List
              items={itemList}
              onDeleteIconClick={onDeleteIconClick}
              onEditIconClick={onEditIconClick}
            />
          </div>
        )}

        {itemList.length > 0 && (
          <button
            className="clear-btn"
            onClick={() => {
              setItemList([]);
              setAlert({
                show: true,
                msg: "Deleted all items",
                type: "danger",
              });
            }}
          >
            Clear Items
          </button>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
