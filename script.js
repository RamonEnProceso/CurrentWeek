//DOM
var week_display = document.getElementById("week_today");
var week_display_left = document.getElementById("week_left");
var add_new_counter_button = document.getElementById("add_new_counter");
var add_new_counter_form = document.getElementById("new_counter_display");
var add_new_counter_name = document.getElementById("new_counter_name");
var add_new_counter_date = document.getElementById("new_counter_date");
var add_new_counter_type = document.getElementById("new_counter_name");
//Variables
var today_date = new Date(); //Día de hoy
var current_year = new Date(today_date.getFullYear(), 0, 1); //Fecha de comienzo del año
var year_has_53 = current_year.getDay() === 4; //Verificar si tiene 53 semanas
var days_passed = Math.round((today_date.getTime() - current_year.getTime() + 1) / 86400000); //Días que pasaron desde que comenzó el año
var current_week = Math.round(days_passed / 7); //Semanas que pasaron
var weeks_left = year_has_53 ? 53 - current_week : 52 - current_week; //Semanas que quedan
//
var reset_inputs = function () {
};
var add_new_counter = function () {
    add_new_counter_form.style = "display: contents";
};
var cancel_new_counter = function () {
    add_new_counter_form.style = "display: none";
};
week_display.innerHTML = "Est\u00E1s en la semana <span style=\"display: block;\">".concat(current_week, "</span> del a\u00F1o");
week_display_left.textContent = "Quedan ".concat(weeks_left, " semanas para terminar el a\u00F1o");
