  import { createClient } from 'https://esm.sh/@supabase/supabase-js'

  const supabaseUrl = 'https://qbfuespsiovkwhnvxvvj.supabase.co'
  const supabaseKey = 'sb_publishable_GBetoo-b8I89bdyS5k_dYw_4MjAIpLI'
  const supabase = createClient(supabaseUrl, supabaseKey)


// Cargar alumnos desde la base de datos y mostrarlos en la tabla
  async function cargarPlan() {
    const { data, error } = await supabase
      .from('informacion_del_plan')
      .select('*')
      .order('id_plan', { ascending: true })


//Mostrar Tabla
    const tbody = document.querySelector('#tabla-planes tbody')
    tbody.innerHTML = ''

    data.forEach(plan => {
      const fila = document.createElement('tr')
      fila.innerHTML = `
        <td>${plan.id_plan ?? ''}</td>
        <td>${plan.nombre ?? ''}</td>
        <td>${plan.precio ?? ''}</td>
        <td>${plan.cant_clases ?? ''}</td>
      `
      tbody.appendChild(fila)
    })
  }
//Agregar Plan
    async function agregarPlan(id_alumno, nombre, precio, cant_clases) {
    const { error } = await supabase
      .from('informacion_del_plan')
      .insert({id_plan: id_plan,
                nombre: nombre,
                precio: precio,
                cant_clases: cant_clases})
  }

  cargarPlan()
  //agregarPlan(id_plan, "nombre", "precio", "cant_clases");
