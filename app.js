var newArray = ['robot AI' , 'build a house' , 'shoot a bubble'];
var newPara = document.getElementById('paragraph');

var spinIt = () =>{
 for(var i = 0; i < newArray.length; i++){
     var word = newArray[Math.floor(Math.random()*newArray.length)];
     document.write(`${word} that `);
     
    
 }
};

spinIt();