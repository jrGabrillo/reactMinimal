let process = {
	menu:function(){
		let content = <ul>
			<li><a href='#' onClick={process.page1}>Menu 1</a></li>
			<li><a href='#' onClick={process.page2}>Menu 2</a></li>
			<li><a href='#' onClick={process.page3}>Menu 3</a></li>
			<li><a href='#' onClick={process.page4}>Menu 4</a></li>
		</ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				this is page 1<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div>
				this is page 2<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div>
				this is page 3<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
	let content = <div>
				this is page 4<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div>
					Loading...
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},5000);