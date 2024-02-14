import axios from "axios";
import Expenseitem from "./components/Expenseitem"
import Form from "./components/Form";
import { useEffect, useState } from "react"
const App=()=>{
  // const title="food"
  // const amount=100
  
 const [arr ,setExpenses]=useState([])

  let income=0;
  let expenditure=0;
  useEffect(()=>{
    axios.get('https://expensetrackerpro-api.onrender.com/get-entry').then(res=>{
      console.log(res.data)
      setExpenses(res.data)
    }).catch(err=>{console.log(err)})
  },[])
   
  const addExpenses=(title,amount)=>{
     setExpenses([...arr,{title:title,amount:amount}])
  }
  const deleteExpense = (id)=>{
    setExpenses(arr.filter((exp)=>exp.id!==id))
  }
  
  arr.forEach((ele)=>{
    if(ele.amount>0){
      income+=ele.amount
    }
    else{
      expenditure+=ele.amount
    }
  })
  let total=expenditure+income
 
 return (
  <>
  
  <div class='container'>
    <div class='balance'> <span class="titles">Balance</span>
    <span>{total}</span></div>

       <div class="in-ex">
            <div class="in"> 
              <span class="titles">Income</span>
              <span>{income}</span>
            </div>
            <div class="line"></div>
            <div class="ex">
              <span class="titles">Expense</span>
              <span>{expenditure}</span> </div>
            </div>
            <Form addExpenses = {addExpenses}/>         
  { arr.map((expenses) => (<Expenseitem key={expenses.id} title= {expenses.title} amount = {expenses.amount} id={expenses.id}  deleteExpense={deleteExpense}/>
  ))}
 </div>
  </>
)}
export default App

