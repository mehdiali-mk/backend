exports.getDate = function () {
  let date = new Date(Date.now());
  let todayDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return todayDate.toString();
};

exports.getDay = function () {
  let date = new Date(Date.now());
  let todayDate = date.toLocaleDateString("en-US", {
    weekday: "long",
  });
  return todayDate.toString();
};
