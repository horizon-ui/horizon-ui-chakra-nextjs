// components/HoverCard.js
import { Button, useDisclosure, useStyleConfig, chakra } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(chakra.div);

const HoverCard = (props) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig('Card', { size, variant });

  const { isOpen, onToggle } = useDisclosure();

  const buttonVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <MotionBox
      position="relative"
      w="300px"
      h="200px"
      borderRadius="md"
      overflow="hidden"
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
      __css={styles}
      {...rest}
    >
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            as={Button}
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            w="100%"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.1 }}
          >
            Click Me
          </MotionBox>
        )}
      </AnimatePresence>
    </MotionBox>
  );
};

export default HoverCard;