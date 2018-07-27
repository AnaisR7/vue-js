<template>
	<div>
		<div class="row">
			<div class="col-md-12">
				<h4>Ajouter un film</h4>
			</div>
		</div>
		<div class="col-md-12">
			<form>
				<div class="row margin" >
					<div class="col-md-3" >
						<label>Titre : </label> 
					</div>
					<div class="col-md-6">
						<input type="text" v-model="addMovie.title" /><br />
					</div>
				</div>
				<div class="row margin" >
					<div class="col-md-3" >
						<label>Année : </label> 
					</div>
					<div class="col-md-6">
						<input type="text" v-model="addMovie.year" /><br />
					</div>
				</div>
				<div class="row margin">
					<div class="col-md-3" >
						<label>Langue : </label> 
					</div>
					<div class="col-md-6">
						<input type="text" v-model="addMovie.langue"><br />
					</div>
				</div>
				<div class="row margin">
					<div class="col-md-3" >
						<label>Réalisateur : </label> 
					</div>
					<div class="col-md-6">
						<input type="text" v-model="addMovie.realisateur" /><br />
					</div>
				</div>
				<div class="row margin">
					<div class="col-md-3" >
						<label>Genre : </label> 
					</div>
					<div class="col-md-6">
						<input type="text" v-model="addMovie.genre" /><br />
					</div>
				</div>
			    <div class="row margin">
			    	<div class="col-md-4">
			    		<router-link to="/"><button v-on:click="newMovie">Ajouter</button></router-link>
			    	</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>

import {store} from '../store.js'

export default {
  data(){
    return {
      store: store
    }
  },
  computed: {
    movies(){
      return this.$store.state.movies
    },
    movie_to_add(){
      return this.$store.state.addMovie
    }
  },
  methods: {
    newMovie:function () {
        this.$store.commit('newMovie');
    }
  }
}

</script>

<style>
.margin{
	margin-top: 15px; 
	margin-bottom: 15px;
}

</style>
