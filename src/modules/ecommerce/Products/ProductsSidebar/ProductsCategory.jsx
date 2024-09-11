import React from 'react';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Fonts } from '@crema/constants/AppEnums';

const ProductsCategory = () => {
  return (
    <SimpleTreeView
      style={{
        flexGrow: 1,
        maxWidth: 400,
        fontWeight: Fonts.REGULAR,
      }}
      checkboxSelection
    >
      <TreeItem itemId="1" label="Watches">
        <TreeItem itemId="2" label="Men's Watches" />
        <TreeItem itemId="3" label="Women's Watches" />
        <TreeItem itemId="4" label="Kid's Watches" />
      </TreeItem>
    </SimpleTreeView>
  );
};

export default ProductsCategory;
