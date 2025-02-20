import { daysOfWeek, months } from "../constants/date";
import { ModeOptions } from "../models";

export const formatDateTimeActivityCard = (date: Date) => {
  const weekDay = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];

  const numericDay = date.getDate();
  const hores = date.getHours().toString().padStart(2, "0");
  const minuts = date.getMinutes().toString().padStart(2, "0");

  const data = `${weekDay}, ${month} ${numericDay}`;
  const hora = `${hores}:${minuts}`;

  return `${data} • ${hora}`;
};

export const transformStamp = (selectedValue: Date, mode: ModeOptions) => {
  const isDate = mode === "date";

  return isDate
    ? selectedValue
        .toLocaleDateString("es-ES", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .toString()
    : selectedValue
        .toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
        .toString();
};
