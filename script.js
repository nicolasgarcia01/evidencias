let users = [
    { usurio: 'cesde', contraseña: 'cesde',} 
  ];
  
  let currentUser = null;
  let intentos = 0;
  const intentosMaximos= 3;
  
  function login() {
    const usuario = prompt('Ingrese su nombre de usuario:');
    const contraseña = prompt('Ingrese su contraseña:');
  
    const user = users.find(u => u.usuario === usuario && u.contraseña === contraseña);
    if (usuario) {
      currentUser = user;
      console.log('Inicio de sesión exitoso.');
      showMenu();
    } else {
      Intentos++;
      console.log('Nombre de usuario o contraseña incorrectos.');
      if (Intentos < intentosMaximos) {
        console.log(`Intentos restantes: ${intentosMaximos - intentos}`);
        login();
      } else {
        console.log('Ha alcanzado el número máximo de intentos.');
        alert('Ha alcanzado el número máximo de intentos.');
      }
    }
  }
  
  function register() {
    const user = prompt('Ingrese su nombre de usuario:');
    const contra = prompt('Ingrese su contraseña:');
  
    users.push({ user, contra, tasks: [] });
    console.log('Usuario registrado exitosamente.');
    login();
  }
  
  function listTasks() {
    if (!currentUser) {
      console.log('Debe iniciar sesión primero.');
      return;
    }
  
    console.log('Listado de tareas:');
    currentUser.tasks.forEach(task => {
      console.log(`ID: ${task.id}, Nombre: ${task.name}, Descripción: ${task.description}, Estado: ${task.stats}`);
    });
  }
    
  function showMenu() {
    console.log('Menú de opciones:');
    console.log('1. Lista tareas');
    console.log('2. Agregar tarea');
    console.log('3. Completar tarea');
    console.log('4. Filtrar tareas finalizadas');
    console.log('5. Filtrar tareas activas');
    console.log('6. Salir');
  
    const option = prompt('Seleccione una opción:');
    switch (option) {
      case '1':
        listTasks();
        break;
      case '2':
        addTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        filterCompletedTasks();
        break;
      case '5':
        filterActiveTasks();
        break;
      case '6':
        alert('Gracias por usar la aplicación.');
        break;
      default:
        console.log('Opción inválida');
        alert('Opción inválida');
    }
  }
  login();
  