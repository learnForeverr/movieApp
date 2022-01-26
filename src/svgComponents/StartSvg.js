import * as React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
import {theme} from '../constants/theme';

function StarSvg(props) {
  return (
    <Svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs>
        <LinearGradient
          id="grad"
          x1="0"
          y1="0"
          x2={props.fill > 0 ? props.fill : 0}
          y2="0">
          <Stop offset="1" stopColor={theme.colors.iconColor} stopOpacity="1" />
          <Stop offset="1" stopColor={theme.colors.primary} stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Path
        d="M10.307 7.22c.642-1.6.963-2.401 1.485-2.512a1 1 0 01.416 0c.521.11.843.911 1.485 2.512.365.91.547 1.365.889 1.675.096.087.2.164.31.23.395.239.888.283 1.874.371 1.669.15 2.503.224 2.758.7a1 1 0 01.106.316c.085.533-.529 1.09-1.756 2.207l-.34.31c-.574.522-.86.783-1.026 1.108a2 2 0 00-.198.623c-.052.361.032.74.2 1.497l.06.27c.301 1.358.452 2.037.264 2.37a1 1 0 01-.824.508c-.382.019-.921-.42-2-1.299-.71-.579-1.065-.868-1.459-.981a2 2 0 00-1.102 0c-.394.113-.75.402-1.46.981-1.078.878-1.617 1.318-2 1.3a1 1 0 01-.823-.509c-.188-.333-.037-1.012.264-2.37l.06-.27c.168-.757.252-1.136.2-1.497a2 2 0 00-.198-.623c-.166-.325-.452-.586-1.026-1.108l-.34-.31c-1.227-1.116-1.84-1.674-1.756-2.207a1 1 0 01.106-.316c.255-.476 1.09-.55 2.758-.7.986-.088 1.479-.132 1.873-.37a2 2 0 00.31-.231c.343-.31.525-.765.89-1.675z"
        fill="url(#grad)"
        stroke={theme.colors.textColor}
        strokeWidth={0.5}
      />
    </Svg>
  );
}

export default StarSvg;
