import React from "react";

export default function EmptyAdminLayout(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="container__content container__content--gray container__content--center">
          {props.children}
        </div>
      </div>
    </div>
  );
}
