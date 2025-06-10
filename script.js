//DOM
var week_display = document.getElementById("week_today");
var week_display_left = document.getElementById("week_left");
var add_new_counter_button = document.getElementById("add_new_counter");
var add_new_counter_form = document.getElementById("new_counter_display");
var counter_container = document.getElementById("counters_container");
var counters_data = [];
//Form Sections
var add_new_counter_section_one = document.getElementById("new_counter_first_section");
var add_new_counter_section_second = document.getElementById("new_counter_second_section");
var add_new_counter_section_third = document.getElementById("new_counter_third_section");
var add_new_counter_name = document.getElementById("new_counter_name");
var add_new_counter_date = document.getElementById("new_counter_date");
var add_new_counter_type = document.querySelector('input[name="new_counter_type"]:checked');
//Variables
var today_date = new Date(); //Día de hoy
var current_year = new Date(today_date.getFullYear(), 0, 1); //Fecha de comienzo del año
var year_has_53 = current_year.getDay() === 5; //Verificar si tiene 53 semanas
var days_passed = Math.round((today_date.getTime() - current_year.getTime() + 1) / 86400000); //Días que pasaron desde que comenzó el año
var current_week = Math.round(days_passed / 7); //Semanas que pasaron
var weeks_left = year_has_53 ? 53 - current_week : 52 - current_week; //Semanas que quedan
//Funciones
//Calcular cuanto tiempo paso dependiendo el tipo
var calculate_time_passed = function (date, type) {
    var time_passed = 0;
    if (type === "day") {
        time_passed = Math.round((today_date.getTime() - date.getTime() + 1) / 86400000); //Días que pasaron desde cierta fecha
    }
    ;
    if (type === "week") {
        time_passed = Math.round((today_date.getTime() - date.getTime() + 1) / 86400000 / 7); //Días que pasaron desde cierta fecha
    }
    ;
    if (type === "time") {
        time_passed = Math.round((today_date.getTime() - date.getTime() + 1) / 86400000 * 24); //Días que pasaron desde cierta fecha
    }
    return time_passed;
};
//Cargar contadores del usuario
var update_counters = function () {
    var counter_container_data = "";
    for (var i = 0; i < counters_data.length; i++) {
        counter_container_data += "<div><p><span class=\"counter_name\">Nombre: ".concat(counters_data[i]["name"], "</span>\n            <br><span class=\"counter_type\">").concat(counters_data[i]["display"], "</span>\n            <br><span class=\"counter_date\">Fecha: ").concat(counters_data[i]["date"], "</span>\n            </p></div>");
    }
    ;
    counter_container.innerHTML = counter_container_data;
};
//Muestra la siguiente sección del form
var display_next_section = function () {
    var name_value = add_new_counter_name.value.trim();
    var date_value = add_new_counter_date.value.trim();
    //Mostrar segunda sección
    if (name_value !== "") {
        add_new_counter_section_second.style.display = "contents";
    }
    else {
        add_new_counter_section_second.style.display = "none";
    }
    //Mostrar tercera sección
    if (name_value !== "" && date_value !== "") {
        add_new_counter_section_third.style.display = "contents";
    }
    else {
        add_new_counter_section_third.style.display = "none";
    }
};
//Resetea los inputs del form
//Cierra o abre el form
var open_new_counter = function () {
    add_new_counter_form.style.display = "contents";
    display_next_section();
};
var close_new_counter = function () {
    add_new_counter_form.style.display = "none";
    add_new_counter_form.reset();
};
//Añade Lo escrito
var add_counter = function () {
    var name_counter = add_new_counter_name.value.trim();
    var date_counter = new Date(add_new_counter_date.value.trim());
    var type_checked = document.querySelector('input[name="new_counter_type"]:checked');
    var type_counter = type_checked.value;
    var counter = { "name": name_counter, "date": date_counter, "type": type_counter, "display": calculate_time_passed(date_counter, type_counter) };
    counters_data.push(counter);
    console.log(counters_data[0]["name"]);
    //Acá debería crear una nueva función que agregue la información a un diccionario
    //Este diccionario debe ir a un array, que esté en la página principal
    update_counters();
    close_new_counter();
};
week_display.innerHTML = "Est\u00E1s en la semana <span style=\"display: block;\">".concat(current_week, "</span> del a\u00F1o");
week_display_left.textContent = "Quedan ".concat(weeks_left, " semanas para terminar el a\u00F1o");
