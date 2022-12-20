import React, { useEffect, useState } from 'react';
import UploadModern from '../components/UploadModern';
import Box from '@mui/material/Box';
import AppList from '@crema/components/AppList';
import { useDropzone } from 'react-dropzone';
import FileRow from '../components/FileRow';

const StyledDropzone = () => {
  const dropzone = useDropzone();
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    setUploadedFiles(dropzone.acceptedFiles);
  }, [dropzone.acceptedFiles]);

  const onDeleteUploadFile = (file) => {
    dropzone.acceptedFiles.splice(dropzone.acceptedFiles.indexOf(file), 1);
    setUploadedFiles([...dropzone.acceptedFiles]);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <UploadModern
        uploadText="Drag n drop some files here, or click to select files"
        dropzone={dropzone}
      />
      <aside>
        <AppList
          data={uploadedFiles}
          renderRow={(file, index) => (
            <FileRow
              key={index + file.path}
              file={file}
              onDeleteUploadFile={onDeleteUploadFile}
            />
          )}
        />
      </aside>
    </Box>
  );
};

export default StyledDropzone;
