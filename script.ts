//DOM
const week_display = document.getElementById("week_today") as HTMLElement;
const week_display_left = document.getElementById("week_left") as HTMLElement;
const add_new_counter_button = document.getElementById("add_new_counter") as HTMLElement;
const add_new_counter_form = document.getElementById("new_counter_display") as HTMLElement;
const add_new_counter_name = document.getElementById("new_counter_name") as HTMLElement;
const add_new_counter_date= document.getElementById("new_counter_date") as HTMLElement;
const add_new_counter_type = document.getElementById("new_counter_name") as HTMLElement;

//Variables

const today_date: Date = new Date(); //Día de hoy
const current_year: Date = new Date(today_date.getFullYear(),0,1); //Fecha de comienzo del año
const year_has_53: boolean = current_year.getDay() === 4; //Verificar si tiene 53 semanas
const days_passed: number = Math.round((today_date.getTime() - current_year.getTime() +1)/86400000); //Días que pasaron desde que comenzó el año
const current_week: number = Math.round(days_passed/7); //Semanas que pasaron
const weeks_left: number = year_has_53? 53 - current_week: 52 - current_week; //Semanas que quedan



//

const reset_inputs=()=>{

}

const add_new_counter =()=>{
    add_new_counter_form.style = "display: contents";
}
const cancel_new_counter = () =>{
    add_new_counter_form.style = "display: none";
}



week_display.innerHTML = `Estás en la semana <span style="display: block;">${current_week}</span> del año`;
week_display_left.textContent = `Quedan ${weeks_left} semanas para terminar el año`;


