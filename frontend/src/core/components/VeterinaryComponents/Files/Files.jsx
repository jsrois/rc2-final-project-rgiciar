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
              rel="noreferrer" // Añadimos rel="noreferrer" para seguridad
              onClick={() => handleFileClick(file)}
            >
              {file.name}
            </a>
          </li>
        ))}
      </ol>
      {selectedFile && (
        <div className="fullscreen-viewer">
          <PDFViewer file={selectedFile} />
          {/* <button onClick={handleClose}>Cerrar</button> */}
        </div>
      )}
    </div>
  );
};

/* import "./Files.css";
import {useState} from 'react';

export const Files = () => {
    const [files, setFiles] = useState([
        {id: 1, title: "Analítica 1", date: "9-08-2023", fileName: "archivo_prueba_pdf.pdf"}
    ]);

    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0]; // Obtener el archivo subido
        const newFile = {id: files.length + 1, title: uploadedFile.name, fileName: uploadedFile.name}; // Crear un nuevo objeto de archivo
        setFiles([...files, newFile]); // Agregar el nuevo archivo a la lista de archivos
    };
    const handleDeleteFile = (id) => {
        const updatedFiles = files.filter(file => file.id !== id);
        setFiles(updatedFiles);
    };
    const openFileModal = (file) => {
        setSelectedFile(file);
    };
    const closeFileModal = () => {
        setSelectedFile(null);
    };
    const getFileUrl = (fileName) => {
        return `../../../assets/${fileName}`;
    };

    return (
        <div className="filesContainer">
            <label className="fileUploadButton">
                Update a file
                <input type="file" style={{display: "none"}}/>
            </label>
            <ol>
                <li></li>
            </ol>
        </div>
    );
}; */
