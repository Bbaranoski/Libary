let myLibrary = [];

let id = 0

function Book(name, author, pages, id, read){
     this.name = name
     this.author = author
     this.pages = pages
     this.id = id
     this.read = read
}

function addBookToLibary(bookName){
     myLibrary.push(bookName)
     createDom()
}

function createDom(){
     myLibrary.forEach((obj) => {
          if(obj.id == id){
               const Div = document.createElement('div')
               const Pname = document.createElement('p')
               const Pauthor = document.createElement('p')
               const Ppages = document.createElement('p')
               const ReadDiv = document.createElement('div')
               const check = document.createElement('input')
               const label = document.createElement('label')
               const remove = document.createElement('button')
               Pname.textContent = `Name: ${obj.name}`
               Pauthor.textContent = `Author: ${obj.author}`
               Ppages.textContent = `Pages: ${obj.pages}`
               label.textContent = 'Read:'
               remove.textContent = 'REMOVE'
               Div.appendChild(Pname)
               Div.appendChild(Pauthor)
               Div.appendChild(Ppages)
               ReadDiv.appendChild(label)
               ReadDiv.appendChild(check)
               Div.appendChild(ReadDiv)
               Div.appendChild(remove)
               book.appendChild(Div)
               Div.setAttribute('id', `${obj.id}`)
               check.setAttribute('type', 'checkbox')
               check.setAttribute('id', 'check')
               label.setAttribute('for', 'check')
               remove.setAttribute('class', 'remove')
               remove.setAttribute('id', `${obj.id}`)
               if(obj.read == true){check.checked = true}
     }});
     book.appendChild(buttonForm)
}

const book = document.querySelector('.books')

const name = document.getElementById('name')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read = document.getElementById('read')
const form = document.getElementById('form')
const forms = document.querySelector('.forms')
const button = document.querySelector('.buttonAdd')
const buttonForm = document.querySelector('.button')

forms.remove()

button.addEventListener('click', () => {
     book.appendChild(forms)
     buttonForm.remove()
     name.value = ''
     author.value = ''
     pages.value = ''
     read.checked = false
})

form.addEventListener('submit', (e) => {
     e.preventDefault()
     const book = new Book(name.value, author.value, pages.value, id, read.checked)
     addBookToLibary(book)
     forms.remove()

     const remove = document.querySelectorAll('.remove')

     remove.forEach((button) => {
          if(button.id == id){
               button.addEventListener('click', () => {
                    const removeItem = document.getElementById(`${button.id}`)
                    removeItem.remove()
          })}
     })
     
     id += 1
})