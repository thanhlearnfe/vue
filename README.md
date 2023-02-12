# Ban-hang

This template should help get you started developing with Vue 3 in Vite.

### Use with

- **Vuex**
- **Elenment UI**
- **Axios**
- **Router**
- **Json Server**
## Project Setup
```sh
npm create vue@3
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Element UI

```sh
npm install element-plus --save
```
```sh
// main.ts
import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')   
```

## Project Setup
```sh
npm install --save axios vue-axios
```
```sh
import axios from "axios";
import VueAxios from "vue-axios";

app.use(VueAxios, axios);
```

## Vuex
```sh
npm install vuex@next --save
```
```sh
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
const app = createApp({ /* your root component */ })
app.use(store)
```

### Compile and Minify for Production

```sh
npm run build
```

### Json Server

```sh
npm install -g json-server
json-server --watch db.json
```


