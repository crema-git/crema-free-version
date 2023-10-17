import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
// import AppComponentCard from '@crema/components/AppComponentCard';
// import SampleEditor from './Simple';

const FroalaEditor = () => {
  return (
    <>
      <AppComponentHeader
        title='Froala WYSIWYG Editor'
        description='React JS Froala WYSIWYG Editor'
        refUrl='https://froala.com/wysiwyg-editor/docs/framework-plugins/react/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <strong>
            Code Commented due to some issue with Froala Editor at compile time.
          </strong>
          <pre>
            eslint-disable-next-line react/no-unescaped-entities Module not
            found: Error: Can&apos;t resolve &apos;crypto&apos; in
            eslint-disable-next-line react/no-unescaped-entities
            &apos;...\node_modules\froala-editor\js&apos; BREAKING CHANGE:
            webpack &#60; 5 used to include polyfills for node.js core modules
            by default
          </pre>
          <strong>
            If you want to use this just uncomment the code and go ahead.
          </strong>
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default FroalaEditor;
