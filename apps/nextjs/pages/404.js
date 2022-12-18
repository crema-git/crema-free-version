import asyncComponent from "@crema/components/AppAsyncComponent"

export default asyncComponent(() =>
  import('../modules/errorPages/Error404/index'),
);
