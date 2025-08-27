import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://qbfuespsiovkwhnvxvvj.supabase.co'
const supabaseKey = 'sb_publishable_GBetoo-b8I89bdyS5k_dYw_4MjAIpLI'
const supabase = createClient(supabaseUrl, supabaseKey)

const boton = document.getElementById("boton")

boton.addEventListener("click", async () => {
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const telefono = document.getElementById("telefono").value
    const direccion = document.getElementById("direccion").value
    const email = document.getElementById("email").value
    const id_plan = document.getElementById("id_plan").value

    const { data, error } = await supabase
        .from("informacion_de_alumnos")
        .insert([
            {   nombre,
                apellido,
                telefono,
                direccion,
                email,
                id_plan,
            }
        ])
})
