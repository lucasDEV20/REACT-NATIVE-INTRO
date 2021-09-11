import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => (
  <SafeAreaView style={styles.container}>
    <AreaPdf />
    <View >
      <View>
        <View style={styles.fixToText}>
          <Button
            title="anterior"
            onPress={() => Alert.alert('anterior')}
          />
          <Button
            title="Proximo"
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
      <View style={styles.box} />
      <PDF style={styles.container} />
    </View>

  );
}

const PDF = () => {


  return <View>
    <Button
      style={styles.box}
      title="VER PDF"
      onPress={() => Alert.alert('VER PDF')}

    ></Button>
    <WebView source={{ uri: 'https://drive.google.com/file/d/10V7DiWJqyWN2VxbTonpy7uk2r0zjMX3m/preview' }}
      style={{
        marginTop: 200,
        justifyContent: 'center',
        backgroundColor: 'red',
        height:20 
      }}

    />


  </View>
}




//estilo 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 10,
    padding: 20,
    justifyContent: 'space-around',
    marginHorizontal: 16,

  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 40,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  box: {
    flex: 1,
    backgroundColor: 'gray',
    height: '100',
    borderRadius: '10'

  },

  Button: {
    flex: 1,
    flexDirection: 'column',

  }

});

export default App;