import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const FileList = ({ files, handleDelete }) => {
  return (
    <div className="file-list">
      {files.length === 0 ? (
        <div className="text-center">No files uploaded yet.</div>
      ) : (
        files.map((file, index) => (
          <div key={index} className="file-item">
            <FontAwesomeIcon
              icon={file.icon}
              size="2x"
              style={{ color: file.color }}
            />
            <div className="file-details">
              <p>
                <span>{file.name}</span>
              </p>
            </div>
            <FontAwesomeIcon
              icon={faTrashAlt}
              size="lg"
              className="delete-icon"
              onClick={() => handleDelete(file.name)}
              style={{ cursor: "pointer", color: "#000" }}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default FileList;
