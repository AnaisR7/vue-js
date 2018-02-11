import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MovieNew from '@/components/Movie-new'
import Liste from '@/components/Movie-list'
import MovieItem from '@/components/Movie-item'
import EditItem from '@/components/Movie-edit'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', name: 'ListMovie', component: Liste },
	    { path: '/movie/new', name: 'MovieNew', component: MovieNew },
	    { path: '/movie/edit', name: 'EditItem', component: EditItem },
	    { path: '/movie', name: 'MovieItem', component: MovieItem },
	]
})
