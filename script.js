document.querySelector('.about-but').addEventListener("click", () => {
    console.log("sending")
    const about = document.querySelector('.about-text').innerHTML
    fetch('http://localhost:3000/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({query: `{ ${about} }`})
      })
})