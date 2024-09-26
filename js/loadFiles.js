async function loadFiles() {
  try {
    // Așteaptă fetch-ul asincron pentru fișierul navbar.html
    let response = await fetch("navbar.html");
    let html = await response.text();
    document.getElementById("navbar-placeholder").innerHTML = html;
    // După ce HTML-ul a fost încărcat, încarcă scriptul navbar.js dinamic
    const scriptNavBar = document.createElement("script");
    scriptNavBar.src = "js/navbar.js"; // Scriptul cu funcționalități pentru navbar
    document.body.appendChild(scriptNavBar); // Adăugăm scriptul la finalul body-ului

    response = await fetch("footer.html");
    html = await response.text();
    document.getElementById("footer-placeholder").innerHTML = html;

  } catch (error) {
    console.error("Error loading navbar:", error);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  loadFiles();
});
