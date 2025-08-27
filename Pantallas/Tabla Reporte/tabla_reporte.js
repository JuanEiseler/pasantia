import { createClient } from "https://esm.sh/@supabase/supabase-js"

const supabase = createClient(
    "https://qbfuespsiovkwhnvxvvj.supabase.co",
    "sb_publishable_GBetoo-b8I89bdyS5k_dYw_4MjAIpLI"
)

async function cargarAlumnos() {
    let { data: profesores } = await supabase.from("informacion_del_profesor").select("*")
    let { data: alumnos } = await supabase.from("informacion_de_alumnos").select("*")
    let { data: pagos } = await supabase.from("informacion_de_pagos").select("*")

    // planes y precios
    let planes = {
        1: 26000,
        2: 30000,
        3: 35000
    }

    let tbody = document.querySelector("#tabla-alumnos tbody")
    tbody.innerHTML = ""

    let total = 0

    alumnos.sort((a, b) => a.id_alumno - b.id_alumno)

    for (let alumno of alumnos) {
        let profesor = profesores.find(p => p.id_profesor == alumno.id_profesor)
        let pago = pagos.find(p => p.id_alumno == alumno.id_alumno)
        let monto = "-"

        if (pago) {
            monto = planes[alumno.id_plan] || 0
            total += monto
        }

        let fila = document.createElement("tr")
        fila.innerHTML = `
        <td>${profesor ? profesor.nombre : ""}</td>
        <td>${alumno.nombre}</td>
        <td style="text-align:center;">${pago ? "SI" : "NO"}</td>
        <td style="text-align:center;">${monto}</td>
      `
        tbody.appendChild(fila)
    }

    let filaTotal = document.createElement("tr")
    filaTotal.innerHTML = `
      <td style= border-color:#000000;></td>
      <td style= border-color:#000000></td>
      <td style= border-color:#000000></td>
      <td style="text-align:center; font-weight:bold; border-color:#ffffff">Total: $ ${total > 0 ? total : ""}</td>
    `
    tbody.appendChild(filaTotal)
}

cargarAlumnos()