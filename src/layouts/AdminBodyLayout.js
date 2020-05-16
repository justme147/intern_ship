import React from "react";
import PropTypes from "prop-types";

function AdminBodyLayout(props) {
  return (
    <main className="body-main">
      <div className="body-main__container">
        {props.isShow && <div className="body-main__alert">{props.alert}</div>}

        <h1 className="body-main__title">{props.title}</h1>
        {props.children}
      </div>
    </main>
  );
}

AdminBodyLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
  alert: PropTypes.string,
  isShow: PropTypes.bool,
};

export default AdminBodyLayout;
