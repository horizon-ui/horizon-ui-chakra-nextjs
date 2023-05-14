import React, { useEffect, useState } from 'react';
import CustomCard from 'components/card/Card.tsx'; // Import CustomCard component
import proposalsData from 'utils/data/proposals.json'; // replace with actual path

const ProposalDetails = ({ id }) => {
  const [proposal, setProposal] = useState(null);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id); // Parse the id as an integer
      const foundProposal = proposalsData.find((p) => p.id === parsedId);
      setProposal(foundProposal);
    }
  }, [id]);

  if (!proposal) {
    return <div>Proposal not found</div>;
  }

  return (
    <CustomCard> {/* Wrap the content with CustomCard */}
      <div>
        <h1>{proposal.title}</h1>
        {/* Add more details about the proposal here */}
      </div>
    </CustomCard>
  );
};

export default ProposalDetails;