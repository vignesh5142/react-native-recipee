import React, { useState, useEffect } from 'react';
import {
  Button,
  StyleSheet,
  View,
  TextInput,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Text,
  TouchableHighlight,
  Pressable
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Recipe from './src/screens/Recipe'
import Recipee from './src/screens/Recipee'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'



function ItemScreen({ navigation }) {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('vegetables');

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=880b5edc&app_key=b25be74e7b1e8a0ace740080441f5129`);
    const data = await response.json();
    setRecipes(data.hits);

  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }




  const clickNav = () => {
  }
  onPressq = () => navigation.navigate('RecipeDetails', {
    itemId: 86
  })


  const Click = () => {
    clickNav();
    onPressq();
  }



  return (
    <ScrollView>
      <View style={styles.AgreementContainer}>
        <TextInput
          placeholder="Type your Recipe"
          value={this.search}
          onChangeText={newText => setSearch(newText)}
          borderColor="#000000"
          height={50}
          width={220}
        />
        <Pressable style={styles.verifyButton} onPress={getSearch}>
          <Text>search</Text>
        </Pressable>
      </View>
      <View>
        
        <TouchableOpacity onPress={onPressq}>
          <ImageBackground source={require('./b.jpg')}
            style={{
              height: 300,
              width: 411,
              position: 'relative',
              top: 7,
              left: 0
            }} >
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                position: 'absolute',
                bottom: 5,
                left: 10,
                fontSize: 30
              }}
            >
              Chicken
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View >
        {recipes.map(recipe => (
          <Recipe
            onPressq={() => navigation.navigate('Details', {
              itemId: recipe
            })}
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            images={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
          ></Recipe>
        ))}
      </View>
    </ScrollView>
  );
}


function HomeScreen({ navigation }) {

  const [recipes, setRecipes] = useState([]);
  const [inc, setinc] = useState();
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipe();
  }, [query]);
  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=880b5edc&app_key=b25be74e7b1e8a0ace740080441f5129`);
    const data = await response.json();
    setRecipes(data.hits);
    setinc(data.hits.ingredients)
  };



  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }







  onPressq = () => navigation.navigate('RecipeDetails'
  )



  return (
    <ScrollView>
      <View style={styles.AgreementContainer}>
        <TextInput
          placeholder="Type your Recipe"
          value={this.search}
          onChangeText={newText => setSearch(newText)}
          borderColor="#000000"

          height={50}

        />
        <Pressable style={styles.verifyButton} onPress={getSearch}>
          <Text>search</Text>
        </Pressable>


      </View>
      <View >
        {recipes.map(recipe => (
          <Recipe
            onPressq={() => navigation.navigate('Details', {
              itemId: recipe
            })}
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            images={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
            time={recipe.recipe.totalTime}
          ></Recipe>
        ))}
      </View>
    </ScrollView>
  );
}





//************** detail screen************* */



function DetailsScreen({ route }) {


  const { itemId, otherParam } = route.params;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=880b5edc&app_key=b25be74e7b1e8a0ace740080441f5129`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }


  //const { ingredient, label } = route.params;


  return (
    <ScrollView>
      <View >
        <View>

          <Recipee
            key={itemId.recipe.label}
            title={itemId.recipe.label}
            calories={itemId.recipe.calories}
            images={itemId.recipe.image}
            ingredients={itemId.recipe.ingredientLines}
            time={itemId.recipe.totalTime}
          ></Recipee>
        </View>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="RECIPE APP"
          component={ItemScreen}
          options={{ title: 'RECIPE APP' }}
        />
        <Stack.Screen name="RecipeDetails" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  verifyButton: {
    position: 'absolute',
    alignSelf: 'center',
    right: 19,
  },


  AgreementContainer: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#000000",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  HomeScreen: {
    backgroundColor: '#DB3E00',
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  container: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },



});

export default App;