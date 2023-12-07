function FuncPhoto () {
    const mainFoto = document.querySelector('.main-foto');
    document.addEventListener('mouseover', function (e) {
        if (e.target.closest('.foto')) {
            mainFoto.src = e.target.src;
        }
    });
}