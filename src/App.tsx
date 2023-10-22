import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

// Import the constants
import {currencyByRupee} from './constants';

// Import the components
import CurrencyComponent from '../components/CurrencyComponent';

import Snackbar from 'react-native-snackbar';

const App = ():JSX.Element => {

  const [inputAmount, setInputAmount] = useState('');

  const [selectedCurrency, setSelectedCurrency] = useState('');

  const [resultAmount, setResultAmount] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    // Check the Value is null or Not if it is null then show notifications

    if (!inputAmount) {
      return Snackbar.show({
        text: 'Please enter a valid amount',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    // Convert the value into Parse Value
    const inputAmt = parseFloat(inputAmount);

    // Number should not be null

    if (!isNaN(inputAmt)) {
      const convertedValue = inputAmt * targetValue.value;

      const result = `${inputAmt} INR = ${convertedValue.toFixed(2)} ${
        targetValue.name
      }`;

      setResultAmount(result);

      setSelectedCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Please enter a valid amount',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
  };

  return (
    <>
      <StatusBar/>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
            maxLength={14}
            value={inputAmount}
            clearButtonMode='always' 
            onChangeText={setInputAmount}
            keyboardType='number-pad'
            placeholder='Enter amount in Rupees'
            style = {styles.inputAmountField}
            />
          </View>
          {resultAmount && (
            <Text style={styles.resultTxt} >
              {resultAmount}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
            style={[
              styles.button, 
              selectedCurrency === item.name && styles.selected
            ]}
            onPress={() => buttonPressed(item)}
            >
              <CurrencyComponent {...item} />
            </Pressable>
          )}
          />
        </View>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003049',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: 'white',
    fontStyle: 'italic',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: 'white',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 50,
    width: 320,
    marginTop: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontFamily:'Roboto',
    fontWeight:'600',
    fontSize:19,
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});


export default App;
