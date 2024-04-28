// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import Information from 'views/admin/profile/components/Information';

// Assets
export default function GeneralInformation(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');
	return (
		<Card mb={{ base: '0px', '2xl': '20px' }} {...rest}>
			<Text color={textColorPrimary} fontWeight='bold' fontSize='2xl' mt='10px' mb='4px'>
				General Information
			</Text>
			<Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'> El Paso Hunger Organization: A Beacon of Hope in the Community </Text> <SimpleGrid columns={2} gap='20px'> <Information boxShadow={cardShadow} title='Mission' value='To alleviate hunger and promote nutrition in El Paso, Texas.' />
			 <Information boxShadow={cardShadow} title='Impact' value='Last year, we provided meals to over 10,000 individuals and families in need.' />
			  <Information boxShadow={cardShadow} title='Programs' value='We offer a variety of programs, including food banks, mobile food pantries, and nutrition education workshops.' />
			   <Information boxShadow={cardShadow} title='Partnerships' value='We collaborate with local schools, churches, and businesses to maximize our reach and impact in the community.' />
				 <Information boxShadow={cardShadow} title='Volunteer Opportunities' value='We welcome individuals and groups to volunteer at our food banks, mobile food pantries, and special events.' /> </SimpleGrid>
		</Card>
	);
}
