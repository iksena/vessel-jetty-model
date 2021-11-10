import { useEffect } from 'react';
import {
  Table,
  Td,
  Tr,
  Th,
  Thead,
  Tbody,
} from '@chakra-ui/react';

import {
  mda1ToBow,
  mda2ToStern,
  round,
  jettyData,
} from '../utils';

const useFieldsValidation = ({
  setAccepted,
  setErrors,
  validateField,
  isHeadLineValid,
  isSternLineValid,
}) => {
  const { mda1: { minHeadlineDegree }, mda2: { minSternlineDegree } } = jettyData;

  useEffect(() => {
    setAccepted(isHeadLineValid && isSternLineValid);
  }, [isHeadLineValid, isSternLineValid, setAccepted, validateField]);

  useEffect(() => {
    setErrors({
      ...!isHeadLineValid && { bowToCenter: `Head line angle exceeds minimum of ${minHeadlineDegree}º` },
      ...!isSternLineValid && { sternToCenter: `Stern line angle exceeds minimum of ${minSternlineDegree}º` },
    });
    validateField('bowToCenter');
    validateField('sternToCenter');
  }, [isHeadLineValid, isSternLineValid, setErrors, minHeadlineDegree, minSternlineDegree]);
};

const ResultsTable = ({
  bowToCenter,
  sternToCenter,
  vesselBreadth,
  setAccepted,
  setErrors,
  validateField,
  offset = 0,
}) => {
  const { mda1: { minHeadlineDegree }, mda2: { minSternlineDegree } } = jettyData;
  const {
    headLine,
    headLineAngleDeg,
    isValid: isHeadLineValid,
  } = mda1ToBow(bowToCenter, vesselBreadth, offset);
  const {
    sternLine,
    sternLineAngleDeg,
    isValid: isSternLineValid,
  } = mda2ToStern(sternToCenter, vesselBreadth, offset);

  useFieldsValidation({
    setAccepted,
    setErrors,
    validateField,
    isHeadLineValid,
    isSternLineValid,
  });

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
          <Td>Left Side Jetty Line</Td>
          <Td isNumeric>{`${round(headLine)} m`}</Td>
        </Tr>
        <Tr>
          <Td>{`Left Side Jetty Line Angle (min. ${minHeadlineDegree}º)`}</Td>
          <Td isNumeric>{`${round(headLineAngleDeg)}º`}</Td>
        </Tr>
        <Tr>
          <Td>Right Side Jetty Line</Td>
          <Td isNumeric>{`${round(sternLine)} m`}</Td>
        </Tr>
        <Tr>
          <Td>{`Right Side Jetty Line Angle (min. ${minSternlineDegree}º)`}</Td>
          <Td isNumeric>{`${round(sternLineAngleDeg)}º`}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default ResultsTable;
