import {useRef} from 'react';
import {Animated} from 'react-native';

function useAnimatedRef() {
  const pan = useRef(new Animated.ValueXY()).current;

  return pan;
}

export default useAnimatedRef;
