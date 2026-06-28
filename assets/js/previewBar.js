const fallback = document.body.dataset.fallback || "../../index.html";

document.body.classList.add("has-preview-bar");

document.body.insertAdjacentHTML(
  "afterbegin",
  `
<div class="preview-bar">

    <button class="preview-back">
        ← Back
    </button>

    <div class="preview-brand">
        One File Tools
    </div>

    <a
        class="preview-github"
        href="https://github.com/praveenscience/One-File-Tools"
        target="_blank"
        rel="noopener noreferrer">

        GitHub ↗

    </a>

</div>
`
);

document
  .querySelector(".preview-back")
  .addEventListener("click", () => {
    if (window.history.length > 1 && document.referrer) {
      history.back();
    } else {
      window.location.href = fallback;
    }
  });