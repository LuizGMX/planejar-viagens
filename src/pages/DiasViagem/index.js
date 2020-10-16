import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';

export default function DiasViagem({ route, navigation }) {



  return (

    <ScrollView contentContainerStyle={styles.contentContainer}>

      <Icon containerStyle={styles.icon}
        reverse
        reverseColor='black'
        name='arrow-left'
        type='feather'
        color='white'
        onPress={() => navigation.navigate('Planejador de Viagem')}
      />

      <View style={styles.containerNomeDaViagem}>

        <Text style={styles.nomeDaViagem}>
          {'Viagem para ' + route.params.nomeViagem}
        </Text>

        <Text style={styles.dataDaViagem}>
          {route.params.dataViagem}
        </Text>

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

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  contentContainer: {
    color: 'white',
  },

  containerNomeDaViagem: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center"
  },
  nomeDaViagem: {
    fontSize: 30,
    fontWeight: "bold"
  },
  dataDaViagem: {
    fontSize: 20,
  },
  icon: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "flex-start",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 15
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