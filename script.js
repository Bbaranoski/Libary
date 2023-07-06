let myLibary = [];

let id = 0

function Book(name, author, pages, id){
     this.name = name
     this.author = author
     this.pages = pages
     this.id = id
}

function addBookToLibary(bookName){
     myLibary.push(bookName)
     createDom()
}

function createDom(){
     myLibary.forEach((obj) => {
          if(obj.id == id){
               const Div = document.createElement('div')
               const Pname = document.createElement('p')
               const Pauthor = document.createElement('p')
               const Ppages = document.createElement('p')
               const remove = document.createElement('button')
               Pname.textContent = `Name: ${obj.name}`
               Pauthor.textContent = `Author: ${obj.author}`
               Ppages.textContent = `Pages: ${obj.pages}`
               remove.textContent = 'REMOVE'
               Div.appendChild(Pname)
               Div.appendChild(Pauthor)
               Div.appendChild(Ppages)
               Div.appendChild(remove)
               book.appendChild(Div)
               Div.setAttribute('id', `${obj.id}`)
               remove.setAttribute('class', 'remove')
               remove.setAttribute('id', `${obj.id}`)
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
})

form.addEventListener('submit', (e) => {
     e.preventDefault()
     const book = new Book(name.value, author.value, pages.value, id)
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