import React, { useState } from 'react'
import { LiaGlassMartiniAltSolid } from "react-icons/lia";
import generateBoard from '../utils/generateBoard';

const Board = ({setIsDrink}) => {

    const [board, setBoard] = useState(generateBoard())

    const handleSelect = (index) => {
        if(board[index] === 0){
            const updatedBoard = [...board]
            updatedBoard[index] = -1;
            setBoard(updatedBoard);
        }else{
            setIsDrink(true)
        }
    };


    return (
        <div className='grid grid-cols-4 gap-3 p-5'>
            {board.map((value, index) =>{
        return(
                <div className='w-full h-36 grid bg-slate-900
                place-content-center border-slate-400' key={index} onClick={()=>handleSelect(index)}
                >{value >= 0  && <LiaGlassMartiniAltSolid className='text-5xl text-purple-500' />}
                </div>
            )
        
    })}
    </div>
  )
}

export default Board
