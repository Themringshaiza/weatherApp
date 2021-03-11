import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Text, View, StyleSheet, Image, Button, ScrollView, SafeAreaView, } from 'react-native'

import { useDispatch } from 'react-redux'
import { setWeather, fetchWeather } from '../../Redux/actions'
import { useSelector } from 'react-redux'

export default WeatherReportScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [zipcode, setZipCode] = useState('')
    const Weather = useSelector((state) => state.weatherReducer.weathersData)
    const WeatherList = Weather && Weather.list
    const WeatherToday = Weather && Weather.list[0]
    console.log("today",WeatherToday)
    const cityName = Weather && Weather.city && Weather.city.name
    const goHome = (zipcode) => {
        navigation.navigate('Dashboard');
    }

    return (
        WeatherList.length > 0 ?
            <ScrollView>
                <View style={styles.container}>
                <Text style={styles.text}>
                        Todays Weather {WeatherToday.main.temp}*C
                    </Text>
                <Image source={(WeatherToday.weather[0].main === 'clear' || WeatherToday.clouds.all === 0) ? require('../../images/Sunny.gif') :
                                    (WeatherToday.weather[0].main === 'clear' || WeatherToday.clouds.all > 0) ? require('../../images/cloudSunny.gif') :
                                        require('../../images/lightning.gif')} />
                    <Text style={styles.text}>
                        {cityName}
                    </Text>
                </View>
                <View style={styles.container}>
                    <FlatList
                        data={WeatherList}
                        // keyExtractor={({ item }) => item.main.temp}
                        renderItem={({ item, index }) =>
                            <Text style={{
                                padding: 10,
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: 'white',
                                backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                            }}>
                                {`${item.main.temp}*C--`}<View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}><Image source={(item.weather[0].main === 'clear' || item.clouds.all === 0) ? require('../../images/Sunny.gif') :
                                    (item.weather[0].main === 'clear' || item.clouds.all > 0) ? require('../../images/cloudSunny.gif') :
                                        require('../../images/lightning.gif')} /></View>{`--Min${item.main.temp_min}*C--Max${item.main.temp_max}*C`}
                            </Text>
                        }

                    />
                </View>
                <View>
                    <Button title='Home' onPress={goHome} />
                </View>
            </ScrollView> : <View style={styles.container}>
                <Image style={styles.imageStyle} source={require('../../images/Sunny.gif')} />
                <Button title='Home' onPress={goHome} />
            </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0ebbf0',
    },
    imageStyle: {
        height: 180, width: 200,
        resizeMode: 'contain',
        marginBottom: 50,
    },
    text: {
        color: 'white',
        fontSize: 25, flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0ebbf0',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
        marginTop: 10,
        marginBottom: 50,
    },
});