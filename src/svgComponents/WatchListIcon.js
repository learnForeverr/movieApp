import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function WatchListIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 4v0C8.229 4 6.343 4 5.172 5.172 4 6.343 4 8.229 4 12v6c0 .943 0 1.414.293 1.707C4.586 20 5.057 20 6 20h6c3.771 0 5.657 0 6.828-1.172C20 17.657 20 15.771 20 12v0"
        stroke="#CCD2E3"
        strokeWidth={2}
      />
      <Path
        d="M9 10h6M9 14h3M19 8V2m-3 3h6"
        stroke="#CCD2E3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default WatchListIcon;
