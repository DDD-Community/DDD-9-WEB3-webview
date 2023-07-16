import { snackBarStyled } from '@components/toast/styled';
import useToastAction from '@hooks/use-toast';
import Snackbar from '@mui/material/Snackbar';

const Toast = () => {
  const {isOpen, onClose, message, autoHideDuration, anchorOrigin} = useToastAction()
  return (
    <Snackbar anchorOrigin={anchorOrigin}
              open={isOpen}
              onClose={onClose}
              message={message}
              autoHideDuration={autoHideDuration}
              key={JSON.stringify(anchorOrigin)}
              sx={snackBarStyled}/>
  )
}

export default Toast;
