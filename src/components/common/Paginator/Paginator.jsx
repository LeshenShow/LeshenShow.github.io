import React from "react";
import style from "./Paginator.module.css";

let Paginator = (props) => {
  console.log("Paginator", props.pageSize);
  let pagesMaximum = 10;
  let pagesUpload = Math.ceil(props.totalUsersCount / props.pageSize);
  let pagesCount = Math.min(pagesUpload, pagesMaximum);
  let pages = [];

  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index);
  }

  return (
    <div className={style.pageList}>
      {pages.map((page) => {
        return (
          <span
            className={props.currentPage === page && style.selectedPage}
            onClick={(event_obrabotchik) => {
              props.onPageChanged(page);
            }}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
