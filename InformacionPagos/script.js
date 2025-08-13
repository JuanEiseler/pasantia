  import { createClient } from 'https://esm.sh/@supabase/supabase-js'

  const supabaseUrl = 'https://qbfuespsiovkwhnvxvvj.supabase.co'
  const supabaseKey = 'sb_publishable_GBetoo-b8I89bdyS5k_dYw_4MjAIpLI'
  const supabase = createClient(supabaseUrl, supabaseKey)


// Cargar alumnos desde la base de datos y mostrarlos en la tabla
  async function infoPagos() {
    const { data, error } = await supabase
      .from('informacion_de_pagos')
      .select('*')


//Mostrar Tabla
    const tbody = document.querySelector('#tabla-pagos tbody')
    tbody.innerHTML = ''

    data.forEach(pagos => {
      const fila = document.createElement('tr')
      fila.innerHTML = `
        <td>${pagos.id_alumno ?? ''}</td>
        <td>${pagos.id_plan ?? ''}</td>
        <td>${pagos.fecha ?? ''}</td>
        <td>${pagos.mes ?? ''}</td>

      `
      tbody.appendChild(fila)
    })
  }

  infoPagos()