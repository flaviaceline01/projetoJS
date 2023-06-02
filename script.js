function toggleMode() {
    const html = document.documentElement //document é a representação do documento
                                          //Em formato de objeto js
                                          //o ponto(.) indica acesso propriedades e funcionalidades
                                          //DocumentElement -> acessa o HTML (no caso)

    if(html.classList.contains('light')) {// a lista de classe contém o light
        html.classList.remove('light') // se contém remove a classe de nome light
    } else {
        html.classList.add('light') //senão vai adicionar light
    }
}

//html.classList.toggle('light') -> toggle verifica se tiver o light ele tira
                                    // se não tiver ele coloca light

