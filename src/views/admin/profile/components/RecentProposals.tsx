// Chakra imports
import { Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import Card from 'components/card/Card';
import ProposalCard from 'components/card/ProposalCard';
import proposalsData from 'utils/data/proposals.json'; // replace with actual path

interface RecentProposalsProps {
  username: string;
}

export default function RecentProposals(props: RecentProposalsProps) {
  const { username } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';
  const cardShadow = useColorModeValue(
    '0px 18px 40px rgba(112, 144, 176, 0.12)',
    'unset'
  );


  const userProposals = proposalsData;
  
  // Filter proposals for the current user
  // const userProposals = proposalsData.filter(proposal =>
  //   proposal.responders.includes(username)
  // );

  return (
    <Card mb={{ base: '0px', '2xl': '20px' }} bg="#25242F">
      <Text
        color={'white'}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'
      >
        Recent proposals
      </Text>
      <Text color={'white'} fontSize='md' me='26px' mb='40px'>
        Here you can find the most recent proposals you're part of.
      </Text>
      
      {userProposals.map((proposal, index) => (
        <ProposalCard
          key={0}
          title={proposal.title}
          boxShadow={cardShadow}
          mb='20px'
          link='#'
        />
      ))}
    </Card>
  );
}