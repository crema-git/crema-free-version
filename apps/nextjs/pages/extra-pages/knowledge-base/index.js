import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const KnowledgeBase = asyncComponent(() =>
  import('../../../modules/extraPages/KnowledgeBase'),
);
export default AppPage(() => <KnowledgeBase />);
