import React from "react";

export const Job = ({
  id,
  title,
  location,
  changeJob,
  jobSelected,
}) => (
  <li
    onClick={() => changeJob(id)}
    className={jobSelected === id ? "border-thick card mt-3" : "card mt-3"}
    key={title}
    style={{ cursor: "pointer" }}
  >
    <div className="media card-body">
     
      <div>
        <p className="card-title font-weight-bold">{title}</p>
        <p>{location}</p>
      </div>
    </div>
  </li>
);
