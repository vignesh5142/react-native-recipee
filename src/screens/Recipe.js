import React, { useState, useEffect } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

const Recipe = ({ title, calories, images, ingredients, navigation, onPressq }) => {


    return (
        <View>
            <View style={styles.top}>
                <View>
                    <TouchableOpacity onPress={onPressq}>
                        <ImageBackground source={{ uri: images }}
                            style={{
                                height: 300,
                                width: 411,
                                position: 'relative',
                                top: 7,
                                left: 0,
                                display: 'flex',
                                background: 'black',
                            }} >
                            <Text
                                style={{

                                    background: 'black',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    position: 'absolute',
                                    bottom: 5,
                                    left: 10,
                                    fontSize: 30

                                }}
                            >
                                {title}
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
        borderRadius: 20,

    },
    top: {
        flex: 0.3,
        borderWidth: 0,
        borderRadius: 20,
        padding: 0,
        margin: 0,

    },
    image: {
        flex: 0.3,
        height: 200,
        backgroundColor: "white",
        borderWidth: 5,

    },
});

export default Recipe;