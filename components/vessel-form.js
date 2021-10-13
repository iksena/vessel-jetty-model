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
import { validateVesselForm, vesselFormFields } from '../utils';

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

const AlertError = ({ message }) => (
  <Alert status="error">
    <AlertIcon />
    {message}
  </Alert>
);

const VesselForm = () => (
  <Stack spacing={5} align="start">
    <Image src={logo} alt="logo" />
    <Heading size="lg">Vessel Data</Heading>
    <Formik initialValues={{}} validate={memoize(validateVesselForm)}>
      {({ isValid }) => (
        <Form>
          <Stack spacing={5} align="flex-end">
            <Grid templateColumns="repeat(2, 1fr)" gap={5}>
              {vesselFormFields.map((fieldProps) => (
                <TextField {...fieldProps} key={fieldProps.name} />
              ))}
            </Grid>
            <Button
              colorScheme="teal"
              type="submit"
            >
              Validate
            </Button>
            {!isValid && <AlertError message="All fields are required!" />}
          </Stack>
        </Form>
      )}
    </Formik>
  </Stack>
);

export default VesselForm;
