// Inicializa Supabase
import { createClient } from 'https://esm.sh/@supabase/supabase-js';
const supabaseUrl = 'https://qbfuespsiovkwhnvxvvj.supabase.co'; 
const supabaseKey = 'sb_publishable_GBetoo-b8I89bdyS5k_dYw_4MjAIpLI'; 
const supabase = createClient(supabaseUrl, supabaseKey)

// Función para actualizar el precio de un plan
async function updatePlanPrice(planId, price) {
    if (!price || isNaN(price) || parseFloat(price) <= 0) {
        alert('Por favor, ingresa un precio válido y mayor que cero.');
        return;
    }   

// Actualizar el precio
const { data, error } = await supabase
    .from('informacion_del_plan')
    .update({ precio: parseFloat(price) })
    .eq('id_plan', planId);
}

// Eventos para los botones
document.getElementById('btn1').addEventListener('click', () => {
    const plan1Price = document.getElementById('plan1').value;
    updatePlanPrice(1, plan1Price); // Actualiza el plan 1
});

document.getElementById('btn2').addEventListener('click', () => {
    const plan2Price = document.getElementById('plan2').value;
    updatePlanPrice(2, plan2Price); // Actualiza el plan 2
});

document.getElementById('btn3').addEventListener('click', () => {
    const plan3Price = document.getElementById('plan3').value;
    updatePlanPrice(3, plan3Price); // Actualiza el plan 3
});

  async function cargarPlanes() {
    const { data, error } = await supabase
      .from('informacion_del_plan')
      .select('*')
      .order('cant_clases', { ascending: true })


    const tbody = document.querySelector('#tabla-planes tbody')
    tbody.innerHTML = ''

    data.forEach(planes => {
      const fila = document.createElement('tr')
      fila.innerHTML = `
        <td>${planes.nombre ?? ''}</td>
        <td>${planes.precio ?? ''}</td>
        <td>${planes.cant_clases ?? ''}</td>
      `
      tbody.appendChild(fila)
    })
  }
    cargarPlanes()
