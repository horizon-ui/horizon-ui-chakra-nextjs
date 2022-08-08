import { Box, useStyleConfig } from '@chakra-ui/react';
import { forwardRef, FC } from 'react'; // declaring props types for MDBox

function Card(props: { variant: string; children: JSX.Element; [key: string]: any }) {
	const { variant, children, ...rest } = props;
	const styles = useStyleConfig('Card', { variant });
	return (
		<Box __css={styles} {...rest}>
			{children}
		</Box>
	);
}

export default CardTest;
