import { useState } from 'react';
import {
  Input,
  InputGroup,
  InputRightAddon,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Button,
  Stack,
  Grid,
  Heading,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import memoize from 'fast-memoize';

import logo from '../public/pertamina-logo.png';
import {
  validateVesselForm,
  vesselFormFields,
} from '../utils';
import ResultsTable from './ResultsTable';

const TextField = ({
  name, placeholder, label, unit,
}) => (
  <Field name={name}>
    {({ field, form }) => (
      <FormControl isInvalid={form.errors?.[name] && form.touched?.[name]}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <InputGroup size="sm">
          <Input
            {...field}
            id={name}
            placeholder={placeholder}
            type="number"
          />
          <InputRightAddon>{unit}</InputRightAddon>
        </InputGroup>
        <FormErrorMessage>{form.errors?.[name]}</FormErrorMessage>
      </FormControl>
    )}
  </Field>
);

const FormAlert = ({ message, status = 'error' }) => (
  <Alert status={status}>
    <AlertIcon />
    {message}
  </Alert>
);

const VesselForm = ({ onSubmit }) => {
  const [isVesselAccepted, setAccepted] = useState();

  return (
    <Stack spacing={5} align="start">
      <Image src={logo} alt="logo" />
      <Heading size="lg">Vessel Data</Heading>
      <Formik initialValues={{}} validate={memoize(validateVesselForm)}>
        {({
          isValid, values, setErrors, validateField, validateForm,
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
                  onSubmit({ ...values, image: '', shouldSnapshot: true });
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
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default VesselForm;
