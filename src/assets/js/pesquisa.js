function pesquisar() {
    this.valor = this.input;
    console.log(this.valor);

    Algorithmia.client("simFhhDQMeECjRN/U9nagwtA5hy1")
    .algo("web/WikipediaParser/0.1.2?timeout=300") // timeout is optional
    .pipe(this.valor)
    .then(function(output) {
        console.log(output);
    });
}