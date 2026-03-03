
export function Item({ item, handleDelete,handleStatus }) {
  const { quantity, description, id,isPacked } = item;
  return (
    <li>
      <input type="checkbox" 
      onChange={()=>{handleStatus(id)}}
      checked={isPacked}
      />
      <span style={{textDecoration:isPacked ? "line-through":"none"}}>
        {quantity} {description}
      </span>
      <button onClick={() => handleDelete(id)}>❌</button>
    </li>
    
  );
}
export function PackingList({ items, handleDelete ,handleStatus,handleClearAll,sort,setSort}) {
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <Item key={index} item={item} handleDelete={handleDelete} handleStatus={handleStatus} handleClearAll={handleClearAll}/>
        ))}
      </ul>
      <select  className="selection" value={sort}
      onChange={(e)=>setSort(e.target.value)}>
        <option value="input" >Sort By Input</option>
        <option value="description" >Sort By Description</option>
        <option value="packed" >Sort By Packing</option>
      </select>
      <button className="clear" onClick={handleClearAll}>Clear All</button>
    </div>
   
  );
}