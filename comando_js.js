// comenta uma linha
/*comenta mais de uma linha*/
// 3 tipos de delimitador em JS = "", '', ``
// regras para identificadores: consultar imagem
// para alertas, usar window.alert()
// para confirmar, usar window.confirm()
// para abrir campo de escrita, usar window.prompt()

// para identificar o tipo da variável usar typeof:
// var s1 = 'Texto puramente python'
// window.alert(typeof(s1)) == string

//para chamar uma variavel dentro de um alert:
// var valor = window.prompt('Qual o seu valor?')
// window.alert('um pazer te conhecer, ' + valor)

// //somar duas variáveis
// var n1 = Number(window.prompt('Digite valor:'))
// var n2 = Number(window.prompt('Outro valor:'))
// var valor = n1 + n2
// window.alert(`o valor da soma entre ${n1} e ${n2} informados é ${valor}`)
// window.alert(`passando o valor ${String(valor)} para string e template string`)

// + pode somar ou concatenar valor, soma se for Int ou float

// testando template strings e placeholders, necessário usar ``
// var nome = 'Saulo'
// var numero = '7'
// var posicao = 'ST'
// window.alert(`o jogador ${nome}, de camisa número ${numero} e de posição ${posicao}`)

// verificando tamanho da string com o length
// var dado = window.prompt('Digite qualquer coisa:')
// window.alert(`o tamanho do dado informado é: ${dado.length} caracteres`)

// passar string para maiúsculo, minúsculo e removendo espaços
// var nome = '  Curso  '
// window.alert(nome.toUpperCase())
// window.alert(nome.toLowerCase())
// window.alert(nome.trim())

// //Escrever coisas no corpo da página ao invés de alertas
// var nome = window.prompt('Digite nome:') //write escreve td na mesma linha
// var valor = window.prompt('Digite valor: ') //writeln escreve em várias linhas
// document.writeln(`Nome foi ${nome} e valor foi ${valor} <br/>`) //<br/> serve para quebrar linha
// document.writeln(`nome maiúsculo: ${nome.toUpperCase()} <br/>`)

// //formatar números com mais casas decimais, usar o toFixed
// var numero = 1250.1
// document.writeln(`Número é ${numero}, com mais casas decimais: ${numero.toFixed(3)} <br/>`)
// document.writeln(`No padrão de salário brasileiro: R$ ${numero.toFixed(2).replace(".",",")}<br/>`)

// //valores no padrão brasileiro
// document.writeln(`De outra forma: ${numero.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)

// var v1 = Number(window.prompt('Digite valor total de nota atividades (de 0 a 70):'))
// var v2 = Number(window.prompt('digite nota prova:'))
// var v3 = 'Teste de nota' 
// soma = document.writeln(`A soma de ${v1} + ${v2} é igual a: ${v1+v2} <br/>`)
// multi = document.writeln(`A multiplicação de ${v1} * ${v2} é igual a ${v1*v2} <br/>`)
// sub = document.writeln(`A subtração de ${v1}-${v2} é igual a: ${v1-v2}<br/>`)
// div = document.writeln(`A divisão de ${v1}/${v2} é igual a: ${v1/v2}<br/>`)
// divinteira = document.writeln(`A divisão inteira(resto da divisão) de ${v1}%${v2} é igual a ${v1%v2}<br/>`)
// potencia = document.writeln(`${v1} elevado a ${v2} é igual a ${v1**v2}<br/>`)
// maior_que = document.writeln(`${v1} é maior que ${v2}? ${v1>v2}<br/>`)
// menor_que = document.writeln(`${v1} é menor que ${v2}? ${v1<v2}<br/>`)
// igual = document.writeln(`${v1} é igual a ${v2}? ${v1==v2}<br/>`)
// diferente = document.writeln(`${v1} é difetente de ${v2}? ${v1!=v2}<br/>`)
// identico = document.writeln(`${v1} é do mesmo tipo(número) e mesmo valor que ${v2}? ${v1===v2}<br/>`)
// or = document.writeln(`${v1} é uma string ou number? ${typeof(v1) == 'number' || typeof(v1) == 'string'} <br/>`)
// and = document.writeln(`${v3} é uma string e ${v1} é um number? ${typeof(v1) == 'number' && typeof(v3) == 'string'} <br/>`)
// nota_semestre = (v1*4)/70 + (v2*0.6)
// resultado = document.writeln(`Soma de provas e atividades: ${nota_semestre} <br/>`)
// ternario = document.writeln(`Aluno foi reprovado ou aprovado? ${nota_semestre > 5?`aprovado`:`reprovado`}<br/>`)

// //Coletando dados por tag(p, h1, h2 entre outros)
// var coletando_por_tagname = window.document.getElementsByTagName('p')[0]
// var coletando_por_tagname2 = window.document.getElementsByTagName('h2')[0]
// var coletando_por_tagname3 = window.document.getElementsByTagName('h1')[0]
// //para escrever, usar comando abaixo, não esquecer de passar o posicional
// window.document.writeln(`O dado é ${coletando_por_tagname.innerText} <br/>`)//não esquecer do innertext
// window.document.writeln(`O segundo dado é: ${coletando_por_tagname2.innerText} <br/>`)
// window.document.writeln(`Terceiro dado é ${coletando_por_tagname3.innerText} <br/>`)
// //caso queira pegar os filhos(formatação de texto) usar innerhtml
// var coletando_por_tagname4 = window.document.getElementsByTagName('p')[1]
// window.document.writeln(`O dado com o a formatação de texto é: ${coletando_por_tagname4.innerHTML} <br/>`)

// //coletando por ID
// var coletando_por_id = window.document.getElementById('teste')
// window.document.writeln(`Dado coletado com ID: ${coletando_por_id.innerHTML} <br/>`)

// //coletando por nome
// var coletando_por_nome = window.document.getElementsByName('teste_nome')[0]
// window.document.writeln(`Dado coletado por nome: ${coletando_por_nome.innerHTML} <br/>`)

// //Coletando por class
// var coletando_por_class = window.document.getElementsByClassName('teste_classe')[0]
// window.document.writeln(`Dado coletado por classe: ${coletando_por_class.innerHTML} <br/>`)

// //coletando por query selector, # é id e . é classe, o mais recomendado
// var query_selector_id = window.document.querySelector('#teste')
// var query_selector_classe = window.document.querySelector('.teste_classe')
// window.document.writeln(`ID coletado por query: ${query_selector_id.innerHTML} <br/>`)
// window.document.writeln(`Classe coletada por query: ${query_selector_classe.innerHTML} <br/>`)

// //dá para mudar dados de estilo com query selector
// var teste = window.prompt('Digite valor')
// var colect_por_id = document.querySelector('body')
// teste < 5? colect_por_id.style.background = 'rgb(44, 0, 0)':colect_por_id.style.background = 'rgb(3, 25, 44)'