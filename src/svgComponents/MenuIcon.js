import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MenuIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5 7h14M5 12h10M5 17h6"
        stroke="#CCD2E3"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default MenuIcon;
