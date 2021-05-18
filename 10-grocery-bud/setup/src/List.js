import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, onDeleteIconClick, onEditIconClick }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        return (
          <article className="grocery-item" key={item.id}>
            <p className="title">{item.name}</p>
            <div className="btn-container">
              <button
                className="edit-btn"
                onClick={() => onEditIconClick(item)}
              >
                <FaEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => onDeleteIconClick(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
