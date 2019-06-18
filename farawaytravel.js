var d = new Date();
var time = d.getHours();

if (time < 12)
  {
  document.write("Good morning, are you ready for a getaway?");
} else if (time>=12 && time<18) {
  document.write("Good afternoon, are you ready for a getaway?");
} else {
  document.write("Good evening, are you ready for a getaway?");
};
