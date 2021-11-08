import { Grid, GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';

import { Preview, VesselForm } from '../components';
import { useLocalStorage, defaultVesselData } from '../utils';

const Home = () => {
  const [vesselData, setVesselData] = useLocalStorage('vesselData', defaultVesselData);

  useEffect(() => setVesselData(defaultVesselData), []);

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={1}>
      <GridItem overflowY="scroll" maxH="100%" bg="white" margin={2} padding={5} colSpan={2}><VesselForm onSubmit={setVesselData} /></GridItem>
      <GridItem bg="gray.50" margin={2} colStart={3} colSpan={4}><Preview {...vesselData} setVesselData={setVesselData} /></GridItem>
    </Grid>
  );
};

export default Home;
