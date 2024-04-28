import React, { useState, useEffect } from 'react';

function BoardList() {
    const [boards, setBoards] = useState([]);   
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/listBoardd/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            setBoards(data);
        };
        fetchData();
    }, [setBoards]);
  return (
    <div>
        {boards.map((board) => (
            <div key={board.id}>
            <h2>{board.title}</h2>
            {board.image && <img src={board.image} alt={board.title} />}
            <div dangerouslySetInnerHTML={{ __html: board.content }} style={{ color: 'black', backgroundColor: 'white' }} />
            </div>
        ))}
      
    </div>
  )
}

export default BoardList
