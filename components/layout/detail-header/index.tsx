import ButtonIcon from '@components/button-icon';
import { IDetailHeader } from '@components/layout/detail-header/model';
import { DetailHeaderStyled } from '@components/layout/detail-header/styled';
import { Close } from '@mui/icons-material';

const DetailHeader = ({title, onClick, action='back'}: IDetailHeader) => {
  return (
    <DetailHeaderStyled onClick={onClick}>
      {action === 'close' && <Close />}
      {action === 'back' && <ButtonIcon name={action} />}
      <strong>{title}</strong>
    </DetailHeaderStyled>
  );
}

export default DetailHeader;
