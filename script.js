
// get requests
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const query = `
  {
    about {
      desc
    }
  }
`

fetch('http://localhost:4000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: query
  })
})
.then(resp => resp.json())
.then(({data}) => document.querySelector('.about-text').innerHTML = data.about.desc)

// POST for about queries
document.querySelector('.about-but').addEventListener("click", (e) => {
    e.preventDefault();
    console.log("sending")
    const about = document.querySelector('.about-text').value
    console.log(about)
    fetch('http://localhost:3000/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({desc: `${about}`})
      })
})

// Events
fetch('http://localhost:3000/events')
.then((resp) => resp.json())
.then((events) => console.log(events))
document.querySelector('.add').addEventListener("click", () => {
  console.log("sending")
  const name = document.querySelector('.name').value
  console.log(name)
  let data
  fetch('http://localhost:3000/events')
  .then((resp) => resp.json())
  .then((events) => fetch('http://localhost:3000/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(events.push(`${name}`))
  }))

})