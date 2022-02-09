---
home: true 
heroText: My Awesome Library Project
heroImage: /img/dummy200.jpg
tagline: Open source Vue 3 Library Template!
actions: 
    - text: Get Started
      link: /getstarted
      type: primary
    - text: Library Components
      link: /librarycomponents
      type: primary
---

### Features
- Vuejs 3.0 Based Library Template
- Typescript support
- Using Rollup to create final bundle ( based on shubhadip rollup setup [shubhadip/vue3-component-library](https://github.com/shubhadip/vue3-component-library) )
- Using PostCSS to include CSS Files
- Minified Build
- Includes VuePress for documenting your library

# Library Project Documentaation
This is a guide of how to setup and build your library project
Multiple components can be included in the library.

### Including your components
Each component has a seperated folder add inside the components folder.
Inside each component's folder, its **.vue** file and **.css** files are included. In addition an **index.ts** file
exports the specified component in the final bundle.

Each of there Components are also included as exports in the **index.ts** file located inside the **/components** folder

### Initializing the Project
```javascript
npm run install
```

### Building the library
```javascript
npm run build
```

## Using the library after being built

#### Using the library as a Plugin

At the VueJS Initialization on the main.ts or .js file of the project
add the following.

```javascript
import { TestWorld } from 'vue3-component-library';
    ...
app.use(TestWorld)
```

#### Using seperate components of the library inside you project

When you want to import a specific component from the library into a dedicated place inside your code

```javascript
import { TestWorld } from 'vue3-component-library';
...
components:{
TestWorld
}
```

## Playing with the VuePress Documentation

In order to run the Vuepress development server

```javascript
npm run docs:dev
```


In order to build the final docs

```javascript
npm run docs:build
```

Make sure you have the **vue-cli** installed globally or install it using
```javascript
npm install -g vue-cli
```