//DOM
const week_display = document.getElementById("week_today") as HTMLElement;
const week_display_left = document.getElementById("week_left") as HTMLElement;
const add_new_counter_button = document.getElementById("add_new_counter") as HTMLElement;
const add_new_counter_form = document.getElementById("new_counter_display") as HTMLFormElement;
const counter_container = document.getElementById("counters_container") as HTMLElement;

//Form Sections
const add_new_counter_box = document.getElementById("new_counter_box") as HTMLElement;
const add_new_counter_section_one = document.getElementById("new_counter_first_section") as HTMLElement;
const add_new_counter_section_second = document.getElementById("new_counter_second_section") as HTMLElement;
const add_new_counter_section_third = document.getElementById("new_counter_third_section") as HTMLElement;

const add_new_counter_name = document.getElementById("new_counter_name") as HTMLInputElement;
const add_new_counter_date= document.getElementById("new_counter_date") as HTMLInputElement;
const add_new_counter_type = document.querySelector('input[name="new_counter_type"]:checked') as HTMLInputElement;

//Variables
const today_date: Date = new Date(); //Día de hoy
const current_year: Date = new Date(today_date.getFullYear(),0,1); //Fecha de comienzo del año
const year_has_53: boolean = current_year.getDay() === 5; //Verificar si tiene 53 semanas
const days_passed: number = Math.round((today_date.getTime() - current_year.getTime() +1)/86400000); //Días que pasaron desde que comenzó el año
const current_week: number = Math.floor(days_passed/7) +1; //Semanas que pasaron
const weeks_left: number = year_has_53? 53 - current_week: 52 - current_week; //Semanas que quedan

interface Counter {
  id: string;
  name: string;
  date: Date;
  type: string;
  display: number;
}

let counter_count: number = 0;
let counters_data : Counter[] = localStorage.getItem('counters') ? JSON.parse(localStorage.getItem('counters')!) : [];

//Funciones

//Calcular cuanto tiempo paso dependiendo el tipo
const calculate_time_passed = (date: (Date),type) =>{
    
    let time_passed : number = 0

    if (type==="day"){
    time_passed = Math.round((today_date.getTime() - date.getTime() +1)/86400000)}; //Días que pasaron desde cierta fecha;
    if (type==="week"){
    time_passed = Math.round((today_date.getTime() - date.getTime() +1)/86400000/7)}; //Días que pasaron desde cierta fecha};
    if (type==="hour"){
    time_passed = Math.round((today_date.getTime() - date.getTime() +1)/86400000*24)}; //Días que pasaron desde cierta fecha
    
    return time_passed
} 


//Cargar contadores del usuario

const render_counters = () => {
    let counter_container_data :string = "";
    for(let i = 0; i < counters_data.length; i++){
        counter_container_data += `
            <div class="counter_box" id="counter_box_${counters_data[i]["id"]}">
            <p class="counter_name">${counters_data[i]["name"]}</p>
            <p class="counter_display"><span class="counter_number">${counters_data[i]["display"]}</span>  <span class="counter_type">${counters_data[i]["type"]}</span></p>
            <p class="counter_date">${counters_data[i]["date"].toLocaleString("es-AR", {dateStyle: "medium", timeStyle: "short"})}</p>
            <button class="delete_button" id="counter_delete_${counters_data[i]["id"]}">X</button>
            </div>`;
    };
    counter_container.innerHTML = counter_container_data;
}


//Muestra la siguiente sección del form
const display_next_section = () =>{

    const name_value: string = add_new_counter_name.value.trim();
    const date_value = add_new_counter_date.value.trim();

    //Mostrar segunda sección
    if (name_value !== "") {
        add_new_counter_section_second.style.display="contents"
    }
    else {
        add_new_counter_section_second.style.display = "none";
    }

    //Mostrar tercera sección
    if (name_value !== "" && date_value !== "") {
        add_new_counter_section_third.style.display="contents"
    }
    else{
        add_new_counter_section_third.style.display="none"
    }
}

//Resetea los inputs del form

//Cierra o abre el form
const open_new_counter =()=>{
    add_new_counter_form.style.display = "contents";
    // Acá es para iniciar una animacion que todavia no hice add_new_counter_box.style.transform = "scale(1)";
    display_next_section();
}
const close_new_counter = () =>{
    add_new_counter_form.style.display = "none";
    add_new_counter_form.reset()
}

//Añade Lo escrito
const add_counter = () => {
    const name_counter: string = add_new_counter_name.value.trim();
    const date_counter: Date = new Date(add_new_counter_date.value.trim());

    const type_checked = document.querySelector('input[name="new_counter_type"]:checked') as HTMLInputElement;
    const type_counter : string = type_checked.value;

    const time_passed = calculate_time_passed(date_counter,type_counter);

    if (name_counter &&  add_new_counter_date.value.trim() !== "" ){

        const counter: Counter = {
        "id":`${counter_count}`,
        "name":name_counter, 
        "date":date_counter,
        "type":type_counter, 
        "display": time_passed
        }
    
        counter_count += 1;

        counters_data.push(counter)

        //Actualiza el contenedor de Contadores
        render_counters();

        //Actualiza la memoria local
        localStorage.setItem('counters', JSON.stringify(counters_data));

        //Cierra el formulario
        close_new_counter();

    } else {
        alert("Faltan datos. Por favor, verifique su ingreso");
    }
}

render_counters()

//Acá se establece la semana de título
week_display.innerHTML = `Estás en la semana <span style="display: block;">${current_week}</span> de ${today_date.getFullYear()}`;
week_display_left.innerHTML  = `Quedan <span>${weeks_left}</span> semanas para terminar el año`;
