import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
// eslint-disable-next-line import/extensions
} from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js';

import { useLocalStorage } from '../utils';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const ResultsDocument = ({ vesselLength, image, vesselBreadth }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{`Length of Vessel: ${vesselLength} m`}</Text>
        <Text>{`Breadth of Vessel: ${vesselBreadth} m`}</Text>
        <Image source={image} />
        <Text>{`Breadth of Vessel: ${vesselBreadth} m`}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const ResultsPage = () => {
  const [vesselData] = useLocalStorage('vesselData');

  return (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
      <ResultsDocument {...vesselData} />
    </PDFViewer>
  );
};

export default ResultsPage;
