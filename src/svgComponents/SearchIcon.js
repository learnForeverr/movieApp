import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SearchIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={11} cy={11} r={7} stroke="#CCD2E3" strokeWidth={2} />
      <Path
        d="M20 20l-3-3"
        stroke="#CCD2E3"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SearchIcon;
