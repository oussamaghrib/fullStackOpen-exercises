import React from "react";

const Filter = ({ searchValue }) => {
  return (
    <div>
      <h2>search result</h2>
      {searchValue.length === 0 ? (
        <p>
          {" "}
          <i> no contact under this name </i>
        </p>
      ) : (
        searchValue.map((item) => {
          return (
            <p key={item.name}>
              {item.name} : {item.number}
            </p>
          );
        })
      )}
    </div>
  );
};
export default Filter;
