
function Keypad (){

    function handleChange(){
        console.log('Entering password...')
    }

    return (
        <div>
            <form>
                <label>Input: </label>
                <input type="password" onChange={handleChange}></input>
            </form>
        </div>
    )
}

export default Keypad;