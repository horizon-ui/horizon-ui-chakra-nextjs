import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import AdminLayout from 'layouts/admin';

const ProposalDetails = dynamic(() => import('components/ProposalDetails')); // replace with actual path

const ProposalPage = ({ proposal, id }) => {
    return (
      <AdminLayout id={id}>
        <ProposalDetails proposal={proposal} />
      </AdminLayout>
    );
  };

export default ProposalPage;