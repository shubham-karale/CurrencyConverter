import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native'
import React from 'react'

import type { PropsWithChildren } from 'react'

type CurrencyComponentProps = PropsWithChildren<{
    name : string,
    flag : string,
}>



function CurrencyComponent(props: CurrencyComponentProps):JSX.Element {
  return (
    <View style = {styles.currencyContainer}>
    <Text style = {styles.flag}    >{props.flag}</Text>
    <Text style = {styles.name}    >{props.name}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    currencyContainer : {
       
        alignItems : 'center',
        
    },
    flag : {
        fontSize : 26,
        marginBottom : 4,
        color : 'white',
    },
    name : {
        fontSize : 14,
        color : 'black',
        marginBottom : 4,
        fontFamily : 'Roboto',
       
    }
})


export default CurrencyComponent;