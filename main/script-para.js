window.addEventListener("load", () => {
  document.querySelectorAll(".encrypted-text-body").forEach(el => {
    const original = el.textContent;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
    let iteration = 0;
    const interval = setInterval(() => {
      el.textContent = original
        .split("")
        .map((c, i) => (c === " " || i < iteration ? original[i] : chars[Math.floor(Math.random()*chars.length)]))
        .join("");
      if (iteration++ >= original.length) {
        clearInterval(interval);
        el.classList.add("decrypted");
      }
    }, 50);
  });
});
