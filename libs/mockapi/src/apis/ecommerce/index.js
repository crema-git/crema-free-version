import mock from '../MockConfig';
import ecommerceData, {
  brandData,
  cartItems,
  customersData,
  recentOrders,
} from '../../fakedb/ecommerce/ecommerceData';
import { multiPropsFilter } from '@crema/helpers';

let cartItemsData = cartItems;
mock.onGet('/api/ecommerce/list').reply((request) => {
  const { filterData, page } = request.params;
  const data = multiPropsFilter(ecommerceData, filterData);
  const index = page * 10;
  const total = data.length;
  const list = data.length > 10 ? data.slice(index, index + 10) : data;
  return [200, { list, total }];
});

mock.onGet('/api/ecommerce/get').reply((request) => {
  const { id } = request.params;
  if (id >= 1 && id <= 12) {
    const data = ecommerceData.filter((item) => +item.id === +id);
    if (data.length > 0) return [200, data[0]];
  }
  return [200, ecommerceData[0]];
});

mock.onGet('/api/ecommerce/orders').reply((request) => {
  const { search, page } = request.params;

  let orders = [...recentOrders];

  if (search) {
    orders = orders.filter(
      (order) =>
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.product.toLowerCase().includes(search.toLowerCase()),
    );
  }
  return [
    200,
    {
      count: orders.length,
      data: orders.splice(page * 10, (page + 1) * 10),
    },
  ];
});

mock.onGet('/api/ecommerce/customers').reply((request) => {
  const { search, page } = request.params;

  let customers = [...customersData];

  if (search) {
    customers = customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(search.toLowerCase()) ||
        customer.email.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return [
    200,
    {
      customerCount: customers.length,
      customers: customers.splice(page * 10, (page + 1) * 10),
    },
  ];
});

mock.onGet('/api/cart/get').reply(() => {
  return [200, cartItemsData];
});

mock.onPost('/api/cart/add').reply((request) => {
  const { product } = JSON.parse(request.data);
  if (cartItemsData.some((item) => +item.id === +product.id)) {
    cartItemsData = cartItemsData.map((item) => {
      if (+item.id === +product.id) {
        item.count = +item.count + 1;
      }
      return item;
    });
    return [200, cartItemsData];
  } else {
    const filteredBrand = brandData.filter(
      (brand) => brand.id === product.brand,
    );
    cartItemsData = cartItemsData.concat({
      id: product.id,
      brand: filteredBrand.name,
      discount: product.discount,
      image: product.image[0].src,
      mrp: product.mrp,
      title: product.title,
      count: 1,
    });
    return [200, cartItemsData];
  }
});

mock.onPut('/api/cart/update').reply((request) => {
  const { product } = JSON.parse(request.data);
  cartItemsData = cartItemsData.map((item) =>
    item.id === product.id ? product : item,
  );
  return [200, cartItemsData];
});

mock.onPost('/api/cart/remove').reply((request) => {
  const { product } = JSON.parse(request.data);
  cartItemsData = cartItemsData.filter((item) => item.id !== product.id);
  return [200, cartItemsData];
});
