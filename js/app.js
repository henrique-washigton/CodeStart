
function show(id){
  document.querySelectorAll('.screen').forEach(function(screen){
    screen.classList.remove('active');
  });
  const target=document.getElementById(id);
  if(target){
    target.classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
  }
}

document.addEventListener('DOMContentLoaded',function(){
  // Garante que a tela inicial seja o login.
  const screens=document.querySelectorAll('.screen');
  screens.forEach(s=>s.classList.remove('active'));
  const login=document.getElementById('login');
  if(login) login.classList.add('active');
});
