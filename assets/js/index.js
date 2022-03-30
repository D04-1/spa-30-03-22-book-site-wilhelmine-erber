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

// ul ansprechen um Inhalt hinein zu speichern
const bookList = document.querySelector('.book-list')

// reihenfolge Author Name ändern
const changePositionAuthorName = (str) =>{
  let strToArr = str.split(' ').reverse().join(', ')
  return strToArr
}

// sortieren Author Nachnamen
const sortAuhorNames = () => {
  
}

for(book of books){
 // neues li erstellen
  const newLi = document.createElement('li')
  newLi.classList.add('book', 'card', 'mb-3')

  // section erstellen für card
  const bookCardSection = document.createElement('section')
  bookCardSection.classList.add('card-body')

  // footer für card erstellen
  const footer = document.createElement('footer')
  footer.classList.add('card-footer', 'text-end')

  //Überschrift erstellen für titel
  const h2Element = document.createElement('h2')
  h2Element.classList.add('book-title', 'card-title', 'h6')
  h2Element.innerText = book.title

  // p element erstellen
  const pElement = document.createElement('p')
  pElement.classList.add('book-author', 'card-subtitle', 'text-muted', 'small')
  pElement.innerText = changePositionAuthorName(book.author)

  // img erstellen
  const imgElement = document.createElement('img')
  imgElement.classList.add('book-cover', 'card-img-top')
  imgElement.src = book.img

  // readstatur im footer
  const readStatusElement = document.createElement('span')
  readStatusElement.classList.add('status', 'badge', 'rounded-pill', 'bg-secondary', 'fw-normal')
  readStatusElement.innerText = 'To read'

  if(book.alreadyRead){
    readStatusElement.classList.add('bg-secondary', 'bg-success')
    readStatusElement.innerText = 'Read'
  }


  bookCardSection.appendChild(h2Element)
  bookCardSection.appendChild(pElement)
  newLi.appendChild(imgElement)
  newLi.appendChild(bookCardSection)
  newLi.appendChild(footer)
  bookList.appendChild(newLi)
  footer.appendChild(readStatusElement)


}