import './App.css';

const App = () =>  {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1a836a595bmshba6f885e58262c1p1f60ccjsn0a0a266111f4',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };
  
  fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
    // .then(response => response.json())
    .then(response => {
      console.log(response.json()); 
    })
    .catch(err => console.error(err));

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
