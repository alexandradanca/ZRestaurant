async function loadFiles() {
    try {
        // Așteaptă fetch-ul asincron pentru fișierul navbar.html
        const response = await fetch('navbar.html');
        const html = await response.text();
        document.getElementById('navbar-placeholder').innerHTML = html;
        // După ce HTML-ul a fost încărcat, încarcă scriptul navbar.js dinamic
        const scriptNavBar = document.createElement('script');
        scriptNavBar.src = 'js/navbar.js'; // Scriptul cu funcționalități pentru navbar
        document.body.appendChild(scriptNavBar);  // Adăugăm scriptul la finalul body-ului
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

loadFiles();

