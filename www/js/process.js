let process = {
	menu:function(){
		 // onClick={process.audio('audio_bomb').play()}
		let content = <div>
			<audio id="audio_bomb">
				<source src="audio/bomb.mp3" type="audio/mp3" />
			</audio>
			<ul>
				<li><a href='#' className='imCustomClass' onClick={process.page1}>Menu 1</a></li>
				<li><a href='#' onClick={process.page2}>Menu 2</a></li>
				<li><a href='#' onClick={process.page3}>Menu 3</a></li>
				<li><a href='#' onClick={process.page4}>Menu 4</a></li>
			</ul>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				this is page 1<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page2:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				this is page 2<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page3:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				this is page 3<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page4:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				this is page 4<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	loading:function(){
		let content = <div>
					<div className="progressbar-infinite color-multi"></div>
					<audio id="audio">
						<source src="audio/horse.ogg" type="audio/ogg" />
					</audio>
					<img src='img/image.jpg' width='100px' />
					Loading...
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
},5000);