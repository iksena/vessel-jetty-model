export const dolphins = {
  height: 6.5,
  bollardHeight: 2.55,
  mda1Position: [-119, 6.5, 35],
  mda2Position: [136, 6.5, 28.5],
};

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
  mda1: {
    toCenter: {
      x: 136,
      y: 28.5,
    },
    minHeadlineDegree: 15,
  },
  mda2: {
    toCenter: {
      x: 119,
      y: 35,
    },
    minSternlineDegree: 15,
  },
  ansi: {
    max: 150,
  },
  manifoldSize: {
    liquid: 10,
    vapour: 6,
  },
};

export const defaultVesselData = {
  notes: {
    suggestions: 'Kapal harus bersedia maintain kecepatan benturan dengan jetty / berthing speed maksimum 0.13 m/s\nBerthing angle 6 degrees ketika first touch\nSelama pandemi covid menghimbau agar crew tidak pesiar kecuali keadaan darurat',
  },
};

export const vesselFormFields = [
  {
    name: 'vesselLength',
    label: 'LOA',
    placeholder: 'Length of Vessel',
    unit: 'm',
  },
  {
    name: 'vesselBreadth',
    label: 'BOA',
    placeholder: 'Breadth of Vessel',
    unit: 'm',
  },
  {
    name: 'bowToCenter',
    label: 'BCM(Port)/SCM(stbd)',
    placeholder: 'Length from Bow to Center Manifold',
    unit: 'm',
  },
  {
    name: 'sternToCenter',
    label: 'SCM(Port)/BCM(stbd)',
    placeholder: 'Length from Stern to Center Manifold',
    unit: 'm',
  },
  {
    name: 'draught',
    label: 'Draught',
    placeholder: 'Vessel Draught from LWS',
    unit: 'mLWS',
  },
  {
    name: 'dwt',
    label: 'DWT',
    placeholder: 'Dead Weight Tonnage',
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
  {
    name: 'offset',
    label: 'Offset from Center Manfiold',
    placeholder: 'Vessel Position from Center Manifold',
    unit: 'm',
    defaultValue: 0,
  },
  {
    name: 'sizeLiquid',
    label: 'Size of Liquid Manifold',
    placeholder: 'Liquid Manifold Size',
    unit: 'in',
  },
  {
    name: 'sizeVapour',
    label: 'Size of Vapour Manifold',
    placeholder: 'Vapour Manifold Size',
    unit: 'in',
  },
  {
    name: 'ansiLiquid',
    label: 'ANSI of Liquid Manifold',
    placeholder: 'Liquid Manifold ANSI',
    showUnit: false,
  },
  {
    name: 'ansiVapour',
    label: 'ANSI of Vapour Manifold',
    placeholder: 'Vapour Manifold ANSI',
    showUnit: false,
  },
];
