// TEST API 

fetch("https://random.dog/woof.json")
  .then(response => response.json())
  .then(data => {
    console.log (data)
    document.body.innerHTML = `<img src = ${data.url}> `
  })

  .catch(error => console.error(error));

  document.head.title.innerText = "doggo"
 


