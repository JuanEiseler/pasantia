// Inicializa Supabase
const supabaseUrl = 'https://qbfuespsiovkwhnvxvvj.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseKey = 'sb_publishable_GBetoo-b8I89bdyS5k_dYw_4MjAIpLI'; // Reemplaza con tu clave de Supabase
const supabase = supabase.createClient(supabaseUrl, supabaseKey); // Inicializa el cliente de Supabase

// Función para actualizar el precio de un plan
async function updatePlanPrice(planId, price) {
    if (!price || isNaN(price) || parseFloat(price) <= 0) {
        alert('Por favor, ingresa un precio válido y mayor que cero.');
        return;
    }   
}
    // Actualizar el precio
    const { data, error } = await supabase
        .from('informacion_del_plan')
        .update({ precio: parseFloat(price) })
        .eq('id_plan', planId);


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
