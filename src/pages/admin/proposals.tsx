import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import AdminLayout from 'layouts/admin';
import ProposalCard from 'components/card/ProposalCard';
import ProposalDetails from 'components/ProposalDetails'; // Import ProposalDetails component
import proposalsData from 'utils/data/proposals.json'; // replace with actual path
import Link from 'next/link';

export default function UserReports() {
  const [proposals, setProposals] = useState([]);
  const [selectedProposal, setSelectedProposal] = useState(null);

  useEffect(() => {
    setProposals(proposalsData);
  }, []);

  const onProposalClick = (proposal) => {
    setSelectedProposal(proposal);
  };

  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2, '2xl': 6 }} gap="20px" mb="20px">
          {proposals.map((proposal, index) => (
            <Link href={`/proposals/${proposal.id}`} key={proposal.id} passHref>
              <ProposalCard id={proposal.id} title={proposal.title} />
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}