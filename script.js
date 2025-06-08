//DOM
const week_display = document.getElementById("week_today");
const week_display_left = document.getElementById("week_left");

//Variables
const today = new Date(); //Día de hoy
const current_year = new Date(today.getFullYear(),0,1); //Fecha de comienzo del año
const days_passed = Math.round((today - current_year +1)/86400000); //Días que pasaron desde que comenzó el año
const current_week = Math.round(days_passed/7); //Semanas que pasaron
const weeks_left = 52 - current_week; //Semanas que quedan


week_display.innerHTML = `Estás en la semana <span style="display: block;">${current_week}</span> del año`;
week_display_left.textContent = `Quedan ${weeks_left} semanas para terminar el año`;
