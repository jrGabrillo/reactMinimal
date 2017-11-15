function clock() {
	let dom = `${new Date().toLocaleTimeString()}`;
	ReactDOM.render(dom, document.getElementById('root'));
	setTimeout(function(){
		clock();
	},1000);
}

let _root = document.getElementById('root');
let dom = <input type='button' onClick={clock} value='click me' />;

ReactDOM.render(dom,_root);