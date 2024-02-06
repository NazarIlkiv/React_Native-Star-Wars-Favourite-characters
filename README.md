# Star Wars Favourites characters app

## Description

This React Native app shows all of the Star Wars characters and allows to add them to favourites, calculates favourites characters based on their gender. Also, you can see information about characters.

### Tech Stack

**Teck Stack: React Native cli(not expo)**

Also in this project we use: react native navigation(stack), prop-types, font-awesome(react-native-svg).

### Functionality

<ul>
  <li>Performing an API request to retrieve information from the server</li>
  <li>By clicking on any element of this list - extra information displayed on the dedicated screen</li>
  <li>By clicking on the “Add to favourites” link/icon against any character - recalculate the total votes and indicate the selected element as the liked one</li>
  <li>Display total amounts of male/female/other characters based on the user's selection</li>
  <li>The “Reset” button should flush all previously added to the favourites list personages and make all total values equal to zero</li>
</ul>

### Short description about "How it works?"

<ul>
  <li>We receive data from API in api.js component, also in this component we have function which fetch more data if we need.(list of characters and homeWorld of characters)</li>
  <li>In CharactertsContext component - we create Context for our app. Receive data with function getCharacters(), save data in characters(array) and pass them into context provider.</li>
  <li>Wrap the app in Context Provider, set up navigation in App.jxs component</li>
  <li>In HomeScreen receive array characters with CharactersContext and display it into FlatList. Realize function calculate favourite characters(male/female/other) and clear likes.</li>
</ul>

### UI View

<img src="./assets/StarWarsApp_presentation.gif" width="350" height="600">
