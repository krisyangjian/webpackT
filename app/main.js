// import { name } from './Greeter';
console.log(name)


window.setTimeout(function() {
	import(/* webpackChunkName: "print" */ './print').then(function() {
		console.log("print loaded...............................")
	})
}, 5000)