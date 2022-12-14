export default {
    state() {
        return {
            appName: null
        }
    },
    mutations: {
        setAppName(state, name) {
            state.appName = name;
        }
    },
    actions: {
        setAppName(context, name) {
            context.commit('setAppName', name);
        }
    },
    getters: {
        getAppName(state) {
            return state.appName;
        }
    }
}
