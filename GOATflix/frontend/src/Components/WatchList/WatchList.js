import {useState, useEffect} from 'react';
import ListForm from '../../ListForm';

const WatchList = () => {
    const [list, setList] = useState([])

    const fetchList = async () => {
        try{
            const response = await fetch('https://localhost:3000/WatchList');
            const data = await response.json();
            setList(data)
        } catch (error) {
            console.error(error)
        }
    }

    const deleteList = async (id) => {
        try {
          const response = await fetch(`https://localhost:3000/WatchList`, {
            method: 'DELETE',
          })
          const data = await response.json();
          const filteredList = list.filter(list=> list._id !== data._id)
          setList(filteredList);
        } catch(error) {
          console.error(error)
        }
      }
    

      useEffect(() => {

      }, [])


    return (
        <div>
            <h1>Movies to Watch </h1>
            <ListForm updateList={setList} list={list} />
            <ul>
                {
                    list.map(list => {
                        return (
                            <li key={list._id}>{`${list.title}`}<br/>
                            <button onClick={
                                (event) => {
                                    deleteList(list._id)
                                }
                            }>Delete {list.title}</button>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
}

export default WatchList;