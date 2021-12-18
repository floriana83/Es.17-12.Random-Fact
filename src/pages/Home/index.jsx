import { useState, useEffect } from 'react';
import RandomFact from '../../components/RandomFact.jsx';

const fact = [];


const Home = () => {
    const [newRactRandom, setRactRandom] = useState(fact);           // informazione che sarà monitorata dal componente React
   
    useEffect(() => {
        fetch("https://uselessfacts.jsph.pl/random.json?language=en")
          .then((response) => response.json())
          .then((data) => setRactRandom(data));
      }, []);
   

    return (
            <div>
           
                <RandomFact data={newRactRandom}/>
              
            </div>
       
    );
};

export default Home;