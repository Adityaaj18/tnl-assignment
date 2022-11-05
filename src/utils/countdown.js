import moment from "moment";

export default function getCountdown(ending) {
  var now = moment();
  var end = moment(ending); // another date
  var duration = moment.duration(end.diff(now));

  //Get Days and subtract from duration
  var days = duration.days();
  duration.subtract(days, "days");

  //Get hours and subtract from duration
  var hours = duration.hours();
  duration.subtract(hours, "hours");

  //Get Minutes and subtract from duration
  var minutes = duration.minutes();
  duration.subtract(minutes, "minutes");

  return days + "d " + hours + "h " + minutes + "m";
}
