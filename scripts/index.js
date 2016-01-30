window.onload = function(){


var nums = document.getElementsByClassName('num');
	var screen = document.getElementById('screen');
	var ops = document.getElementsByClassName('oprator');
	var denghao =document.getElementById('denghao');
	var yunsuan = document.getElementById('yunsuan');
	var kong = document.getElementById('kong');
	var jiyi = document.getElementsByClassName('jiyi');
	var bot = document.getElementsByClassName('bot');
	var f='',s='',fh='';
	var kaiguan= true;
	for(i=0;i<nums.length;i++){
		nums[i].onclick = function(){
			if(this.innerHTML !=='(-)'){
				if(this.innerHTML !=='.'  || f.indexOf('.') ==-1||s.indexOf('.') ==-1){
					if(fh==''){
						if(this.innerHTML !=='.'  || f.indexOf('.') ==-1){
							if(kaiguan){
								f=f+this.innerHTML;
								yunsuan.innerHTML = yunsuan.innerHTML+this.innerHTML;
							}else{
								screen.innerHTML = '0';
								f='';s='';fh='';
								yunsuan.innerHTML ='';
								f=f+this.innerHTML;
								yunsuan.innerHTML = yunsuan.innerHTML+this.innerHTML;
							}
							
						}
						else{return};
					}else{
						if(this.innerHTML !=='.'  || s.indexOf('.') ==-1){
							s=s+this.innerHTML;
							yunsuan.innerHTML =yunsuan.innerHTML+ this.innerHTML;
						}
						else{return}
					}
				}else{return};
			}
			else{
				if(fh==''){
					if( f.indexOf('-') ==-1 && screen.innerHTML == '0'){
						f='-'+f;
						yunsuan.innerHTML ='-'+ yunsuan.innerHTML;
					}
				}else{return;}
			}
		}
	}
	for(j=0;j<ops.length;j++){
		ops[j].onclick = function(){
			if(fh ==''){
				fh =this.innerHTML;
				yunsuan.innerHTML = yunsuan.innerHTML+ this.innerHTML;
			}else{
				yunsuan.innerHTML = yunsuan.innerHTML+ this.innerHTML;
				if(fh=='+'){f = Number(f)+Number(s)}
				if(fh=='-'){f = Number(f)-Number(s)}
				if(fh=='÷'){f = Number(f)/Number(s)}
				if(fh=='×'){f = Number(f)*Number(s)}
				s='';fh=this.innerHTML;
			}
			
		}
	}
	denghao.onclick = function(){
		if(fh==''){screen.innerHTML = Number(f)}
		if(fh=='+'){screen.innerHTML = Number(f)+Number(s)}
		if(fh=='-'){screen.innerHTML = Number(f)-Number(s)}
		if(fh=='÷'){screen.innerHTML = Number(f)/Number(s)}
		if(fh=='×'){screen.innerHTML = Number(f)*Number(s)}
		if(fh =='xⁿ'){screen.innerHTML = Math.pow(Number(f),Number(s))};
		if(fh =='x√y'){screen.innerHTML = Math.pow(Number(f),1/Number(s))};
		if(fh =='%'){screen.innerHTML = Number(f)/100};
		if(fh =='x﹣¹'){screen.innerHTML = 1/Number(f)};
		if(fh =='x²'){screen.innerHTML = Math.pow(Number(f),2)};
		if(fh =='x³'){screen.innerHTML = Math.pow(Number(f),3)};
		if(fh =='x!'){screen.innerHTML = jiecheng(Number(f))};
		if(fh =='√'){screen.innerHTML = Math.sqrt(Number(s))};
		if(fh =='log'){screen.innerHTML = Math.log10(Number(s))};
		if(fh =='sin'){screen.innerHTML = Math.sin(Math.PI/(180/Number(s)))};
		if(fh =='cos'){screen.innerHTML = Math.cos(Math.PI/(180/Number(s)))};
		if(fh =='tan'){screen.innerHTML = Math.tan(Math.PI/(180/Number(s)))};
		if(fh =='sinh'){screen.innerHTML = Math.sinh(Number(s))};
		if(fh =='cosh'){screen.innerHTML = Math.cosh(Number(s))};
		if(fh =='tanh'){screen.innerHTML = Math.tanh(Number(s))};
		if(fh =='In'){screen.innerHTML = Math.log(Number(s))};
		kaiguan = false;
		f=screen.innerHTML;s='';fh='';
	}
	kong.onclick = function(){
		screen.innerHTML = '0';
		f='';s='';fh='';
		yunsuan.innerHTML ='';
	}
	var mr = '';m='';
	for(i=0;i<jiyi.length;i++){
		jiyi[i].onclick = function(){
			if(this.innerHTML == 'mr'){mr = screen.innerHTML;m = screen.innerHTML;}
			if(this.innerHTML == 'm+'){mr = Number(mr) +Number(m); screen.innerHTML = mr;}
			if(this.innerHTML == 'm-'){mr = Number(mr) -Number(m); screen.innerHTML = mr;}
			if(this.innerHTML == 'mc'){mr = '';m='';}
		}
	}
	for(i=0;i<bot.length;i++){
		bot[i].onclick = function(){
			if(this.innerHTML =='π'){screen.innerHTML = Math.PI};
			if(this.innerHTML =='Rand'){screen.innerHTML = Math.random()};
			if(this.innerHTML =='e'){screen.innerHTML = Math.E};
			
			f =screen.innerHTML;
		}
	}
	var jiecheng = function(n){
		if(n==0){
			return 1;
		}else{
			return n*jiecheng(n-1);
		}
	}
}