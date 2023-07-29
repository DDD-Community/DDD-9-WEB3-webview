import { ReactSVG } from 'react-svg';
import styles from './icon.module.scss';
import { IButtonIcon, ButtonIconSize, TButtonIconSize } from './model';

const ButtonIcon = ({ name, size = ButtonIconSize.small, onClick = () => {} }: IButtonIcon) => {

  return <ReactSVG className={styles[size as TButtonIconSize]}
                   src={`/icon/icon-${name}.svg`} onClick={onClick}/>
}

export default ButtonIcon;
