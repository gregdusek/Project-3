import { useRef, useState, useEffect } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const [formData, setFormData] = useState({});
    const titleInput = useRef(null);

    const createList = async (event) => {
        event.preventDefault()
        const title = titleInput.current.value;
        const body = JSON.stringify({title});
        event.currentTarget.reset();
        try {
            const response = await fetch('https://localhost:3000/WatchList', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: body
            })
            const data = await response.json();
            props.updatedList([...props.list, data])
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <form onSubmit={createList}>
            <input type="text" ref={titleInput} />
            <input type="submit" value="Add Movie"/>
        </form>
    )
}
