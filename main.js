var d=document,res,elements;

window.onload=()=>{
	initRes();
	initElements(2);
	elements[0]=d.getElementsByClassName('title')[0];
	elements[1]=d.getElementsByClassName('main_area')[0];

	main();
}

function main(){
	setTextShadow(elements[0],3.7,'#202020');
	setMainArea(0);
}

function initRes(){
	res=[];

	let stack='<span class="logo sub_title">My SNS Web Sites</span><br>';
	stack+='<div class="ribbon"><h3 class="ribbon_sub ribbon_sub_0">Scratch</h3><a target="_blank" href="https://scratch.mit.edu/users/youkaiwatch"><img src="home/img/icons/Scratch.png"></a></div>';
	stack+='<div class="ribbon"><h3 class="ribbon_sub ribbon_sub_1">Twitter</h3><a target="_blank" href="https://twitter.com/YScratcher"><img src="home/img/icons/Twitter.png"></a></div>';
	stack+='<div class="ribbon"><h3 class="ribbon_sub ribbon_sub_2">GitHub</h3><a target="_blank" href="https://github.com/JPNYKW"><img src="home/img/icons/GitHub.png"></a></div>';
	stack+='<span class="logo sub_title">My Profile</span><br>';
	stack+='<span class="text">15 years old boy</span><br>';
	stack+='<span class="text">Live in Tokyo</span><br>';
	stack+='<span class="text">I\'m a student of high school</span><br>';
	stack+='<span class="text">Nice to meet you :D</span><br><br>';
	stack+='<span class="text">(Last edited:2017/11/13)</class>';
	
	res.push(stack);

	stack='<span class="logo sub_title">Making Project</span><br>';
	stack+='<span class="text">(Last edited:2017/11/13)</span><br>';
	stack+='<br><img src="github/img/screenShot/cosmo_ss_0.png" class="ss"><br><br>';
	stack+='<span class="text">This is a screen shot of I making shooting game</span><br>';
	stack+='<span class="text">Game development environment</span><br><br>';
	stack+='<span class="text">Programming language</span><br>';
	stack+='<span class="text">HTML/CSS/JavaScript</span><br>';
	stack+='<br><span class="text">Browser:vivaldi</span><br>';
	stack+='<span class="text">OS:windows7</span><br>';

	res.push(stack);

	stack='<br><span class="logo sub_title">My best projects on Scratch</span><br>';
	stack+='<br><span class="text">This is a simple puzzle game.</span><br>';
	stack+='<span class="text">It\'s a work I made when I was a junior high school student.</span><br><br>';
	stack+='<iframe allowtransparency="true" width="485" height="402" src="https://scratch.mit.edu/projects/embed/148425467/?autostart=false" frameborder="0" allowfullscreen></iframe><br>';
	stack+='<br><span class="text">This is a puzzle and action game.</span><br>';
	stack+='<span class="text">So difficult to get high score.</span><br>';
	stack+='<span class="text">Can you do it?</span><br><br>';
	stack+='<iframe allowtransparency="true" width="485" height="402" src="https://scratch.mit.edu/projects/embed/171720441/?autostart=false" frameborder="0" allowfullscreen></iframe><br>';
	stack+='<br><span class="text">(Last edited:2017/11/13)</class>'

	res.push(stack);
}

function initElements(e){
	elements=new Array(e);
}

function setTextShadow(e,rad,color){
	e.style.textShadow=`
		${0}px ${rad}px 0px ${color},
		${rad}px ${rad}px 0px ${color},
		${rad}px ${0}px 0px ${color},
		${rad}px ${-rad}px 0px ${color},
		${0}px ${-rad}px 0px ${color},
		${-rad}px ${-rad}px 0px ${color},
		${-rad}px ${0}px 0px ${color},
		${-rad}px ${rad}px 0px ${color}`;
}

function setMainArea(id){
	elements[1].innerHTML=res[id];
}
