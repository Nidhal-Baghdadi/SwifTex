import { Document, Image, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer';
import React, { useEffect, useState } from 'react';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  section: {
    margin: 5,
    padding: 5,
    flexGrow: 1,
  },
});

export default function ReactPdfWrapper({ mmlContent }) {
  const [childNodes, setChildNodes] = useState([]);

  useEffect(() => {
    const container = document.createElement('span');

    container.innerHTML = mmlContent;

    const contents = Array.from(container.firstChild.childNodes)
      .map((node) => {
        if (node.innerHTML) {
          return node.innerHTML;
        }
        return node.data;
      })
      .filter((text) => text.length > 0);
    console.log(contents);
    setChildNodes(contents);
  }, [mmlContent]);

  return (
    <PDFViewer className='w-full flex-1 rounded-lg'>
      <Document>
        <Page size='A4' style={styles.page}>
          {childNodes.map((text, index) => (
            <View key={index} style={styles.section}>
              <Text>{text}</Text>
            </View>
          ))}
        </Page>
      </Document>
    </PDFViewer>
  );
}
