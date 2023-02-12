import { createStore } from "vuex";

// Import modules
import auth from './modules/auth'
import todos from './modules/todos'

const store = createStore({
	modules: {
		a:auth,
		b:todos
	}
  })
export default store
