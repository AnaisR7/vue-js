<template>
	<div>
		<router-link to="/">Home</router-link>
		<div class="col-md-12">
			<p>{{movies.title}} - {{movies.year}} - {{movies.realisateur}} - {{movies.langue}} - {{movies.genre}}</p><br>
			<form>
				<div class="row" style="margin-top: 15px; margin-bottom: 15px">
					<div class="col-md-3" >
						<label>Titre : </label> 
					</div>
					<div class="col-md-6">
						<input type="text" ref="title" :value="movies.title" /><br />
					</div>
				</div>
				<div class="row" style="margin-top: 15px; margin-bottom: 15px">
					<div class="col-md-3" >
						<label>Année : </label> 
					</div>
					<div class="col-md-6">
						<input type="text" ref="year" :value="movies.year" /><br />
					</div>
				</div>
				<div class="row" style="margin-top: 15px; margin-bottom: 15px">
					<div class="col-md-3" >
						<label>Langue : </label> 
					</div>
					<div class="col-md-6">
						<input type="text" ref="langue" :value="movies.langue"><br />
					</div>
				</div>
				<div class="row" style="margin-top: 15px; margin-bottom: 15px">
					<div class="col-md-3" >
						<label>Réalisateur : </label> 
					</div>
					<div class="col-md-6">
						<input type="text" ref="realisateur" :value="movies.realisateur" /><br />
					</div>
				</div>
				<div class="row" style="margin-top: 15px; margin-bottom: 15px">
					<div class="col-md-3" >
						<label>Genre : </label> 
					</div>
					<div class="col-md-6">
						<input type="text" ref="genre" :value="movies.genre" /><br />
					</div>
				</div>
			    <div class="row" style="margin-top: 15px; margin-bottom: 15px">
			    	<div class="col-md-4">
						<input type="submit" v-on:click="save" value="Editer" class="btn btn-success">
			    	</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>

import {store} from '../store.js'

export default {
  	name: 'EditItem',
  	data () {
		return {
	  		movies : {
				title: "L'étrange noël de M. Jack",
				year: 1994,
				realisateur : "wam",
				langue: "fr",
				genre: "Animés"
			}
		}
  	},
  	methods: {
		save(){
			this.movies.title = this.$refs['title'].value;
			this.movies.year = this.$refs['year'].value;
			this.movies.realisateur = this.$refs['realisateur'].value;
			this.movies.langue = this.$refs['langue'].value;
			this.movies.genre = this.$refs['genre'].value;
		}
	}
}
</script>

<style>

</style>