var root = document.getElementById('root');
var numbers = prompt('Combien voulez vous de div ?');

for(var i = 0;i<numbers;i++){
  var div = document.createElement('div');
  div.className='content';
  root.appendChild(div);
}
