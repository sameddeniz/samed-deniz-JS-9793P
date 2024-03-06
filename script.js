function increasingCount(sayac) {
  //   alert("Butona Tıklandı - Sayaç Arttı");
  let distractionCount = document.getElementById("sayac").innerHTML;
  distractionCount = ++distractionCount;
  console.log(distractionCount);
  document.getElementById("sayac").innerText = distractionCount;
  //   console.log(typeof distractionCount)
}

function reseting(sayac) {
  let distractionCount = document.getElementById("sayac").innerHTML;
  distractionCount = 0;
  console.log(distractionCount);
  document.getElementById("sayac").innerText = distractionCount;
}
