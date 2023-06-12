document.addEventListener("DOMContentLoaded", function () {
  const header = `
        <header>
          <h1><a href="./index.html">Odin Recipes</a></h1>
          <nav class="dropdown">
            <button class="dropbtn">&#9776;</button>
            <ul class="dropdown-content">
              <li><a href="./projects/fizz/index.html">FizzBuzz</a></li>
              <li><a href="./projects/jokenpo/index.html">JoKenPo</a></li>
              <li><a href="./projects/library/index.html">Library</a></li>
            </ul>
          </nav>
      </header>
    `;

  const headerContainer = document.getElementById("header-container");
  if (headerContainer) {
    headerContainer.innerHTML = header;
  }
});
