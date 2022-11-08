import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Image,
    ScrollView,
} from 'react-native';

const Recipee = ({ title, calories, images, ingredients, navigation }) => {

    return (
        <View >
            <View>
                <Image source={{ uri: images }}
                    style={styles.image} />
            </View>
            <View >
                <Text style={{ fontSize: 22, color: "#000", justifyContent: 'center', alignItems: 'center' }} >{title}</Text>
                <ScrollView>
                    <Text>{ingredients.map(e => { return e })}</Text>
                </ScrollView>
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
    image: {
        flex: 0.3,
        height: 200,
        backgroundColor: "white",
        borderWidth: 5,
    },
});

export default Recipee;