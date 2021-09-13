import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from './StatusBar';


const App = () => (
  <SafeAreaView style={styles.container}>
    <AreaPdf />
    <View >
      <View>
        <View style={styles.fixToText}>
          <Button
            title="anterior"
            color='black'
            borderRadius='10'
            padding='10px'
            onPress={() => Alert.alert('anterior')}
          />

          <Button style={styles.fixToText2}
            title="1"
            color='black'
            borderRadius='10'
            justifyContent='center'

            onPress={() => Alert.alert('Proximo')}
          />


          <Button
            title="Proximo"
            color='black'
            borderRadius='10'
            padding='10px'
            onPress={() => Alert.alert('Proximo')}
          />
        </View>
      </View>
    </View>
  </SafeAreaView>
);

const AreaPdf = () => {
  return (
    <View style={styles.container}>

      <PDF />
    </View>

  );
}

const PDF = () => {


  return <View>
    <iframe src="http://www.funarte.gov.br/wp-content/uploads/2018/03/Partituras-Brasileiras-Online-%E2%80%93-Mu%CC%81sica-Popular-%E2%80%93-Vol-3.pdf  "

      flex="1"
      width="382"
      height="600"
      borderRadius="5"
      position="absolute"
      justifyContent="center"
      border="2,2"
      shadowOffset="0"
      borderBottomColor="black"
      flexWrap="wrap"
    >

    </iframe>






  </View>
}

const Separator = () => (
  <View style={styles.separator} />
);








//estilo 

const styles = StyleSheet.create({
  App: {
    backgroundColor: "black",
  },
  container: {
    flex: '1',
    height: "100",
    padding: 12,
    justifyContent: "center",
    borderRadius: '10',
    flexWrap: "wrap",
    position: "auto",


  },

  containe2: {
    borderBottomColor: '#ccc2bd',


  },

  fixToText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },

  fixToText2: {

    flexDirection: 'row',
    justifyContent: 'center',
    padding: 40,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#ccc2bd',

  },




});

export default App;
