const Expenseitem=(props)=>{
    const {id, title,amount,deleteExpense}=props
 const  handleDelete=()=>{
        deleteExpense(id)
    }

    return(
        <>
        <div class="exp-item-container">
        <div class={`expense_items ${amount>0?'positive':'negative'}`}>
            <div class="ex-type">{title} </div>
            <div class="amt">{amount}
            </div>
        </div>
        <button class=" delete"onClick={handleDelete}>Delete</button>

        </div>
        </>
    )
}
export default Expenseitem
