import "./Files.css";
import { useState } from 'react';

export const Files = () => {
    const [files, setFiles] = useState([
        {id: 1, title: "Analítica 1", date: "9-08-2023", fileName: "archivo_prueba_pdf.pdf"}
    ]);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0]; // Obtener el archivo subido
        const newFile = { id: files.length + 1, title: uploadedFile.name, fileName: uploadedFile.name }; // Crear un nuevo objeto de archivo
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
            <div className="fileSelect">
                <div className="fileSelectContainer">
                    <input type="file" onChange={handleFileUpload} />
                    <span>Upload a file</span>
                </div>
            </div>
            <ol>
                {files.map(file => (
                    <li key={file.id} onClick={() => openFileModal(file)}>
                        <span>{file.title}</span>
                        <span>{file.date}</span>
                    </li>
                ))}
            </ol>
            {selectedFile && (
                <div className="fileModal">
                    <div className="modalContent">
                        <iframe
                            src={getFileUrl(selectedFile.fileName)}
                            title={selectedFile.title}
                            width="100%"
                            height="100%"
                            type="application/pdf" // Agrega el tipo de contenido
                        />
                        <button onClick={closeFileModal}>Cerrar</button>
                        <button onClick={() => handleDeleteFile(selectedFile.id)}>Eliminar</button>
                    </div>
                </div>
            )}
        </div>
    );
};
