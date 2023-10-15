import React, {useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import AppGrid from '@crema/components/AppGrid';
import PropTypes from 'prop-types';
import {
  PreviewThumb,
  UploadModern,
} from '../../../../thirdParty/reactDropzone/components';

const ImgUpload = ({uploadedFiles, setUploadedFiles}) => {
  const dropzone = useDropzone({
    accept: {
      'image/png': ['.png', '.jpeg', '.jpg'],
    },
    onDrop: (acceptedFiles) => {
      setUploadedFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
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
    <section className='container' style={{cursor: 'pointer'}}>
      <UploadModern
        uploadText='Drag n drop some files here, or click to select files'
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

export default ImgUpload;

ImgUpload.propTypes = {
  uploadedFiles: PropTypes.array,
  setUploadedFiles: PropTypes.func,
};
