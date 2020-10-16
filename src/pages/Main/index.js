import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';
import { TextInput, DefaultTheme } from 'react-native-paper';

export default function Main({ navigation }) {

  useEffect(() => {
    _retrieveData()
  }, []);

  // create a function that saves your data asyncronously
  _storeData = async (nomeViagem, dataViagem) => {
    try {
      const items = [['nomeViagem', nomeViagem], ['dataViagem', dataViagem]]
      await AsyncStorage.multiSet(items);
      console.log('gravado -> ' + items)
    } catch (error) {
      console.log(error)
    }
  }

  // fetch the data back asyncronously
  _retrieveData = async () => {
    try {
      const nomeViagemRecuperado = await AsyncStorage.getItem('nomeViagem');
      console.log(JSON.parse(nomeViagemRecuperado))
    } catch (error) {
      // Error retrieving data
    }
  }

  const [nomeViagem, setNomeViagem] = useState('');
  const [dataViagem, setDataViagem] = useState('');

  const [editavel, setEditavel] = useState(true)

  const [butaoEditar, setButaoEditar] = useState(false)

  function proximaPagina() {
    navigation.navigate('Dias da Viagem', { nomeViagem: nomeViagem, dataViagem: dataViagem })
  }

  function nestedFunctions(nomeViagem, dataViagem) {
    _storeData(nomeViagem, dataViagem);
    proximaPagina()
  }

  function handleEditar() {
    setEditavel(!editavel)
    setButaoEditar(!butaoEditar)
  }

  if (butaoEditar == true) {
    iconeButaoEditar = 'edit'
  } else {
    iconeButaoEditar = 'save'
  }

  const theme = {

    roundness: 10,
    colors: {
      primary: '#29C076',
      accent: '#2BAAEB',
    }
  };

  /*********/


  return (

    <ScrollView contentContainerStyle={styles.contentContainer}>

      <View style={styles.caixaViagem}>

        <View style={styles.containerDetalhesViagem}>

          <TextInput style={styles.inputTextNomeViagem} maxLength={33}
            onChangeText={nomeViagem => setNomeViagem(nomeViagem)} editable={editavel}
            mode={"outlined"} selectionColor={"#29C076"} underlineColor={"#29C076"} theme={theme}
          ></TextInput>

          <Icon
            name={iconeButaoEditar}
            type='feather'
            color='white'
            onPress={() => handleEditar()}
          />

        </View>

        <View style={styles.containerDetalhesViagem}>

          <TextInput style={styles.inputDataInicioViagem} maxLength={10}
            onChangeText={dataViagem => setDataViagem(dataViagem)} editable={editavel}
            mode={"outlined"} selectionColor={"#29C076"} underlineColor={"#29C076"} theme={theme}></TextInput>

        </View>

        <Icon containerStyle={styles.iconEntrar}
          reverse
          reverseColor='black'
          name='arrow-right'
          type='feather'
          color='white'
          onPress={() => nestedFunctions(nomeViagem, dataViagem)}
        />

      </View>

      {/* Adicionar novo */}
      <Icon containerStyle={styles.iconAdd}
        reverse
        reverseColor='black'
        name='plus'
        type='feather'
        color='white'
        onPress={() => navigation.navigate('Dias da Viagem', { nomeViagem: nomeViagem, dataViagem: dataViagem })}
      />

    </ScrollView >
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  contentContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#29C076',
    height: windowHeight + 100
  },

  caixaViagem: {
    color: 'white',
    backgroundColor: '#2BAAEB',
    width: windowWidth - 30,
    height: 200,
    borderRadius: 15,
    margin: 20,
    marginTop: 50,
    borderColor: "#000",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },

  containerDetalhesViagem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },

  inputTextNomeViagem: {
    width: '70%',
    height: 35,
    backgroundColor: 'white',
    marginLeft: 15,
    marginTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 30,
  },

  inputDataInicioViagem: {
    width: '50%',
    height: 35,
    backgroundColor: 'white',
    marginLeft: 15,
    marginTop: 35,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 30
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
    marginRight: 500,
    marginTop: windowHeight - 80,
    position: "absolute"
  }
});