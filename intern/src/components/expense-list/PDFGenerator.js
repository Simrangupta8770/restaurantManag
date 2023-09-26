import React from 'react';
import { PDFDownloadLink,Table, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: { margin: 'auto', flexDirection: 'row' },
  tableCell: {
    margin: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    padding: 3,
    marginTop: 5,
    fontSize: 12,
  },
});

const PDFGenerator = ({ items ,total}) => {
  return (
    <Document>
      {console.log(items)}    
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Customer Orders</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}><Text>Order ---</Text></View>
              <View style={styles.tableCell}><Text>Quantity---</Text></View>
              <View style={styles.tableCell}><Text>Price </Text></View>
            </View>
            {items.order.map((order) => (
              <View style={styles.tableRow} key={order.id}>
                <View style={styles.tableCell}><Text>{order.item} ---</Text></View>
                <View style={styles.tableCell}><Text>{order.quantity}---</Text></View>
                <View style={styles.tableCell}><Text>{order.price}</Text></View>
              </View>
            ))}
          </View>
          <View><Text>TIP AMOUNT : {total-items.tot}</Text></View>
          <View><Text>TOTAL AMOUNT : {total}</Text></View>

        </View>
      </Page>
    </Document>
  );
};

export default PDFGenerator;
