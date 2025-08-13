  import { createClient } from 'https://esm.sh/@supabase/supabase-js'

  const supabaseUrl = 'https://qbfuespsiovkwhnvxvvj.supabase.co'
  const supabaseKey = 'sb_publishable_GBetoo-b8I89bdyS5k_dYw_4MjAIpLI'
  const supabase = createClient(supabaseUrl, supabaseKey)


// Cargar alumnos desde la base de datos y mostrarlos en la tabla
  async function infoProfe() {
    const { data, error } = await supabase
      .from('informacion_del_profesor')
      .select('*')


//Mostrar Tabla
    const tbody = document.querySelector('#tabla-profe tbody')
    tbody.innerHTML = ''

    data.forEach(profe => {
      const fila = document.createElement('tr')
      fila.innerHTML = `
        <td>${profe.id_profe ?? ''}</td>
        <td>${profe.nombre ?? ''}</td>
        <td>${profe.apellido ?? ''}</td>
      `
      tbody.appendChild(fila)
    })
  }

  infoProfe()