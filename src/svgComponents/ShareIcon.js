import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ShareIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20 10l.707.707.707-.707-.707-.707L20 10zM3 18a1 1 0 102 0H3zm12.707-2.293l5-5-1.414-1.414-5 5 1.414 1.414zm5-6.414l-5-5-1.414 1.414 5 5 1.414-1.414zM20 9H10v2h10V9zM3 16v2h2v-2H3zm7-7a7 7 0 00-7 7h2a5 5 0 015-5V9z"
        fill="#CCD2E3"
      />
    </Svg>
  );
}

export default ShareIcon;
