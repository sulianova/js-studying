export default class Time {
constructor(hours, minutes) {
  this.minutes = minutes;
  this.hours = hours;
}

toString() {
  return `${this.hours}:${this.minutes}`;
}

static fromString(str) {
  const [hours, minutes] = str.split(':');
  return new Time(hours, minutes);
}

}