axios
  .get("https://v1.hitokoto.cn?c=a")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

window.downloadFile = function (src) {
  console.log(src);
};
