import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DownloadIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 14l-.707.707.707.707.707-.707L12 14zm1-9a1 1 0 10-2 0h2zM6.293 9.707l5 5 1.414-1.414-5-5-1.414 1.414zm6.414 5l5-5-1.414-1.414-5 5 1.414 1.414zM13 14V5h-2v9h2z"
        fill="#CCD2E3"
      />
      <Path
        d="M5 16v1a2 2 0 002 2h10a2 2 0 002-2v-1"
        stroke="#CCD2E3"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default DownloadIcon;
