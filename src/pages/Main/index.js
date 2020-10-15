import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Dimensions, ScrollView, } from 'react-native';
import { Icon } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Main({ navigation }) {

  const [nomeViagem, setNomeViagem] = useState('');
  const [dataViagem, setDataViagem] = useState('');

  const [date, setDate] = useState(new Date())

  return (

    <ScrollView contentContainerStyle={styles.contentContainer}>

      <View style={styles.caixaViagem}>

        <View style={styles.containerDetalhesViagem}>
          <TextInput style={styles.inputTextNomeViagem} maxLength={33}
            onChangeText={nomeViagem => setNomeViagem(nomeViagem)}
          ></TextInput>
          <TextInput style={styles.inputDataInicioViagem} maxLength={10}
            onChangeText={dataViagem => setDataViagem(dataViagem)}></TextInput>
        </View>

        <Icon containerStyle={styles.iconEntrar}
          reverse
          reverseColor='black'
          name='arrow-right'
          type='feather'
          color='white'
          onPress={() => navigation.navigate('Dias da Viagem', { nomeViagem: nomeViagem, dataViagem: dataViagem })}
        />

      </View>

      <Icon containerStyle={styles.iconAdd}
        reverse
        reverseColor='black'
        name='plus'
        type='feather'
        color='white'
        onPress={() => navigation.navigate('Dias da Viagem', { nomeViagem: nomeViagem, dataViagem: dataViagem })}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  caixaViagem: {
    color: 'white',
    backgroundColor: 'black',
    width: windowWidth - 30,
    height: 129,
    borderRadius: 15,
    margin: 20,
    marginTop: 30,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },

  containerDetalhesViagem: {
    flex: 1,
    flexDirection: "column",
  },

  inputTextNomeViagem: {
    width: '70%',
    backgroundColor: 'white',
    marginLeft: 15,
    marginTop: 20,
    paddingLeft: 5,
    paddingRight: 5
  },

  inputDataInicioViagem: {
    width: '25%',
    backgroundColor: 'white',
    marginLeft: 15,
    marginTop: 20,
    paddingLeft: 5,
    paddingRight: 5
  },

  iconEntrar: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    marginRight: 10,
  },

  iconAdd: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "flex-end",
    alignItems: "center",
    marginRight: 10,
    marginTop: windowHeight - 300
  }

});