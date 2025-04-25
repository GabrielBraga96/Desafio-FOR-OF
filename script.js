let p = document.querySelector('p')
let input = document.querySelector('input')

const contacts = [
    { name: 'Rodolfo', number: '(19) 94343-3434' },
    { name: 'Rafaelly', number: '(15) 99724-2424' },
    { name: 'Rosangela', number: '(15) 99787-0134' },
    { name: 'Aline', number: '(15) 99769-6969'},
    { name: 'Dino', number: '(15) 93242-3934'}
]

function search(){
    for(const contact of contacts){
        if(input.value.toLowerCase() === contact.name.toLowerCase()){
            p.innerHTML = `Contato Encontrado Nome:${contact.name} Telefone: ${contact.number}`
        break
        }else {
            p.innerHTML = 'Contato Não Encontrado'
        }
    }
}