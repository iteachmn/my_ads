function setLang(lang) {
    document.querySelectorAll('[data-jp]').forEach(el => {
        el.innerText = el.dataset[lang];
    });
}
