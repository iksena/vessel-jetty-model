import { useState, useEffect } from 'react';
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
  Table,
  Td,
  Tr,
  Th,
  Thead,
  Tbody,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import memoize from 'fast-memoize';

import logo from '../public/pertamina-logo.png';
import {
  validateVesselForm,
  vesselFormFields,
  mda1ToBow,
  mda2ToStern,
  round,
} from '../utils';

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

const ResultsTable = ({
  bowToCenter,
  sternToCenter,
  vesselBreadth,
  setAccepted,
}) => {
  const {
    headLine,
    headLineAngleDeg,
    isValid: isHeadLineValid,
  } = mda1ToBow(bowToCenter, vesselBreadth);
  const {
    sternLine,
    sternLineAngleDeg,
    isValid: isSternLineValid,
  } = mda2ToStern(sternToCenter, vesselBreadth);

  useEffect(() => {
    setAccepted(isHeadLineValid && isSternLineValid);
  }, [isHeadLineValid, isSternLineValid, setAccepted]);

  return (
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          <Th>Property</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Head Line</Td>
          <Td isNumeric>{`${round(headLine)} m`}</Td>
        </Tr>
        <Tr>
          <Td>Head Line Angle</Td>
          <Td isNumeric>{`${round(headLineAngleDeg)}º`}</Td>
        </Tr>
        <Tr>
          <Td>Stern Line</Td>
          <Td isNumeric>{`${round(sternLine)} m`}</Td>
        </Tr>
        <Tr>
          <Td>Stern Line Angle</Td>
          <Td isNumeric>{`${round(sternLineAngleDeg)}º`}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

const FormAlert = ({ message, status = 'error' }) => (
  <Alert status={status}>
    <AlertIcon />
    {message}
  </Alert>
);

const VesselForm = () => {
  const [isVesselAccepted, setAccepted] = useState();

  return (
    <Stack spacing={5} align="start">
      <Image src={logo} alt="logo" />
      <Heading size="lg">Vessel Data</Heading>
      <Formik initialValues={{}} validate={memoize(validateVesselForm)}>
        {({ isValid, values }) => (
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
                type="submit"
              >
                Preview
              </Button>
              <Heading size="md" alignSelf="flex-start">Results</Heading>
              <ResultsTable {...values} setAccepted={setAccepted} />
              <FormAlert
                status={isVesselAccepted ? 'success' : 'error'}
                message={`Vessel is ${isVesselAccepted ? '' : 'not '}accepted!`}
              />
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default VesselForm;
