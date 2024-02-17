import React, { useState } from "react";
import style from "./Paginator.module.css";
import cn from "classnames";
let Paginator = (props) => {
  let totalItemsCount = props.totalUsersCount;
  let portionSize = Math.max(props.pageSize, 9);
  let pagesUpload = Math.ceil(totalItemsCount / portionSize);
  let portionCount = Math.min(pagesUpload, props.maxSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortion = (portionNumber - 1) * portionSize + 1;
  let rightPortion = portionNumber * portionSize;

  const pages = [];
  for (let i = 1; i <= portionCount; i++) {
    pages.push(i);
  }
  return (
    <div className={cn(style.pageList)}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          {"PREV"}
        </button>
      )}
      {pages
        .filter((page) => page >= leftPortion && page <= rightPortion)
        .map((page) => {
          return (
            <span
              key={page}
              className={cn(
                { [style.selectedPage]: props.currentPage === page },
                style.pageList
              )}
              onClick={(event_obrabotchik) => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}

      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          {"NEXT"}
        </button>
      )}
    </div>
  );
};

export default Paginator;
