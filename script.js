var ul = document.getElementById('ul');
var input = document.getElementById('item');
var btn = document.getElementById('btn');

var myFunction = function(){
    var currentInput = input.value;
    input.value = '';
    
    var li = document.createElement('li');
    var span = document.createElement('span');
    var button = document.createElement('button');
    
    li.appendChild(span);
    li.appendChild(button);
    
    span.textContent = currentInput;
    button.textContent = 'Delete';
    
    ul.appendChild(li);
    
    button.onclick = function(e) {
      ul.removeChild(li);  
    };
    
    input.focus();
};

btn.addEventListener('click', myFunction);

document.addEventListener('keypress', function(event) {
           if(event.keyCode === 13 || event.which === 13) {
            myFunction();
           } 
        });








