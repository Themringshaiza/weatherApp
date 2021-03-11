import * as React from 'react';
import { connect } from 'react-redux'
import { Button, View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { setWeather, fetchWeather } from '../../Redux/actions'


export default WeatherScreen = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    const dataToDispatch = JSON.stringify(data.zipCodeInput)
    const finalData = JSON.parse(dataToDispatch)
    // alert(JSON.parse(dataToDispatch));
    dispatch(fetchWeather(finalData));
     navigation.navigate('Weather report');
  }
  return (
    <View style={styles.main}>
      <Text style={styles.label}>Zip Code</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="zipCodeInput"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.zipCodeInput && <Text>This is required.</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />

      <Button title="Go to Dash" onPress={() => navigation.navigate('Dashboard')} />
      <Button title="Go to weather report" onPress={() => navigation.navigate('Weather report')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0ebbf0',
  },
  input: {
    backgroundColor: '#FFFFFF',
    // borderColor: 'none',
    height: 40,
    width: 350,
    padding: 10,
    borderRadius: 4,
  },
  label: {
    height: 40,
    color: 'white',
    margin: 20,
    marginLeft: 0,
  }
});