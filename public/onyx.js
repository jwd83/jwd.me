(function () {
  const input = document.getElementById("onyx-search");
  const results = document.getElementById("onyx-search-results");
  if (!input || !results) return;

  const base = (window.ONYX_BASE_URL || "/").replace(/\/?$/, "/");
  let index = [];

  fetch(base + "public/search-index.json")
    .then((response) => response.ok ? response.json() : [])
    .then((items) => { index = Array.isArray(items) ? items : []; })
    .catch(() => { index = []; });

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[ch]);
  }

  function score(item, terms) {
    const haystack = [
      item.title || "",
      item.path || "",
      item.excerpt || "",
      (item.headings || []).join(" "),
      (item.tags || []).join(" ")
    ].join(" ").toLowerCase();
    let total = 0;
    for (const term of terms) {
      if (!haystack.includes(term)) return 0;
      total += (item.title || "").toLowerCase().includes(term) ? 4 : 1;
      total += (item.path || "").toLowerCase().includes(term) ? 2 : 0;
    }
    return total;
  }

  function render() {
    const terms = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      results.hidden = true;
      results.innerHTML = "";
      return;
    }
    const matches = index
      .map((item) => ({ item, value: score(item, terms) }))
      .filter((entry) => entry.value > 0)
      .sort((a, b) => b.value - a.value || String(a.item.title).localeCompare(String(b.item.title)))
      .slice(0, 12);

    results.innerHTML = matches.length
      ? matches.map(({ item }) => '<a href="' + escapeHTML(item.url) + '"><strong>' + escapeHTML(item.title) + '</strong><span>' + escapeHTML(item.excerpt || item.path || "") + '</span></a>').join("")
      : '<a href="#"><strong>No matches</strong><span>Try a different phrase.</span></a>';
    results.hidden = false;
  }

  input.addEventListener("input", render);
  input.addEventListener("focus", render);
  document.addEventListener("click", (event) => {
    if (!results.contains(event.target) && event.target !== input) results.hidden = true;
  });
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      input.focus();
      input.select();
    }
    if (event.key === "Escape") {
      results.hidden = true;
      input.blur();
    }
  });
})();