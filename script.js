// Mostrar u ocultar el sidebar
function toggleSidebar() {
  console.log('toggleSidebar');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.classList.toggle('show');
  overlay.classList.toggle('active');
}

// Cerrar el sidebar al hacer clic en el overlay
document.getElementById('overlay').addEventListener('click', toggleSidebar);

// Detecta clics fuera del sidebar para cerrarlo
document.addEventListener('click', (event) => {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const isClickInsideSidebar =
    sidebar.contains(event.target) ||
    event.target.id === 'sidebarToggle' ||
    event.target.id === 'sidebarToggleIcon';
  if (!isClickInsideSidebar && sidebar.classList.contains('show')) {
    toggleSidebar();
  }
});

// Función para validar los campos de configuración de perfil
function validateProfileConfig(event) {
  event.preventDefault(); // Prevenir el envío del formulario para validarlo antes

  const name = document.getElementById('name').value.trim();
  const username = document.getElementById('username').value.trim();
  const description = document.getElementById('description').value.trim();

  // Validar que los campos no estén vacíos y que la descripción tenga al menos 10 caracteres
  if (name === '') {
    swal('Error', 'El campo Nombre no puede estar vacío.', 'error');
    return false;
  }
  if (username === '') {
    swal('Error', 'El campo Nombre de Usuario no puede estar vacío.', 'error');
    return false;
  }
  if (description.length < 10) {
    swal('Error', 'La descripción debe tener al menos 10 caracteres.', 'error');
    return false;
  }

  // Si todo está validado correctamente
  swal('¡Éxito!', 'Los cambios en tu perfil han sido guardados exitosamente.', 'success');
  return true;
}

// Asignar el evento de validación al formulario
document.querySelector('form').addEventListener('submit', validateProfileConfig);
