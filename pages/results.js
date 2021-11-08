import {
  Grid,
  GridItem,
  Stack,
  Heading,
  Button,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import PdfPreview from '../components/PdfPreview';
import TextField from '../components/TextField';
import { useLocalStorage, defaultVesselData } from '../utils';

const ResultsEditor = ({ setVesselData }) => (
  <Stack spacing={5} align="start">
    <Heading size="lg">Additional Notes</Heading>
    <Formik initialValues={{ suggestions: defaultVesselData.notes.suggestions }}>
      {({ values }) => (
        <Form style={{ width: '100%' }}>
          <Stack spacing={5}>
            <TextField name="headLineNotes" label="Notes for Head Line Angle" showUnit={false} type="textarea" />
            <TextField name="sternLineNotes" label="Notes for Stern Line Angle" showUnit={false} type="textarea" />
            <TextField name="suggestions" label="Additional Suggestions" showUnit={false} type="textarea" />
            <Button
              colorScheme="teal"
              type="submit"
              onClick={() => setVesselData((data) => ({ ...data, notes: values }))}
            >
              Preview
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  </Stack>
);

const ResultsPage = () => {
  const [vesselData, setVesselData] = useLocalStorage('vesselData', defaultVesselData);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={1}>
      <GridItem overflowY="scroll" maxH="100%" bg="white" margin={2} padding={5}><ResultsEditor setVesselData={setVesselData} /></GridItem>
      <GridItem bg="gray.50" margin={2} colStart={2} colEnd={4}><PdfPreview {...vesselData} /></GridItem>
    </Grid>
  );
};

export default ResultsPage;
