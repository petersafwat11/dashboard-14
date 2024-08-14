export const convertDate = (dateStr) => {
  const dateOj = new Date(dateStr);
  const year = dateOj.getFullYear();
  const month = (dateOj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateOj.getDate().toString().padStart(2, "0");
  const hours = dateOj.getHours().toString().padStart(2, "0");
  const minutes = dateOj.getMinutes().toString().padStart(2, "0");
  let date = `${year}-${month}-${day}` || 1;
  let time = `${hours}:${minutes}` || 2;

  return { date, time };
};
export const getTimeRemainingInMinutes = (timeInZeroTimezone, minutesToAdd) => {
  if (!timeInZeroTimezone || !minutesToAdd) {
    return false;
  }
  // Convert timeInZeroTimezone to milliseconds
  const targetTime = new Date(timeInZeroTimezone).getTime();

  // Add minutes to the target time
  const newTargetTime = targetTime + minutesToAdd * 60 * 1000;

  // Get current time in milliseconds
  const currentTime = new Date().getTime();

  // Calculate the difference in milliseconds
  const timeDifference = newTargetTime - currentTime;

  // Convert difference to minutes
  const timeRemainingInMinutes = Math.round(timeDifference / (1000 * 60));

  // Return time remaining in minutes if it's positive, otherwise return false

  return timeRemainingInMinutes >= 0 ? timeRemainingInMinutes : false;
};
export const getMatchDate = (dateString, dateText) => {
  const date = new Date(dateString);

  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const MatchDateFormat = month + " " + day + " - " + hours + ":" + minutes;
  const dateTextFormat = month + " " + day;
  if (dateText) {
    return dateTextFormat;
  }
  return MatchDateFormat;
};
export const formatTime = (input) => {
  let formattedTime = input.replace(/\D/g, "").slice(0, 4);
  if (formattedTime.length >= 2) {
    formattedTime = formattedTime.replace(/(\d{2})/, "$1:");
  }

  return formattedTime;
};
export const combineDateAndTime = (date, time) => {
  const [hours, minutes] = time.split(":").map(Number);

  // Create a Date object in local time
  const localDate = new Date(date);
  localDate.setHours(hours, minutes);
  // Return the ISO string in UTC
  return localDate.toISOString();
};

