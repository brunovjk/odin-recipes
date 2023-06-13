document.addEventListener("DOMContentLoaded", function () {
  const footer = `
    <footer class="footer">
      Copyright © Odin Recipes
      <script>
        document.write(new Date().getFullYear());
      </script>
    </footer>
  `;

  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = footer;
  }
});
