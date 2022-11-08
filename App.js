import React, { useState, useEffect } from 'react';
import {
  Button,
  StyleSheet,
  View,
  TextInput,
  Image,
  ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recipe from './Recipe'
import Recipee from './Recipee'



function ItemScreen({ navigation }) {

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

  return (

    <ScrollView>
      <View>
        <TextInput style={styles.input} placeholder="Type your Recipe" value={this.search} onChangeText={newText => setSearch(newText)}></TextInput>
        <View style={[{ width: "90%", margin: 10, backgroundColor: "gold" }]}>
          <Button
            onPress={getSearch}
            title="Search"
            color="#8fbc8f"
          />
        </View>
      </View>
      <View >
        {recipes.map(recipe => (
          <Recipe
            onPressq={() => navigation.navigate('RecipeDetails')}
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

  return (

    <ScrollView>
      <View>
        <TextInput style={styles.input} placeholder="Type your Recipe" value={this.search} onChangeText={newText => setSearch(newText)}></TextInput>
        <View style={[{ width: "90%", margin: 10, backgroundColor: "gold" }]}>
          <Button
            onPress={getSearch}
            title="Search"
            color="#8fbc8f"
          />
        </View>
      </View>
      <View >
        {recipes.map(recipe => (
          <Recipe
            onPressq={() => navigation.navigate('Details')}
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

function DetailsScreen() {

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

  return (
    <ScrollView>
      <View >
        <View>
          {recipes.map(recipe => (
            <Recipee
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              images={recipe.recipe.image}
              ingredients={recipe.recipe.ingredientLines}
            ></Recipee>
          ))}
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