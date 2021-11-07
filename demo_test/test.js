function makeCoffe(cb) {
  console.log("start make coffe");
  setTimeout(() => {
    console.log("making... coffe");
    return cb("ss");
  }, 2000);
}
makeCoffe((r) => {
  if (r) {
    console.log("done coffe");
  }
});
