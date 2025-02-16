import { daysOfWeek, months } from "../constants/date";

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
