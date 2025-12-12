let allele = document.querySelectorAll('.elem')

allele.forEach(function (ele) {
  console.log(ele.childNodes);
  ele.childNodes[3].addEventListener('click', function () {
    let fleg = ele.childNodes[3].innerHTML;

    if (fleg === "Friend") {
      ele.childNodes[3].innerHTML = "Unfriend"
    } else {
      ele.childNodes[3].innerHTML = "Friend"
    }
  })

})