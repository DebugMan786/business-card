//获取三个按钮对象
const btnLight=document.getElementById('btnLight');
const btnDark=document.getElementById('btnDark');
const btnSystem=document.getElementById('btnSystem');
//每个主题按钮添加事件
btnLight.addEventListener('click',function(){
	localStorage.setItem(THEME_KEY,'light');
	applyToHtml('light');
	isActive();
});
btnDark.addEventListener('click',function(){
	localStorage.setItem(THEME_KEY,'dark');
	applyToHtml('dark');
	isActive();
});
btnSystem.addEventListener('click',function(){
	localStorage.setItem(THEME_KEY,'system');
	applyToHtml('system');
	isActive();
});
//mediaDark添加'change'事件
mediaDark.addEventListener('change',function(){
	if(readTheme()==='system')
		applyToHtml('system');
});
//给按钮添删'is-active'的class
function isActive(){
	 btnLight.classList.toggle('is-active',readTheme()==='light');
	 btnDark.classList.toggle('is-active',readTheme()==='dark');
	 btnSystem.classList.toggle('is-active',readTheme()==='system');
}
isActive();

//字数统计
const draft=document.getElementById('draft');
const counter=document.getElementById('counter');
const MAX=draft.maxLength>0?draft.maxLength:10;
draft.addEventListener('input',updateCounter);
function updateCounter(){
	const text=draft.value;
	const n=Array.from(text).length;
	counter.textContent=n+'/'+MAX;
	counter.dataset.level=n>=MAX-2?(n>MAX?'over':'warn'):'ok';
}

updateCounter();