const books = [
    {
      title: "The Design of EveryDay Things",
      author: "Don Norman",
      alreadyRead: false,
      img:
        "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      img:
        "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
    },
    {
      title: "Thinking with Type",
      author: "Ellen Lupton",
      alreadyRead: true,
      img:
        "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      alreadyRead: false,
      img: "https://eloquentjavascript.net/img/cover.jpg"
    }
  ];

// ul aus HTML Datei holen
const bookList = document.querySelector('.book-list')

// Reihenfolge der Namen ändern
const changePositionAuthorName = (str) =>{
    let strToReverse = str.split(' ').reverse().join(', ')
    return strToReverse
}

// sortieren Namen
books.sort((a,b) => {
    const surnameA = changePositionAuthorName(a.author)
    const surnameB = changePositionAuthorName(b.author)
    return surnameA.localeCompare(surnameB)
})


for(book of books){
// li erstellen
const newLi = document.createElement('li')
newLi.classList.add('book', 'card', 'mb-3')

// section erstellen
const bookCardSection = document.createElement('section')
bookCardSection.classList.add('card-body')

// Titel Element erstllen
const h2Element = document.createElement('h2')
h2Element.classList.add('book-title', 'card-title', 'h6')
h2Element.innerText = book.title

// p Element
const pElement = document.createElement('p')
pElement.classList.add('book-author', 'card-subtitle', 'text-muted', 'small')
pElement.innerText = changePositionAuthorName(book.author)

// img erstellen
const imgElement = document.createElement('img')
imgElement.classList.add('book-cover', 'card-img-top')
imgElement.src = book.img

// footer
const footer = document.createElement('footer')
footer.classList.add('card-footer', 'text-end')

// readstatus
const readStatusElelemt = document.createElement('span')
readStatusElelemt.classList.add('status', 'badge', 'rounded-pill', 'bg-secondary', 'fw-normal')
readStatusElelemt.innerText = 'To read'

if(book.alreadyRead){
    readStatusElelemt.classList.add('bg-secondary', 'bg-success')
    readStatusElelemt.innerText = 'Read'
}

// füge ein KindElement hinzu
bookList.appendChild(newLi)

newLi.appendChild(imgElement)
newLi.appendChild(bookCardSection)

bookCardSection.appendChild(h2Element)
bookCardSection.appendChild(pElement)

newLi.appendChild(footer)
footer.appendChild(readStatusElelemt)
}
