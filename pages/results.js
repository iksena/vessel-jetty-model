import {
  Grid,
  GridItem,
  Stack,
  Heading,
  Button,
  HStack,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';

import PdfPreview from '../components/PdfPreview';
import TextField from '../components/TextField';
import { useLocalStorage, defaultVesselData } from '../utils';
import logo from '../public/pertamina-logo.png';

const ResultsEditor = ({ setVesselData }) => (
  <Stack spacing={5} align="start">
    <Image src={logo} alt="logo" />
    <Heading size="lg">Additional Notes</Heading>
    <Formik initialValues={{ suggestions: defaultVesselData.notes.suggestions }}>
      {({ values }) => (
        <Form style={{ width: '100%' }}>
          <Stack spacing={5}>
            <TextField name="headLineNotes" label="Notes for Head Line Angle" showUnit={false} type="textarea" />
            <TextField name="sternLineNotes" label="Notes for Stern Line Angle" showUnit={false} type="textarea" />
            <TextField name="suggestions" label="Additional Suggestions" showUnit={false} type="textarea" />
            <HStack alignItems="flex-end" justifyContent="space-between">
              <Button><Link href="/" replace>Reset</Link></Button>
              <Button
                colorScheme="teal"
                type="submit"
                onClick={() => setVesselData((data) => ({ ...data, notes: values }))}
              >
                Preview
              </Button>
            </HStack>
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
