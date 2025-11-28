interface CurrenDateInfo {
    day: number,
    month: string,
    year: number,
    week: number
}

const getCurrentMonth = (num:number) =>{
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    return months[num]
}

const getDates = () : CurrenDateInfo => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = getCurrentMonth(currentDate.getMonth());
    const currentDay = currentDate.getDate();
    const firstDayOfYear = new Date(currentYear,0,1);
    const daysPassed = Math.floor((currentDate.getTime() - firstDayOfYear.getTime())/86400000);
    const currentWeek = Math.ceil((daysPassed + firstDayOfYear.getDay() + 1) / 7);

    return {
        day: currentDay,
        month: currentMonth,
        year: currentYear,
        week: currentWeek
    }
}

export default getDates