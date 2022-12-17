import React from 'react';
import {RoutePermittedRole} from "@crema/constants/AppConst";

const Products = React.lazy(() => import('../../app/ecommerce/Products'));
const ProductDetail = React.lazy(() => import('../../app/ecommerce/ProductDetail'));
const Customers = React.lazy(() => import('../../app/ecommerce/Customers'));
const Checkout = React.lazy(() => import('../../app/ecommerce/Checkout'));
const Carts = React.lazy(() => import('../../app/ecommerce/Carts'));
const Orders = React.lazy(() => import('../../app/ecommerce/Orders'));
const Confirmation = React.lazy(() => import('../../app/ecommerce/Confirmation'));
const Invoice1 = React.lazy(() => import('../../app/ecommerce/Invoice1'));
const Invoice2 = React.lazy(() => import('../../app/ecommerce/Invoice2'));

export const ecommerceConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/invoice-1',
    element: <Invoice1 />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/invoice-2',
    element: <Invoice2 />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/products',
    element: <Products />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: ['/ecommerce/product_detail/', '/ecommerce/product_detail/:id'],
    element: <ProductDetail />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/customers',
    element: <Customers />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/checkout',
    element: <Checkout />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/cart',
    element: <Carts />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/orders',
    element: <Orders />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/ecommerce/confirmation',
    element: <Confirmation />,
  },
];
