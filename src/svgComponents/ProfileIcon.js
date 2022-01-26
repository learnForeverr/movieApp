import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function ProfileIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19.727 20.447c-.455-1.276-1.46-2.403-2.857-3.207C15.473 16.436 13.761 16 12 16c-1.761 0-3.473.436-4.87 1.24-1.397.804-2.402 1.931-2.857 3.207"
        stroke="#CCD2E3"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle
        cx={12}
        cy={8}
        r={4}
        stroke="#CCD2E3"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default ProfileIcon;
