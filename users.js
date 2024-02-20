async function methodGetUsers() {
  
  let xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos')
  xhr.send()
  

  let xhr2 = new XMLHttpRequest()
  
  xhr2.open('GET', 'https://jsonplaceholder.typicode.com/users')
  xhr2.send()

  xhr.onload = function () {
    let response = JSON.parse(xhr.response)
    let response2 = JSON.parse(xhr2.response)
    
    if (response && Array.isArray(response) && response.length > 0) {
      response.forEach((user) => {
      
        let row = '<tr style="border-collapse: collapse;">'
        row += '<td>' + user.id + '</td>'
        response2.forEach((users) => {
          if (users.id == user.userId){
            row += '<td>' + users.name + '</td>'
          }
        })
        row += '<td>' + user.title + '</td>'
        if(user.completed == true){
          row += '<td>' + '<input type="checkbox" id="completed" value=user.completed checked/' + '</td>'
        }
        else{
          row += '<td>' + '<input type="checkbox" id="completed" value=user.completed/' + '</td>'
        }
        row += '</tr > '
      
        $('table tbody').append(row)
      })
    }
  }
}