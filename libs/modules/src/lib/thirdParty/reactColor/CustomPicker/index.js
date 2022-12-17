import React, {useState} from 'react';

import MyPicker from './MyPicker';

export const CustomPicker = () => {
  const [color, setColor] = useState('orange');
  const handleColorChange = ({hex}) => setColor(hex);

  return <MyPicker color={color} onChangeComplete={handleColorChange} />;
};

export default CustomPicker;
