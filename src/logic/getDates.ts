import { Difference } from "../models/Task";
interface CurrenDateInfo {
  day: number;
  month: string;
  year: number;
  week: number;
}

const getCurrentMonth = (num: number) => {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return months[num];
};

export const getDates = (): CurrenDateInfo => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = getCurrentMonth(currentDate.getMonth());
  const currentDay = currentDate.getDate();
  const firstDayOfYear = new Date(currentYear, 0, 1);
  const daysPassed = Math.floor(
    (currentDate.getTime() - firstDayOfYear.getTime()) / 86400000
  );
  const currentWeek = Math.ceil((daysPassed + firstDayOfYear.getDay() + 1) / 7);

  return {
    day: currentDay,
    month: currentMonth,
    year: currentYear,
    week: currentWeek,
  };
};

export const getDifference = (date: string): Difference => {
  const finalDate = new Date(date);
  const today = new Date();

  const difference = finalDate.getTime() - today.getTime();
  const hoursDifference = Math.floor(difference / 3600000);
  const daysDifference = Math.floor(difference / 86400000);
  const weeksDifference = Math.floor(daysDifference / 7);

  return {
    difference,
    hoursDifference,
    daysDifference,
    weeksDifference,
  };
};
