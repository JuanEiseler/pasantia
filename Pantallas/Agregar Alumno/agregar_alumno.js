 import { createClient } from 'https://esm.sh/@supabase/supabase-js'

  const supabaseUrl = 'https://qbfuespsiovkwhnvxvvj.supabase.co'
  const supabaseKey = 'sb_publishable_GBetoo-b8I89bdyS5k_dYw_4MjAIpLI'
  const supabase = createClient(supabaseUrl, supabaseKey)

const boton = document.getElementById("boton")

boton.addEventListener("click", async () => {
    const nombre = document.getElementById("nombre").value.trim()
    const apellido = document.getElementById("apellido").value.trim()
    const telefono = document.getElementById("telefono").value.trim()
    const direccion = document.getElementById("direccion").value.trim()
    const email = document.getElementById("email").value.trim()
    const id_profe = parseInt(document.getElementById("id_profe").value)
    const id_plan = parseInt(document.getElementById("id_plan").value)


    const { data, error } = await supabase
    .from("informacion_de_alumnos")
    .insert([
            {nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            direccion: direccion,
            email: email,
            id_profe:id_profe,
            id_plan: id_plan
        }
    ])
})
