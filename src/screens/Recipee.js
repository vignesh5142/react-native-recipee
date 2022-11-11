import React from "react";
import {
    Text,
    StyleSheet,
    View,
    ImageBackground
} from 'react-native';

const Recipee = ({ title, calories, images, ingredients, navigation, route, inc,time }) => {

    //const { ingredient, label } = route.params;
    let decimal = Math.trunc( calories );
    let arr = [];
    arr = ingredients;
let incre=arr.length-1;
    return (
        <View >
            <View>
                <ImageBackground source={{ uri: images }}
                    style={{
                        height: 200,
                        width: 411,
                        position: 'relative',
                        top: 7,
                        left: 0
                    }}>
                    
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: 'white',
                            position: 'absolute',
                            bottom: 60,
                            left: 10,
                            fontSize: 30
                        }}
                    >
                        {title}
                    </Text>
                    <View style={styles.ridesFriends}>
                        <Text style={styles.numbers}>{decimal} calories</Text>
                        <View style={styles.verticleLine}></View>
                        <Text style={styles.numbers}>{incre} ingredients</Text>
                        <View style={styles.verticleLine}></View>
                        <Text style={styles.numbers}>{time} Time</Text>
                    </View>
                </ImageBackground>
                <View style={styles.container}>
                    <View >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: 'black',
                                bottom: 5,
                                left: 7,
                                fontSize: 30,
                                top: 20
                            }}>Ingredients</Text>
                    </View>
                    <Text style={{ left: 45, top: 33 }}> ──────────────────────────────</Text>
                    <View style={styles.con}>
                        <Text style={styles.cont}>{arr[1]}</Text>
                        <Text style={styles.cont}>{arr[2]}</Text>
                        <Text style={styles.cont}>{arr[3]}</Text>
                        <Text style={styles.cont}>{arr[4]}</Text>
                        <Text style={styles.cont}>{arr[5]}</Text>
                        <Text style={styles.cont}>{arr[6]}</Text>
                        <Text style={styles.cont}>{arr[7]}</Text>
                        <Text style={styles.cont}>{arr[8]}</Text>
                        <Text style={styles.cont}>{arr[9]}</Text>
                        <Text style={styles.cont}>{arr[10]}</Text>
                        <Text style={styles.cont}>{arr[11]}</Text>
                        <Text style={styles.cont}>{arr[12]}</Text>
                        <Text style={styles.cont}>{arr[13]}</Text>
                        <Text style={styles.cont}>{arr[14]}</Text>
                        <Text style={styles.cont}>{arr[15]}</Text>
                        <Text style={styles.cont}>{arr[16]}</Text>
                        <Text style={styles.cont}>{arr[17]}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
    },

    cont: {
        left: 15,
        right: 15,
        marginTop: 25,
        top: 40,
        fontSize: 20,
        fontWeight: 'bold',
    },

    image: {
        flex: 0.3,
        height: 200,
        backgroundColor: "white",
        borderWidth: 5,
    },
    ridesFriends: {
        paddingTop: 140,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20,
    },
    numbers: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: 'white',
    }
});

export default Recipee;