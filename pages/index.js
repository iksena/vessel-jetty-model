import { Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';

import { Preview, VesselForm } from '../components';

const Home = () => {
  const [vesselData, setVesselData] = useState();

  return (
    <Grid h="100%" templateColumns="repeat(6, 1fr)" gap={1}>
      <GridItem bg="white" margin={2} padding={5} colSpan={2}><VesselForm onSubmit={setVesselData} /></GridItem>
      <GridItem bg="gray.50" margin={2} colStart={3} colSpan={4}><Preview {...vesselData} /></GridItem>
    </Grid>
  );
};

export default Home;
