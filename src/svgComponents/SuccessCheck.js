import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SuccessCheck(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9 10l3.258 2.444a1 1 0 001.353-.142L20 5M21 12a9 9 0 11-6.67-8.693"
        stroke="#CCD2E3"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SuccessCheck;
