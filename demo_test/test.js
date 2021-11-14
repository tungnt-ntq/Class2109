if (window.Promise) {
  console.log("Promise found");

  var promise = new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();

    request.open("GET", "http://api.icndb.com/jokes/random");
    console.log("bb data", request.response);
    request.onload = function () {
      if (request.status == 200) {
        console.log("bb data", request.response);
        resolve(request.response); // we got data here, so resolve the Promise
      } else {
        reject(Error(request.statusText)); // status is not 200 OK, so reject
      }
    };

    request.onerror = function () {
      reject(Error("Error fetching data.")); // error occurred, reject the  Promise
    };

    request.send(); //send the request
  });

  console.log("Asynchronous request made.");

  promise
    .then(function (data) {
      console.log("Got data! Promise fulfilled.");
      document.getElementsByTagName("body")[0].textContent =
        JSON.parse(data).value.joke;
    })
    .catch((err) => {
      console.log(err);
    });
} else {
  console.log("Promise not available");
}
