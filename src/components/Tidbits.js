import React, { useEffect, useState } from 'react';
import Button from './Button';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function Tidbits_Blog() {
    const [tidbits, setTidbits] = useState([]);
    const [displayText, setDisplayText] = useState('Click on the button below to learn an interesting fact about Physical Health!');
  
    useEffect(() => {
      const fetchTidbits = async () => {
        const tidbitsCollection = collection(db, 'Tidbits');
        const tidbitsSnapshot = await getDocs(tidbitsCollection);
        const tidbitsList = tidbitsSnapshot.docs.map(doc => doc.data().Tidbit);
        setTidbits(tidbitsList);
      };
  
      fetchTidbits();
    }, []);
  
    const getTidbit = () => {
      if (tidbits.length > 0) {
        const randomIndex = Math.floor(Math.random() * tidbits.length);
        setDisplayText(tidbits[randomIndex]);
      }
    };
  
    return (
      <div className='move'>
        <div id='tidbits' className="text-center">
          <h1 className="font-bold">Tidbits Blog</h1><br/>
          <p>{displayText}</p> <br/>
          <Button label="Tidbit!" onClick={getTidbit}/>
        </div>
      </div>
    );
  }
  
  export default Tidbits_Blog;