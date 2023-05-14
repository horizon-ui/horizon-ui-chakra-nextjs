import { Box, SimpleGrid, Stack, HStack, Button } from '@chakra-ui/react';
import AdminLayout from 'layouts/admin';
import UserProfileCard from 'components/card/UserProfileCard';
import RecentProposals from 'views/admin/profile/components/RecentProposals';
import Avatar1 from 'img/avatars/avatar1.png';
import Card from 'components/card/Card';
import contributorData from 'utils/data/contributor1.json';
import RadarChart from 'components/charts/RadarChart';
import DoughnutChart from 'components/charts/DoughnutChart';
import ProposalCard from 'components/card/ProposalCard';
import HoverCard from 'components/card/HoverCard'
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';

export default function profileOverview() {
  const { skills, values, qualityScore, relevancyScore } = contributorData;

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }} w="100%">
        <UserProfileCard
          avatar={Avatar1}
          name='Lyons800'
          discord={true}
          github={false}
          twitter={true}
          xp={1200}
          size="lg"
          variant="filled"
        />
        <a href="/api/auth/login">Login</a>
        <HStack spacing={10} mt={5} align="start">
          <Card backgroundColor='#25242F' >
            <Stack spacing={10}>
              {/* Three Cards above the Doughnut Charts */}
              <HStack spacing={10}>
                <Card backgroundColor='#4B4066'>
                  {/* Card content */}
                </Card>
                <Card backgroundColor='#92C092'>
                  {/* Card content */}
                </Card>
                <Card backgroundColor='#28375F'>
                  {/* Card content */}
                </Card>
              </HStack>

              {/* Doughnut Charts */}
              <HStack spacing={10}>
                <Card backgroundColor='#252B3B'>
                  <Tooltip label='This is a score that measures the users quality of contributions to proposals' fontSize='md'>
                    <InfoOutlineIcon />
                  </Tooltip>
                  <DoughnutChart score={qualityScore} backgroundColor='#383645' foregroundColor='#A0A4F5' />
                  <Button fontSize='small'> Create PolygonID Credential  </Button>
                </Card>


                <Card backgroundColor='#252B3B' >
                <Tooltip label='This is a score that measures the users relevancy of contributions to proposals' fontSize='md'>
                    <InfoOutlineIcon />
                  </Tooltip>
                  <DoughnutChart score={relevancyScore} backgroundColor='#383645' foregroundColor='#5056D2' zIndex='999' />
                  <Button fontSize='small' overflow='hidden'> Create PolygonID Credential </Button>
                </Card>


                {/* <HoverCard qualityScore={75} onButtonClick={handleButtonClick} /> */}
              </HStack>

              {/* Radar Chart */}
              <Card backgroundColor='#252B3B'>
              <Tooltip label='This is a radar chart that showcases a DAO contributors top skills' fontSize='md'>
                    <InfoOutlineIcon />
                  </Tooltip>
                <RadarChart skills={skills} contributor={values} backgroundColor='#383645' foregroundColor='#FFFFFF' />
              </Card>
            </Stack>
          </Card>
          <Card backgroundColor='#25242F'>
            <RecentProposals username={'Lyons'} />
          </Card>
        </HStack>
      </Box>
    </AdminLayout>
  );
}
