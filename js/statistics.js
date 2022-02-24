axios
  .get("http://49.232.44.253:8080/quantity/viewer")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

window.downloadFile = function (src) {
  console.log(src);
};
