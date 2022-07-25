// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc==='pic/1.png'){
        myImage.setAttribute('src','pic/2.png');
    } else{
        myImage.setAttribute('src','pic/1.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('请输入你的名字');
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Moz is cool,'+myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'moz is cool,'+storedName;
}
myButton.onclick = function(){
    setUserName();
}