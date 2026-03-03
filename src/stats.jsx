export function Stats({items}) {
  const numberOfitems = items.length;
  const numberOfPackeditems = items.filter((item)=>
    item.isPacked===true)
  .length;
  const percentage =Math.round((numberOfPackeditems/numberOfitems) * 100);
  if (numberOfitems == 0 ) {
    return <em className="stats">
    Please start adding items in your list</em>
   
  }
  if (percentage === 100) {
    
    return <em className="stats">
    You have everything to go
    </em>
  }
  if (numberOfitems >0 ){
  return <em className="stats">
  💼 You have {numberOfitems} items on your list, and you already packed {" "}
        {numberOfPackeditems} and percentage is {percentage}%
  </em>
    
  };
  return (
    <footer className="stats">
      <em>
        💼 You have {numberOfitems} items on your list, and you already packed {""}
        {numberOfPackeditems} and percentage is  {percentage}%
      </em>
    </footer>
  );
}