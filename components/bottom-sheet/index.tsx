import BottomSheetContent from '@components/bottom-sheet/bottom-sheet-content';
import BottomSheetHeader from '@components/bottom-sheet/bottom-sheet-header';
import { DRAWER_BLEEDING } from '@components/bottom-sheet/constants';
import { IBottomSheet } from '@components/bottom-sheet/model';
import { DrawBarStyled, Global, PullerStyled } from '@components/bottom-sheet/styled';
import useBottomSheetAction from '@hooks/use-bottom-sheet';
import { SwipeableDrawer } from '@mui/material';
import { useEffect, useRef } from 'react';

const BottomSheet = ({children}: IBottomSheet) => {
  const documentRef = useRef<Document>();
  useEffect(() => {
    documentRef.current = window.document;
  }, [])

  const {isOpen, onClose, toggleDrawer} = useBottomSheetAction();

  const handleOpen = () => {
    toggleDrawer();
  };

  return (
    <>
      <Global />
      <SwipeableDrawer container={documentRef.current?.body}
                       anchor="bottom"
                       open={isOpen}
                       onClose={onClose}
                       onOpen={handleOpen}
                       swipeAreaWidth={DRAWER_BLEEDING}
                       disableSwipeToOpen={false}
                       ModalProps={{ keepMounted: true}}>
        <DrawBarStyled>
          <PullerStyled />
        </DrawBarStyled>
        {children}
      </SwipeableDrawer>
    </>
  );
}


export const CustomBottomSheet = Object.assign(BottomSheet, {
  header: BottomSheetHeader,
  content: BottomSheetContent,
});
