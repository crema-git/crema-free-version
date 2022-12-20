import React, { useEffect, useState } from 'react';
import UploadModern from '../components/UploadModern';
import { useDropzone } from 'react-dropzone';
import PreviewThumb from '../components/PreviewThumb';
import AppGrid from '@crema/components/AppGrid';

const Previews = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const dropzone = useDropzone({
    accept: {
      'image/png': ['.png', '.jpeg', '.jpg'],
    },
    onDrop: (acceptedFiles) => {
      setUploadedFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  useEffect(() => {
    setUploadedFiles(dropzone.acceptedFiles);
  }, [dropzone.acceptedFiles]);

  const onDeleteUploadFile = (file) => {
    dropzone.acceptedFiles.splice(dropzone.acceptedFiles.indexOf(file), 1);
    setUploadedFiles([...dropzone.acceptedFiles]);
  };

  return (
    <section className="container" style={{ cursor: 'pointer' }}>
      <UploadModern
        uploadText="Drag n drop some files here, or click to select files"
        setUploadedFiles={setUploadedFiles}
        dropzone={dropzone}
      />
      <AppGrid
        sx={{
          maxWidth: 500,
        }}
        data={uploadedFiles}
        column={4}
        itemPadding={5}
        renderRow={(file, index) => (
          <PreviewThumb
            file={file}
            onDeleteUploadFile={onDeleteUploadFile}
            key={index + file.path}
          />
        )}
      />
    </section>
  );
};

export default Previews;
