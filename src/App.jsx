import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Todolist from './Todolist';

function App() {
  const [item, setItem] = useState('');
  const [itemlist, setItemlist] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the current date every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  
  const createItem = (e) => {
    setItem(e.target.value);
  };

  const addItem = () => {
    setItemlist([...itemlist, item]);
  };

  const deleteItem = (id) => {
    setItemlist((itemlist) => {
      return itemlist.filter((arrayelement, index) => {
        return index !== id;
      });
    });
  };

  const editItem = (id, newItem) => {
    setItemlist((prevItems) => {
      return prevItems.map((item, index) => {
        if (index === id) {
          return newItem;
        }
        return item;
      });
    });
  };

  return (
    <>
       <p className='clock'>{currentDate.toLocaleString()}</p>
      <div className='container'>
      <div>
      </div>
        <div className='innerbox'>
          
          <div className='box2'>
            <div>
              <input type="text" placeholder='Add new Items' onChange={createItem} />
            </div>
            <div>
              <button className='mybutton' onClick={addItem}> Add</button>
            </div>
          </div>
          <br />
          <div>
          </div>
          {itemlist.map((item, index) => {
            return (
              <div key={index}>
                <Todolist
                  data={item}
                  id={index}
                  onSelect={deleteItem}
                  onEdit={editItem}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
