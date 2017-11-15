let timer = 0;
function clock() {
	let dom = `${new Date().toLocaleTimeString()}`;
	ReactDOM.render(dom, document.getElementById('clock'));

	timer = setTimeout(function(){
					clock();
				},1000);
}

function stop(){
	clearTimeout(timer);
	console.log('x');
}


let _root = document.getElementById('root');
let dom = <div>
			<div id='clock'></div>
				<input type='button' onClick={clock} value='Start Clock' />
				<input type='button' onClick={stop} value='Stop Clock' />
			</div>;

ReactDOM.render(dom,_root);