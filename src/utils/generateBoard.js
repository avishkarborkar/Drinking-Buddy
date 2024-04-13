
const generateBoard = (value = 16) => {
  
    const result = [];
    const drinkIndex = Math.floor(Math.random()*value)
    for(let i = 0; i < value; i++)
    {
        if(drinkIndex === i){
            result.push(1)
        }else{
            result.push(0)
        }
    }

    return result;
}

export default generateBoard
