import { Grid, GridItem } from '@chakra-ui/react';

import Preview from '../components/preview';
import VesselForm from '../components/vessel-form';

const Home = () => (
  <Grid h="100%" templateColumns="repeat(2, 1fr)" gap={1}>
    <GridItem bg="white" margin={2} padding={10}><VesselForm /></GridItem>
    <GridItem bg="gray.50" margin={2}><Preview /></GridItem>
  </Grid>
);

export default Home;
