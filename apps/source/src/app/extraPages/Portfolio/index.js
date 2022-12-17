import React from 'react';
import Portfolio from '@crema/modules/extraPages/Portfolio';
import photos from "../../../../../../libs/mockapi/src/fakedb/gallery/photos";

const PortFolioPage = () => {
  return (
      <Portfolio photos={photos}/>
  );
};

export default PortFolioPage;