import { Field } from 'formik';
import {
  Input,
  InputGroup,
  InputRightAddon,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';

const TextField = ({
  name, placeholder, label, unit, showUnit = true, type,
}) => (
  <Field name={name}>
    {({ field, form }) => (
      <FormControl isInvalid={form.errors?.[name] && form.touched?.[name]}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <InputGroup size="sm">
          {type === 'textarea'
            ? (
              <Textarea
                {...field}
                id={name}
                placeholder={placeholder}
                size="sm"
                resize="vertical"
              />
            )
            : (
              <Input
                {...field}
                id={name}
                placeholder={placeholder}
                type="number"
              />
            )}
          {showUnit && <InputRightAddon>{unit}</InputRightAddon>}
        </InputGroup>
        <FormErrorMessage>{form.errors?.[name]}</FormErrorMessage>
      </FormControl>
    )}
  </Field>
);

export default TextField;
