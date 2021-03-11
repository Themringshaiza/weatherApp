import * as React from 'react';
import { connect } from 'react-redux'
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

export default HomeScreen = ({ navigation }) => {
  const Weather = useSelector((state) => state.weathersData)
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../images/cloudSunny.gif')}
        style={styles.tinyLogo}
      />
      {/* <Text>{Weather.length > 0 ? Weather[0].name:'no records found!'}</Text> */}
      <Button
        title="Check Weather report"
        onPress={() => navigation.navigate('Weather Forecast')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0ebbf0'
  },
  tinyLogo: {
    width: 200,
    height: 180,
  },
});