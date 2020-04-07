import React from "react";

export default function AdminBodyLayout(props) {
  return (
    <main className="body-main">
      <div className="body-main__container">
        <h1 className="body-main__title">{props.title}</h1>
        {props.children}
      </div>
    </main>
  );
}
