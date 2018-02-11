<template>
    <div>
        <router-link to="/"><button>Accueil</button></router-link>
        <ul>
            <li v-bind:key="show.title">
                <h3>{{ show.title }} ({{ show.realisateur }} - {{ show.year }})</h3>
                <b>Genre : </b>{{ show.genre }} ({{ show.langue }}) <br/><br/>
            </li>
        </ul><br><br>

        
        <button v-on:click="toogle_disp_edit">Toogle edit</button>
        <span v-if="disp_edit">
            <p>Edit film<br/>
                <input type="text" v-model="show.title" placeholder="Titre"/><br/>
                <input type="text" v-model="show.year" placeholder="Année"/><br/>
                <input type="text" v-model="show.realisateur" placeholder="Realisateur"/><br/>
                <input type="text" v-model="show.genre" placeholder="Genre"/><br/>
                <input type="text" v-model="show.langue" placeholder="Langues"/><br/>
            </p>
            <button v-on:click="editMovie">Editer</button>
        </span>
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
          movies() {
              return this.$store.state.movies
          },
          show() {
              return this.$store.state.show
          },
          disp_edit() {
              return this.$store.state.disp_edit
          }
      },
      methods: {
          editMovie: function () {
              this.$store.state.movies.splice(this.$store.state.cpt, 1);
              this.$store.state.movies.push(this.$store.state.show);
          },
          toogle_disp_edit:function () {
              this.$store.state.disp_edit = !this.$store.state.disp_edit;
          }
      }
  }

</script>
