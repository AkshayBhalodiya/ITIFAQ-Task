import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const Header = ({ handleFileChange }) => {
  return (
    <div className="header">
      <h2>Documents</h2>
      <label className="upload-button">
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt,.jpg,.png"
          onChange={handleFileChange}
          multiple
          hidden
        />
        <span>
          <FontAwesomeIcon icon={faUpload} style={{ marginRight: "8px" }} />
        </span>
        Upload
      </label>
    </div>
  );
};

export default Header;
