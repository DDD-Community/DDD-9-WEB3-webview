import useDynamicSvg from '@hooks/use-dynamic-svg';
import { Simulate } from 'react-dom/test-utils';

const DynamicSvg = ({name, onCompleted, onError, ...rest}: any) => {
  const { error, isLoading, SvgIcon} = useDynamicSvg(name, {onCompleted, onError});
  let result: any = null;
  if (error) {
    console.log(1, error)
    result = error.message;
  } else if (isLoading) {
    console.log(2, isLoading)
    result = '...';
  } else if (SvgIcon) {
    result = <SvgIcon {...rest} />
  }

  return result;
}

export default DynamicSvg;
