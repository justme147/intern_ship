import React from "react";
import PropTypes from "prop-types";

function AdminBodyLayout(props) {
  return (
    <main className="body-main">
      <div className="body-main__container">
        <h1 className="body-main__title">{props.title}</h1>
        {props.children}
      </div>
    </main>
  );
}

AdminBodyLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};

export default AdminBodyLayout;
