function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano= document.getElementById ('txtano')
   var res = document.querySelector ('div#res')
   if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert ('(ERRO) Verifique os dados e tente novamente !')
   } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number (fano.value)
        var gênero= ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex [0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <14){
                //Criança
                img.setAttribute ('src','fotomenino.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute ('src','fotojovemhomem.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute ('src','fotohomemmaduro.png')
            }else {
                //Idoso
                img.setAttribute ('src','fotohomemidoso.png')
            }
        } else if (fsex [1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade <14){
                //Criança
                img.setAttribute ('src','fotomenina.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute ('src','fotojovemmulher.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute ('src','fotomulhermadura.png')
            }else {
                //Idoso
                img.setAttribute ('src','fotomulheridosa.png')
            }
        }
        res.style.textAling  = 'center'
        res.innerHTML= `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
   }
}