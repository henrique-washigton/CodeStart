// Tela inicial de cada perfil
const HOME = {
  aluno: 'dashboard',
  professor: 'teacher-dashboard',
  administrador: 'admin-dashboard'
};

const ROLE_NAME = {
  aluno: 'Aluno',
  professor: 'Professor',
  administrador: 'Administrador'
};

let currentRole = null;

// Descobre a qual perfil uma tela pertence
function roleOf(id) {
  if (id === 'login') return null;
  if (id.startsWith('teacher-')) return 'professor';
  if (id.startsWith('admin-')) return 'administrador';
  return 'aluno';
}

// Mostra uma tela (só se o perfil logado puder acessá-la)
function show(id) {
  if (id !== 'login' && roleOf(id) !== currentRole) return;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// Mostra no menu lateral apenas o grupo do perfil escolhido
function applyRole(role) {
  document.querySelectorAll('.nav-group[data-role]').forEach(nav => {
    nav.hidden = nav.dataset.role !== role;
  });
  document.getElementById('sidebar').hidden = !role;
  document.getElementById('protoBar').hidden = !role;
  document.getElementById('roleLabel').textContent = role ? ROLE_NAME[role] : '';
  document.body.classList.toggle('logged-out', !role);
}

function login() {
  currentRole = document.querySelector('input[name="perfil"]:checked').value;
  applyRole(currentRole);
  show(HOME[currentRole]);
}

function logout() {
  currentRole = null;
  applyRole(null);
  show('login');
}
