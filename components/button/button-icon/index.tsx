import { IButtonIcon, TButtonIconSize } from '@components/button/model';
import { ReactSVG } from 'react-svg';
import styles from './button-icon.module.scss';

const ButtonIcon = ({ name, size }: IButtonIcon) => {
  return <ReactSVG className={styles[size as TButtonIconSize]} src={`./svg/icon-${name}.svg`} />
}

// <ReactSVG
//   afterInjection={(svg) => {
//     console.log(svg)
//   }}
//   beforeInjection={(svg) => {
//     svg.classList.add('svg-class-name')
//     svg.setAttribute('style', 'width: 200px')
//   }}
//   className="wrapper-class-name"
//   desc="Description"
//   evalScripts="always"
//   fallback={() => <span>Error!</span>}
//   httpRequestWithCredentials={true}
//   loading={() => <span>Loading</span>}
//   onClick={() => {
//     console.log('wrapper onClick')
//   }}
//   onError={(error) => {
//     console.error(error)
//   }}
//   renumerateIRIElements={false}
//   src="svg.svg"
//   title="Title"
//   useRequestCache={false}
//   wrapper="span"
// />

export default ButtonIcon;
