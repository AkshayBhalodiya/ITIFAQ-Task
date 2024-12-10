import React, { useState } from "react";
import Header from "./components/Header/Header";
import FileList from "./components/FileList/FileList";
import Notification from "./components/Notification/Notification";
import {
  faFilePdf,
  faFileWord,
  faFileAlt,
  faFileImage,
  faFile,
  faFileExcel,faFileCode,faFileZipper
} from "@fortawesome/free-regular-svg-icons";
import "./App.css";

function App() {
  const [files, setFiles] = useState([]);
  const [notification, setNotification] = useState("");

  // Display notifications
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification("");
    }, 1500);
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    const newFiles = uploadedFiles.filter(
      (file) => !files.some((f) => f.name === file.name)
    );

    if (newFiles.length < uploadedFiles.length) {
      showNotification("Some files are already uploaded. Please select other files.");
    }

    const formattedFiles = newFiles.map((file) => ({
      name: file.name,
      file,
      icon: getFileIcon(file),
      color: getIconColor(file),
    }));

    setFiles((prevFiles) => [...prevFiles, ...formattedFiles]);
  };

  // Determine the FontAwesome icon based on file extension
  const getFileIcon = (file) => {
    const extension = file.name.split(".").pop().toLowerCase();
    switch (extension) {
      case "pdf":
        return faFilePdf;
      case "doc":
      case "docx":
        return faFileWord;
      case "txt":
        return faFileAlt;
      case "xml":
        return faFileExcel;
      case "csv":
        return faFileCode;
      case "zip":
        return faFileZipper;
      case "jpg":
      case "jpeg":
      case "png":
        return faFileImage;
      default:
        return faFile;
    }
  };

  // Get the icon color based on file type
  const getIconColor = (file) => {
    const extension = file.name.split(".").pop().toLowerCase();
    switch (extension) {
      case "pdf":
        return "#D32F2F";
      case "doc":
      case "docx":
        return "#1976D2";
      case "txt":
        return "#388E3C";
      case "xml":
        return "#04AA6D";
      case "csv":
        return "#2eff20";
      case "zip":
        return "#a1a1a1";
      case "jpg":
      case "jpeg":
      case "png":
        return "#FF9800";
      default:
        return "#757575";
    }
  };

  // Delete a file
  const handleDelete = (fileName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the file "${fileName}"?`);
  
    if (confirmDelete) {
      setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
      showNotification(`File "${fileName}" has been deleted.`);
    }
  };
  return (
    <div className="App">
      <Header handleFileChange={handleFileChange} />
      <Notification message={notification} />
      <FileList files={files} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
