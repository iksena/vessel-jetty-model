import { jettyData } from './constants';

export const validateVesselForm = ({
  vesselLength, bowToCenter, vesselBreadth, sternToCenter,
  draught, dwt, minSafeload, maxSafeload, pbl,
}) => ({
  ...(bowToCenter + sternToCenter !== vesselLength) && { vesselLength: 'Bow to Stern must equal to Length ' },
  ...(bowToCenter < 0) && { bowToCenter: 'Bow to Center cannot be negative' },
  ...(sternToCenter < 0) && { sternToCenter: 'Stern to Center cannot be negative' },
  ...(vesselLength < 0) && { vesselLength: 'Length of Vessel cannot be negative' },
  ...(vesselBreadth < 0) && { vesselBreadth: 'Breadth of Vessel cannot be negative' },
  ...(vesselLength < jettyData.vesselLength.min) && { vesselLength: `Length of Vessel must be greater than ${jettyData.vesselLength.min}` },
  ...(vesselLength > jettyData.vesselLength.max) && { vesselLength: `Length of Vessel must be less than ${jettyData.vesselLength.max}` },
  ...(dwt < jettyData.dwt.min) && { dwt: `DWT must be greater than ${jettyData.dwt.min}` },
  ...(dwt > jettyData.dwt.max) && { dwt: `DWT must be less than ${jettyData.dwt.max}` },
  ...(draught > jettyData.maxDraught) && { draught: `Draught must be less than ${jettyData.maxDraught}` },
  ...(pbl < jettyData.minPBL) && { pbl: `PBL must be greater than ${jettyData.minPBL}` },
  ...(minSafeload < jettyData.safeload.min || minSafeload > jettyData.safeload.max) && { minSafeload: `L to L Safeload must be greater than ${jettyData.safeload.min}` },
  ...(maxSafeload > jettyData.safeload.max || maxSafeload < jettyData.safeload.min) && { maxSafeload: `L to L Safeload must be less than ${jettyData.safeload.max}` },
  ...!vesselLength && { vesselLength: 'Length of Vessel is required' },
  ...!vesselBreadth && { vesselBreadth: 'Breadth of Vessel is required' },
  ...!bowToCenter && { bowToCenter: 'Bow to Center is required' },
  ...!sternToCenter && { sternToCenter: 'Stern to Center is required' },
  ...!draught && { draught: 'Draught of vessel is required' },
  ...!dwt && { dwt: 'DWT of vessel is required' },
  ...!minSafeload && { minSafeload: 'Min L to L Safeload is required' },
  ...!maxSafeload && { maxSafeload: 'Max L to L Safeload is required' },
  ...!pbl && { pbl: 'Length of vessel is required' },
});

export default {
  validateVesselForm,
};
