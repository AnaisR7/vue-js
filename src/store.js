import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        addMovie: {},
        edit: undefined,
        show: undefined,
        cpt: 0,
        movies: [
            {
              title: "L'étrange noël de M. Jack",
              year: 1994,
              langue: "fr",
              realisateur: "wam",
              genre: "Animés"
            },
            {
              title: "Interstellar",
              year: 2014,
              langue: "fr",
              realisateur: "wam",
              genre: "Fiction"
            }
        ],
    },
    mutations: {
        newMovie:state => {
            state.movies.push(state.addMovie);
            state.addMovie = {};
        },
        deleteMovie:state => {
            state.movies.splice(state.cpt, 1);
        },
    }
});
