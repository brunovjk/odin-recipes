document.addEventListener("DOMContentLoaded", function () {
  const header = `
    <header>
      <div></div>
      <nav class="dropdown">
        <button class="dropbtn">&#9776;</button>
        <ul class="dropdown-content">
          <li><a href="./projects/recipes/index.html">Recipes</a></li>
          <li><a href="./projects/fizz/index.html">FizzBuzz</a></li>
          <li><a href="./projects/jokenpo/index.html">JoKenPo</a></li>
          <li><a href="./projects/library/index.html">Library</a></li>
          <li><a href="./projects/tic-tac-toe/index.html">Tic Tac Toe</a></li>
        </ul>
      </nav>
    </header>
  `;

  const headerPage = `
    <header>
      <h1><a href="../../index.html">Odin Recipes</a></h1>
      <nav class="dropdown">
        <button class="dropbtn">&#9776;</button>
        <ul class="dropdown-content">
          <li><a href="../recipes/index.html">Recipes</a></li>
          <li><a href="../fizz/index.html">FizzBuzz</a></li>
          <li><a href="../jokenpo/index.html">JoKenPo</a></li>
          <li><a href="../library/index.html">Library</a></li>
          <li><a href="../tic-tac-toe/index.html">Tic Tac Toe</a></li>
        </ul>
      </nav>
    </header>
    `;

  const headerContainer = document.getElementById("header-container");
  if (headerContainer) {
    headerContainer.innerHTML = header;
  }

  const headerContainerPage = document.getElementById("header-container-page");
  if (headerContainerPage) {
    headerContainerPage.innerHTML = headerPage;
  }
});
