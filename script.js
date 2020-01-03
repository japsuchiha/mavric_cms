
// get requests
const proxyurl = "https://cors-anywhere.herokuapp.com/";
let query = `
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
    query = ` 
  mutation {
    addAbout(desc:"${about}"){
      desc
    }
  }
`
    fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query
        })
      })
      .then((resp) => resp.json())
      .then(console.log)
})

// Events
query = `
  {
    events {
      name
    }
  }
`
let events = ""
fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query
        })
})
.then((resp) => resp.json())
.then(({data}) => data.events.forEach(element => {
  let z = document.createElement('li')
  z.innerHTML = element.name
  console.log(z)
  document.querySelector('.curr-events').appendChild(z)
}))

document.querySelector('.add').addEventListener("click", () => {
  console.log("sending")
  const name = document.querySelector('.name').value
  console.log(name)
  let data
  query = `
    mutation{
      addEvents(name: "${name}") {
        name
      }
    }
  `
fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query:query
    })
  })
  .then((resp) => resp.json())
  .then(console.log)
})