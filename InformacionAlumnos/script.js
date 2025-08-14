  import { createClient } from 'https://esm.sh/@supabase/supabase-js'

  const supabaseUrl = 'https://qbfuespsiovkwhnvxvvj.supabase.co'
  const supabaseKey = 'sb_publishable_GBetoo-b8I89bdyS5k_dYw_4MjAIpLI'
  const supabase = createClient(supabaseUrl, supabaseKey)


// Cargar alumnos desde la base de datos y mostrarlos en la tabla
  async function cargarAlumnos() {
    const { data, error } = await supabase
      .from('informacion_de_alumnos')
      .select('*')


//Mostrar Tabla
    const tbody = document.querySelector('#tabla-alumnos tbody')
    tbody.innerHTML = ''

    data.forEach(alumno => {
      const fila = document.createElement('tr')
      fila.innerHTML = `
        <td>${alumno.id_alumno ?? ''}</td>
        <td>${alumno.nombre ?? ''}</td>
        <td>${alumno.apellido ?? ''}</td>
        <td>${alumno.telefono ?? ''}</td>
        <td>${alumno.direccion ?? ''}</td>
        <td>${alumno.email ?? ''}</td>
        <td>${alumno.id_profe ?? ''}</td>
        <td>${alumno.id_plan ?? ''}</td>
      `
      tbody.appendChild(fila)
    })
  }
//Agregar Alumno
  async function agregarAlumno() {
    const { error } = await supabase
      .from('informacion_de_alumnos')
      .insert({ id_alumno: 11, 
                nombre: 'Juan',
                apellido: 'Perez',
                telefono: '+5491109834234',
                direccion: 'Calle Falsa 123',
                email: 'juanperez@mail.com',
                id_profe: 1,
                id_plan: 3})
  }

  cargarAlumnos()


