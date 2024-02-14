import { useState } from "react"
const Form=(props)=>{
    const {addExpenses}  = props
    const[title,setTitle]=useState('')
    const[amount,setAmount]=useState(0)
    const [error,setError]=useState ({}) 
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(title,amount)
        let err={}
        if(title.length<3){
           err.title= "title charac shld be greater than 3"
          
        }
        if(!amount){
            err.amount='enter the valid amt'
           
        }
        if(Object.keys(err).length > 0){
            setError({...err})
            return 
        }

        addExpenses(title,amount)
    }
    const handleTitleChange=(e)=>{
        setTitle(e.target.value)
         setError({...error ,title:''})
    }
    const handleAmountChange=(e)=>{
        setAmount(parseInt(e.target.value))
        setError({...error ,amount:''})
    }
    
    return(
        <>
        <form onSubmit={handleSubmit}>
          <div class="form">
    <div class="outerbox">
      <div class="reason"><label htmlFor="title">Title:</label>
      <span class="textbox"><input type="text" id="title" value={title} onChange={handleTitleChange}/></span>
      {error.title?<div class="error1">{error.title}</div>:null}</div>
      <div class="cost"><label htmlFor="amount">Spend:</label>
      <span class="textbox"><input type="number" id="amount" value={amount} onChange={handleAmountChange}/></span>
      {error.title?<div class="error2">{error.amount}</div>:null} </div>
      <div class="submit"><button onClick >Submit</button></div>
    </div>
   
       
  </div>
  </form>
        </>
    )

}
export default Form