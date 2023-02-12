const state = {
	todo: {
		isTodo: false
	}
}

const getters = {
	isTodo: state => state.todo.isTodo
}
const actions = {}

const mutations = {
	TOGGLE_TODO(state) {
		state.todo.isTodo = !state.todo.isTodo
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
