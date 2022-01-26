import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {theme} from '../constants/theme';

function ExpandIcon() {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 18l.707.707-.707.707-.707-.707L12 18zm6.707-5.293l-6 6-1.414-1.414 6-6 1.414 1.414zm-7.414 6l-6-6 1.414-1.414 6 6-1.414 1.414zM12 12l.707.707-.707.707-.707-.707L12 12zm6.707-5.293l-6 6-1.414-1.414 6-6 1.414 1.414zm-7.414 6l-6-6 1.414-1.414 6 6-1.414 1.414z"
        fill={theme.colors.iconColor}
      />
    </Svg>
  );
}

export default ExpandIcon;
