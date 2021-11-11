import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
  usePDF,
  // eslint-disable-next-line import/extensions
} from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js';
import React, { useEffect, useRef } from 'react';

import { mda1ToBow, mda2ToStern } from '../utils';

const styles = StyleSheet.create({
  column: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    fontSize: 12,
  },
  logo: {
    width: '30%',
    marginBottom: 10,
    marginTop: 24,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: '80%',
    margin: 10,
    alignSelf: 'center',
  },
  header: {
    fontSize: 16,
    marginVertical: 24,
    textAlign: 'center',
  },
  notes: {
    fontSize: 12,
    color: 'red',
  },
});

const ResultsDocument = React.forwardRef(({
  vesselLength, image, vesselBreadth, bowToCenter, sternToCenter, draught, dwt,
  minSafeload, maxSafeload, pbl, offset, headLine, headLineAngleDeg, sternLine, sternLineAngleDeg,
  notes, errors = {}, sizeLiquid, sizeVapour, ansiLiquid, ansiVapour,
}, ref) => (
  <Document ref={ref}>
    <Page size="A4">
      <Image source="./pertamina-logo.png" cache style={styles.logo} />
      <Text style={styles.title}>Vessel Acceptance Results</Text>
      <Text style={styles.header}>Berthing Preview</Text>
      <Image style={styles.image} source={image} cache />
      <View style={styles.column}>
        <View style={styles.section}>
          <Text style={styles.header}>Vessel Data</Text>
          <Text>{`Length of Vessel: ${vesselLength} m`}</Text>
          <Text>{`Breadth of Vessel: ${vesselBreadth} m`}</Text>
          <Text>{`BCM(Port)/SCM(stbd): ${bowToCenter} m`}</Text>
          <Text>{`SCM(Port)/BCM(stbd): ${sternToCenter} m`}</Text>
          <Text>{`Draught of Vessel: ${draught} m`}</Text>
          <Text>{`Dead Weight Tonnage: ${dwt} T`}</Text>
          <Text>{`Minimum L-to-L Safeload: ${minSafeload} m`}</Text>
          <Text>{`Maximum L-to-L Safeload: ${maxSafeload} m`}</Text>
          <Text>{`Parallel Body Length: ${pbl} m`}</Text>
          <Text>{`Offset from Center Manifold: ${offset} m`}</Text>
          <Text>{`Size of Liquid Manifold: ${sizeLiquid} in`}</Text>
          <Text>{`ANSI of Liquid Manifold: ${ansiLiquid}`}</Text>
          <Text>{`Size of Vapour Manifold: ${sizeVapour} in`}</Text>
          <Text>{`ANSI of Vapour Manifold: ${ansiVapour}`}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Results Data</Text>
          <Text>{`Left Side Jetty Line: ${headLine} m`}</Text>
          <Text>{`Left Side Jetty Line Angle: ${headLineAngleDeg}º`}</Text>
          {notes?.headLineNotes && <Text style={styles.notes}>{notes?.headLineNotes}</Text>}
          <Text>{`Right Side Jetty Line: ${sternLine} m`}</Text>
          <Text>{`Right Side Jetty Line Angle: ${sternLineAngleDeg}º`}</Text>
          {notes?.sternLineNotes && <Text style={styles.notes}>{notes?.sternLineNotes}</Text>}
        </View>
      </View>
    </Page>
    <Page size="A4">
      <View style={styles.section}>
        <Text style={styles.header}>Suggestions</Text>
        {notes?.suggestions && <Text style={styles.notes}>{notes?.suggestions}</Text>}
        {errors && <Text>{Object.values(errors).reduce((text, error) => text.concat(error, '\n'), '')}</Text>}
      </View>
    </Page>
  </Document>
));

const PdfPreview = (props) => {
  const document = useRef();
  const [, update] = usePDF(document);
  const {
    bowToCenter, vesselBreadth, sternToCenter, offset,
  } = props;
  const headLineData = mda1ToBow(bowToCenter, vesselBreadth, offset);
  const sternLineData = mda2ToStern(sternToCenter, vesselBreadth, offset);

  useEffect(() => update(), [props.notes]);

  return (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
      <ResultsDocument {...props} {...headLineData} {...sternLineData} ref={document} />
    </PDFViewer>
  );
};

export default PdfPreview;
