<template>
<div class="row">
	<div class="col-md-12">
		<h1>Bienvenue sur filminum !</h1>
		<h4>Liste des films :</h4>
		<select class="custom-select">
			<option>Titre</option>
			<option>Annee</option>
			<option>realisateur</option>
		</select>
		<ul> 
			<li v-for="(movie, key) in movies" v-bind:key="movie.title" @click="setMovieToDisplay(movie, key)">
                <p>{{ movie.title }} : {{ movie.realisateur }} - {{ movie.year }} - {{ movie.langue }}</p>
            </li><br>
		</ul>
		<router-link to="/movie/new"><button>Ajouter un film</button></router-link>
		<router-link :to="'/movie/new'">Ajouter</router-link>
	</div>
</div>
</template>

<script>
    import {store} from '../store.js'

    export default {
        data() {
            return {
                store: store
            }
        },
        computed: {
            cpt() {
                return this.$store.state.cpt
            },
            movies() {
                return this.$store.state.movies
            },
            show() {
                return this.$store.state.show
            }
        },
        methods: {
            setMovieToDisplay: function (movie, key) {
                this.$store.state.show = movie;
                this.$store.state.cpt = key;
            },
            deleteMovie: function () {
                this.$store.commit('deleteMovie')
            }
        }
    }
    
</script>

<style>

</style>