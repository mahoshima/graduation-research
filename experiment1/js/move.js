function goToA1() {
  window.location.href = "./A-1.html";
}

function goToB1() {
  window.location.href = "./B-1.html";
}

function goToA3() {

  const start = Number(
    localStorage.getItem("condition2Start")
  );

  const elapsed =
    Math.round((Date.now() - start) / 1000);

  localStorage.setItem(
    "condition2Time",
    elapsed
  );
  
  window.location.href = "./A-3.html";
}

function goToB3() {

  const start = Number(
    localStorage.getItem("condition3Start")
  );

  const elapsed =
    Math.round((Date.now() - start) / 1000);

  localStorage.setItem(
    "condition2Time",
    elapsed
  );
  
  window.location.href = "./B-3.html";
}

function goTofinish() {

  const pattern =
    localStorage.getItem("experimentPattern");

  if (pattern === "A") {

    const start = Number(
      localStorage.getItem("condition3Start")
    );

    const elapsed =
      Math.round((Date.now() - start) / 1000);

    localStorage.setItem(
      "condition3Time",
      elapsed
    );

  } else {

    const start = Number(
      localStorage.getItem("condition2Start")
    );

    const elapsed =
      Math.round((Date.now() - start) / 1000);

    localStorage.setItem(
      "condition2Time",
      elapsed
    );
  }

  window.location.href = "./finish.html";
}
