import React, { useRef } from 'react';
import { Box, Grid, Slide } from '@mui/material';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import AppCard from '@crema/components/AppCard';
import ImgUpload from './ImageUpload';
import PropTypes from 'prop-types';
import JoditEditor from 'jodit-react';

const config = {
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
  toolbar: true,
  minHeight: 300,
  maxHeight: 500,
  buttons: [
    'source',
    '|',
    'bold',
    'strikethrough',
    'underline',
    'italic',
    '|',
    'ul',
    'ol',
    '|',
    'outdent',
    'indent',
    '|',
    'font',
    'fontsize',
    'paragraph',
    '|',
    'image',
    'video',
    'table',
    'link',
    '|',
    'align',
    'undo',
    'redo',
    'selectall',
    'cut',
    'copy',
    '|',
    'hr',
  ],
  uploader: {
    insertImageAsBase64URI: true,
    url: '/api/upload',
    format: 'json',
    imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
    headers: {
      'X-CSRF-TOKEN': 'CSFR-Token',
      Authorization: 'Bearer <JSON Web Token>',
    },
    getMessage: function (resp) {
      return resp.msg;
    },
    process: function (resp) {
      return {
        files: resp.data,
      };
    },
  },
  style: {
    '& .jodit .jodit-status-bar': {
      background: '#29572E',
      color: 'rgba(255,255,255,0.5)',
    },
  },
};
const BlogContent = ({
  content,
  uploadedFiles,
  setUploadedFiles,
  setFieldValue,
}) => {
  const editor = useRef(null);
  return (
    <Slide direction='right' in mountOnEnter unmountOnExit>
      <Grid item xs={12} lg={8}>
        <AppCard>
          <AppTextField
            name='title'
            variant='outlined'
            sx={{
              width: '100%',
              my: 2,
            }}
            label='Blog Name'
          />

          <Box component='p' sx={{ mt: 3, fontSize: 16 }}>
            Description
          </Box>
          <AppTextField
            multiline
            name='description'
            variant='outlined'
            rows={4}
            sx={{
              width: '100%',
              my: 2,
            }}
            placeholder='Description here'
          />

          <Box component='p' sx={{ mt: 3, fontSize: 16 }}>
            Content*
          </Box>
          <Box
            sx={{
              width: '100%',
              my: 2,
            }}
          >
            <JoditEditor
              ref={editor}
              value={content}
              placeholder='Description here'
              config={config}
              tabIndex={1} // tabIndex of textarea
              onChange={(value) => setFieldValue('content', value)}
            />
          </Box>
          <Box component='p' sx={{ mt: 3, mb: 2, fontSize: 16 }}>
            Cover Image
          </Box>
          <ImgUpload
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
        </AppCard>
      </Grid>
    </Slide>
  );
};

export default BlogContent;

BlogContent.propTypes = {
  content: PropTypes.string,
  uploadedFiles: PropTypes.array,
  setUploadedFiles: PropTypes.func,
  setFieldValue: PropTypes.func,
};
