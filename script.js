function verificar()  {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anoDigitado')
    var resultado = document.querySelector('div#resultado')

    // Mensagem de erro
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }
    //Aqui, verificamos sexo e idade recebidos
    else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        //resultado.innerHTML =`Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')

        //Definindo um atributo para a variável img
        img.setAttribute('id', 'foto')


        // Abaixo, usamos estrutura condicional de acordo com o que é marcado na caixa
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 13) {
                img.setAttribute('src', 'foto-menino.png')
            }
            else if (idade < 18) {
                img.setAttribute('src', 'foto-adolescente-h.png')
            }
            else if (idade < 51) {
                img.setAttribute('src', 'foto-adulto.png')
            }
            else {
                img.setAttribute('src', 'foto-idoso.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 13) {
                img.setAttribute('src', 'foto-menina.png')
            }
            else if (idade < 18) {
                img.setAttribute('src', 'foto-adolescente-m.png')
            }
            else if (idade < 51) {
                img.setAttribute('src', 'foto-adulta.png')
            }
            else {
                img.setAttribute('src', 'foto-idosa.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Você é um ${genero} com ${idade} anos.`
        //Adicionando a imagem
        resultado.appendChild(img)
    }
}
        
