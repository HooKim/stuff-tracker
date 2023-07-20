const ITEM_KEY = 'stuff-tracker-items'

const addBtn = document.getElementById('add-btn')
const display = document.getElementById('display')

let scale = 7

const getInfo = () => {
  let items = localStorage.getItem(ITEM_KEY)
  
  if(items === null){
    items = []
    localStorage.setItem(ITEM_KEY, JSON.stringify(items))
  }else{
    items = JSON.parse(items)
  }

  return items
}

const setInfo = (items = []) => {
  localStorage.setItem(ITEM_KEY, JSON.stringify(items))
}


const renderTable = () => {
  display.innerHTML = '' // clean 
  users.forEach(el => {
    const tr = document.createElement('tr')
    const itemHeader = document.createElement('td')
    itemHeader.innerText = el
    tr.append(itemHeader)
    display.append(tr)  
    for(let count = 0; count < scale; count++){
      const td = document.createElement('td')
      td.innerText = 'T'
      tr.append(td)
      display.append(tr)  
    }
  }) 
}

const users = getInfo()
renderTable()

addBtn.addEventListener('click', () => {
  users.push('untitled')
  setInfo(users)
  renderTable()
})

display.addEventListener('wheel', (e) => {
  if(e.deltaY > 0){
    scale - 1  >= 7 ? --scale : scale
  }else{
    scale + 1  <= 30 ? ++scale : scale
    
  }
  renderTable()
})