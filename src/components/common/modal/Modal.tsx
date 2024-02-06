import { FC, ReactNode, useEffect } from "react";
import { CloseBtn, ModalBlock, ModalWrap } from "./modal.s";
import { AnimatePresence } from "framer-motion";

interface IModalProps {
  children: ReactNode;
  open: boolean;
  handleClose?: () => void;
}

export const Modal: FC<IModalProps> = ({ children, open, handleClose }) => {
  console.log(open);

  useEffect(() => {
    if (open) {
      document.getElementsByTagName("html")[0].style.overflow = "hidden"; // Scroll-ni yopish
    } else {
      document.getElementsByTagName("html")[0].style.overflow = "auto"; // Scroll-ni qaytarish
    }

    return () => {
      document.getElementsByTagName("html")[0].style.overflow = "auto"; // Component unmount bo'lganda scroll-ni qaytarish
    };
  }, [open]);

  return (
    <div style={{ zIndex: 99 }}>
      <AnimatePresence>
        {open && (
          <ModalWrap
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <ModalBlock
              initial={{
                scale: 0.5,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.5,
              }}
              transition={{ ease: "easeOut", duration: 0.15 }}
            >
              {children}
              <CloseBtn onClick={handleClose}>закрыть</CloseBtn>
            </ModalBlock>
          </ModalWrap>
        )}
      </AnimatePresence>
    </div>
  );
};
