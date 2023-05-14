

import { useStyleConfig, chakra, forwardRef, Flex, Icon, Link } from '@chakra-ui/react';
import { CustomCardProps } from 'theme/theme';
import { Box, Text } from '@chakra-ui/react';
import ProposalImage from '/public/img/dashboards/proposal-card-image2.png';
import { FaComment } from 'react-icons/fa';
import Image from 'next/image';
import ProposalImageIcon from '/public/img/dashboards/proposal-image-icon.svg';

const CustomCard = forwardRef<CustomCardProps, 'div'>((props, ref) => {
	const { size, variant, ...rest } = props;
	const styles = useStyleConfig('Card', { size, variant });
  
	return <chakra.div ref={ref} __css={{ ...styles, boxShadow: '2xl' }} {...rest} />;
  });
  
  interface ProposalCardProps {
	title: string;
	boxShadow?: string;
	mb?: string;
	id: number;
	onClick?: () => void;
  }
  
  const ProposalCard: React.FC<ProposalCardProps> = ({ title, boxShadow, mb, id, onClick }) => {
	return (
	  <CustomCard
		as="button"
		onClick={onClick}
		boxShadow={boxShadow}
		mb={mb}
		bg="#252B3B"
		paddingLeft="0"
		paddingTop="0"
		paddingBottom="0"
		paddingRight="0"
	  >
		<Flex alignItems="flex-start" width="100%" overflow="hidden">
		  <Box width="40%" position="relative" overflow="hidden">
			<Image
			  layout="responsive"
			  width="100%"
			  height="100%"
			  objectFit="cover"
			  src={ProposalImageIcon}
			  alt="Proposal Image"
			  
			/>
		  </Box>
		  <Box width="60%" p="4" textAlign="left">
			<Text fontSize="smaller" color="darkgrey">Proposal</Text>
			<Text fontSize="medium" fontWeight="semibold" color={'white'}>
			  {title}
			</Text>
			<Text fontSize="sm" color="white">Responses: 155 </Text>
			<Icon as={FaComment} color="white" />
		  </Box>
		</Flex>
	  </CustomCard>
	);
  };
  
  export default ProposalCard;