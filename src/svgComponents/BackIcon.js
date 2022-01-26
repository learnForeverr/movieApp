import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6 10l-.707.707L4.586 10l.707-.707L6 10zm7.293 8.707l-8-8 1.414-1.414 8 8-1.414 1.414zm-8-9.414l8-8 1.414 1.414-8 8-1.414-1.414zM12 10l-.707.707-.707-.707.707-.707L12 10zm7.293 8.707l-8-8 1.414-1.414 8 8-1.414 1.414zm-8-9.414l8-8 1.414 1.414-8 8-1.414-1.414z"
        fill="#CCD2E3"
      />
    </Svg>
  );
}

export default BackIcon;
