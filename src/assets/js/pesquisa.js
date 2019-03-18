<script src="https://algorithmia.com/v1/clients/js/algorithmia-0.2.0.js" type="text/javascript"></script>

function pesquisar(input) {
    Algorithmia.client("simFhhDQMeECjRN/U9nagwtA5hy1")
    .algo("web/WikipediaParser/0.1.2?timeout=300") // timeout is optional
    .pipe(input)
    .then(function(output) {
        console.log(output);
    });
}
