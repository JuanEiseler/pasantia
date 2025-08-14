  import { createClient } from 'https://esm.sh/@supabase/supabase-js'

  const supabaseUrl = 'https://qbfuespsiovkwhnvxvvj.supabase.co'
  const supabaseKey = 'sb_publishable_GBetoo-b8I89bdyS5k_dYw_4MjAIpLI'
  const supabase = createClient(supabaseUrl, supabaseKey)


// Cargar alumnos desde la base de datos y mostrarlos en la tabla
  async function cargarPlan() {
    const { data, error } = await supabase
      .from('informacion_del_plan')
      .select('*')


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
    async function agregarPlan() {
    const { error } = await supabase
      .from('informacion_del_plan')
      .insert({id_plan: 4,
                nombre: '4° Plan',
                precio: '39.000',
                cant_clases: '24'})
  }

  cargarPlan()
  agregarPlan()

