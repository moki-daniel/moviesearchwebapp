import React, {useState, useEffect} from 'react';
import './App.css';

const App = () =>  {
  const [endPoint,setEndPoints] = useState('');
  const [container,setContainer] = useState([]);
  const [finalPoint,setFinalPoint] = useState('');
  
  useEffect(() => {
    fetchMe()
  }, [finalPoint])

  const fetchMe = () => {
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1a836a595bmshba6f885e58262c1p1f60ccjsn0a0a266111f4',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };
  
  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, options)
  .then(response => {
    return response.json();
    })
    .then(data => {
      setContainer(data.d)
    })
    .catch(err => console.error(err));
  }
  
  const onChangeHandler = (e) => {
      setEndPoints(e.target.value)
    }

    const submitHandler = e => {
      e.preventDefault()
      setFinalPoint(endPoint)
    }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type = "text" value={endPoint} onChange={onChangeHandler}/>
        <button type="submit">Request</button>
      </form>
      <div className ="element">
        {container.map((item, index) => {
          return(
          <div key={index} className='element-div'>
            <img src={item.i.imageUrl} alt="" />
            <p>{item.l}</p>
            <p>{item.s}</p>
            </div>
            )}
            )}
            </div>
            </div>
  );
}

export default App;
