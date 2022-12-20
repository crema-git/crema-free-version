import React, { useState } from 'react';
import AppList from '@crema/components/AppList';
import AddressCell from './AddressCell';
import { addresses } from '@crema/fakedb/data';

const DeliveryAddress = () => {
  const [selectedAddress, setSelectAddress] = useState(addresses[1]);
  return (
    <AppList
      delay={200}
      data={addresses}
      renderRow={(address) => (
        <AddressCell
          key={address.id}
          address={address}
          selectedAddress={selectedAddress}
          setSelectAddress={setSelectAddress}
        />
      )}
    />
  );
};

export default DeliveryAddress;
