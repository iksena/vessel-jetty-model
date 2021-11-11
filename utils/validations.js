import { jettyData } from './constants';

export const validateVesselForm = ({
  vesselLength, bowToCenter, vesselBreadth, sternToCenter, draught, dwt, minSafeload, maxSafeload,
  pbl, sizeLiquid, sizeVapour, ansiLiquid, ansiVapour,
}) => ({
  ...(bowToCenter + sternToCenter !== vesselLength) && { vesselLength: 'Bow to Stern must equal to Length ' },
  ...(bowToCenter < 0) && { bowToCenter: 'Bow to Center cannot be negative' },
  ...(sternToCenter < 0) && { sternToCenter: 'Stern to Center cannot be negative' },
  ...(vesselLength < 0) && { vesselLength: 'Length of Vessel cannot be negative' },
  ...(vesselBreadth < 0) && { vesselBreadth: 'Breadth of Vessel cannot be negative' },
  ...(vesselLength < jettyData.vesselLength.min) && { vesselLength: `LOA must be greater than ${jettyData.vesselLength.min} m` },
  ...(vesselLength > jettyData.vesselLength.max) && { vesselLength: `LOA must be less than ${jettyData.vesselLength.max} m` },
  ...(dwt < jettyData.dwt.min) && { dwt: `DWT must be greater than ${jettyData.dwt.min} T` },
  ...(dwt > jettyData.dwt.max) && { dwt: `DWT must be less than ${jettyData.dwt.max} T` },
  ...(draught > jettyData.maxDraught) && { draught: `Draught must be less than ${jettyData.maxDraught} m` },
  ...(pbl < jettyData.minPBL) && { pbl: `PBL must be greater than ${jettyData.minPBL} m` },
  ...(minSafeload < jettyData.safeload.min || minSafeload > jettyData.safeload.max) && { minSafeload: `L-to-L Safeload must be greater than ${jettyData.safeload.min} m` },
  ...(maxSafeload > jettyData.safeload.max || maxSafeload < jettyData.safeload.min) && { maxSafeload: `L-to-L Safeload must be less than ${jettyData.safeload.max} m` },
  ...ansiLiquid > jettyData.ansi.max && { ansiLiquid: `ANSI Liquid Manifold must be less than ${jettyData.ansi.max}` },
  ...ansiVapour > jettyData.ansi.max && { ansiVapour: `ANSI Vapour Manifold must be less than ${jettyData.ansi.max}` },
  ...sizeLiquid > jettyData.manifoldSize.liquid && { sizeLiquid: `Size Liquid Manifold must be less than ${jettyData.manifoldSize.liquid} in` },
  ...sizeVapour > jettyData.manifoldSize.vapour && { sizeVapour: `Size Vapour Manifold must be less than ${jettyData.manifoldSize.vapour} in` },
  ...!vesselLength && { vesselLength: 'Length of Vessel is required' },
  ...!vesselBreadth && { vesselBreadth: 'Breadth of Vessel is required' },
  ...!bowToCenter && { bowToCenter: 'Bow to Center is required' },
  ...!sternToCenter && { sternToCenter: 'Stern to Center is required' },
  ...!draught && { draught: 'Draught of vessel is required' },
  ...!dwt && { dwt: 'DWT of vessel is required' },
  ...!minSafeload && { minSafeload: 'Min L-to-L Safeload is required' },
  ...!maxSafeload && { maxSafeload: 'Max L-to-L Safeload is required' },
  ...!pbl && { pbl: 'PBL is required' },
  ...!sizeLiquid && { sizeLiquid: 'Size of Liquid Manifold is required' },
  ...!sizeVapour && { sizeVapour: 'Size of Vapour Manifold is required' },
  ...!ansiLiquid && { ansiLiquid: 'ANSI of Liquid Manifold is required' },
  ...!ansiVapour && { ansiVapour: 'ANSI of Vapour Manifold is required' },
});

export default {
  validateVesselForm,
};
