export const jettyData = {
  vesselLength: {
    min: 160,
    max: 230,
  },
  dwt: {
    min: 25000,
    max: 60000,
  },
  maxDraught: 13.8,
  minPBL: 90,
  safeload: {
    min: 2.5,
    max: 6.75,
  },
};

export const vesselFormFields = [
  {
    name: 'vesselLength',
    label: 'Length of Vessel',
    placeholder: 'LOA 160-230m',
    unit: 'm',
  },
  {
    name: 'vesselBreadth',
    label: 'Breadth of Vessel',
    placeholder: 'Breadth of Vessel',
    unit: 'm',
  },
  {
    name: 'bowToCenter',
    label: 'Bow To Center Manifold',
    placeholder: 'Length from Bow to Center Manifold',
    unit: 'm',
  },
  {
    name: 'sternToCenter',
    label: 'Stern To Center Manifold',
    placeholder: 'Length from Stern to Center Manifold',
    unit: 'm',
  },
  {
    name: 'draught',
    label: 'Draught',
    placeholder: 'Length of Vessel Draught',
    unit: 'mLWS',
  },
  {
    name: 'dwt',
    label: 'DWT',
    placeholder: 'Dead Weight Tonnage 25000-60000T',
    unit: 'T',
  },
  {
    name: 'minSafeload',
    label: 'Min. L to L Safeload',
    placeholder: 'Minimum L to L Safeload',
    unit: 'm',
  },
  {
    name: 'maxSafeload',
    label: 'Max. L to L Safeload',
    placeholder: 'Maximum L to L Safeload',
    unit: 'm',
  },
  {
    name: 'pbl',
    label: 'PBL',
    placeholder: 'Parallel Body Length',
    unit: 'm',
  },
];
