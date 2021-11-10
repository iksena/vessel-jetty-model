import { useState } from 'react';
import {
  Button,
  Stack,
  Grid,
  Heading,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/router';
import memoize from 'fast-memoize';

import logo from '../public/pertamina-logo.png';
import {
  validateVesselForm,
  vesselFormFields,
  defaultVesselData,
} from '../utils';
import ResultsTable from './ResultsTable';
import TextField from './TextField';

const FormAlert = ({ message, status = 'error' }) => (
  <Alert status={status}>
    <AlertIcon />
    {message}
  </Alert>
);

const VesselForm = ({ onSubmit }) => {
  const router = useRouter();
  const [isVesselAccepted, setAccepted] = useState();

  return (
    <Stack spacing={5} align="start">
      <Image src={logo} alt="logo" />
      <Heading size="lg">Vessel Data</Heading>
      <Formik initialValues={defaultVesselData} validate={memoize(validateVesselForm)}>
        {({
          isValid, values, setErrors, validateField, validateForm, errors,
        }) => (
          <Form>
            <Stack spacing={5} align="flex-end">
              <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                {vesselFormFields.map((fieldProps) => (
                  <TextField {...fieldProps} key={fieldProps.name} />
                ))}
              </Grid>
              {!isValid && <FormAlert message="All fields are required!" />}
              <Button
                colorScheme="teal"
                onClick={() => {
                  validateForm();
                  onSubmit({
                    ...values, image: '', shouldSnapshot: true, errors,
                  });
                }}
              >
                Preview
              </Button>
              <Heading size="md" alignSelf="flex-start">Results</Heading>
              <ResultsTable
                {...values}
                setAccepted={setAccepted}
                setErrors={setErrors}
                validateField={validateField}
              />
              <FormAlert
                status={isVesselAccepted ? 'success' : 'error'}
                message={`Vessel is${isVesselAccepted ? '' : ' not'} accepted!`}
              />
              <Button
                colorScheme="teal"
                onClick={() => router.push('/results')}
              >
                Print Results
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default VesselForm;
