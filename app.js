var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
  e.preventDefault();
  
  var datos = new FormData(formulario);

  fetch('post.php',{
    method:'POST',
    body: datos
  })
  .then( rest =>jest.json())
  .then(data =>{
    console.log(datos);
  })
})