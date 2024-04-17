import { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { useDropzone } from "react-dropzone";
import "./Files.css";

export const Files = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "application/pdf",
    onDrop: (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles.map((file) => file)]);
    },
  });

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleDeleteFile = (id) => {
    const updatedFiles = files.filter((file) => file.id !== id);
    setFiles(updatedFiles);
  };

  const shortenFileName = (name) => {
    if (name.length > 15) {
      return name.slice(0, 15) + "...";
    }
    return name;
  };

  return (
    <div className="filesContainer">
      <label className="fileUploadButton" {...getRootProps()}>
        Upload a file
        <input {...getInputProps()} type="file" />
      </label>
      <ol>
        {files.map((file) => (
          <li key={file.name}>
            <a
              href={URL.createObjectURL(file)}
              target="_blank"
              rel="noreferrer" // Esto de rel="noreferrer" es para seguridad?
              onClick={() => handleFileClick(file)}
            >
              {shortenFileName(file.name)}
              <label className="pdfButton">View</label>
            </a>
            <button className="pdfButton" onClick={() => handleDeleteFile(file.id)}>Delete</button>
          </li>
        ))}
      </ol>
      {selectedFile && (
        <div className="fullscreen-viewer">
          <PDFViewer file={selectedFile} />
        </div>
      )}
    </div>
  );
};

