import { useState } from "react";
import { Logo } from "./logo";
import { Form } from "./form";
import { PackingList } from "./packinglist";
import { Stats } from "./stats";

function App() {
  const [items, setItems] = useState([]);
  const[sort ,setSort] = useState("input")

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleStatus(id) { 
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  }

  function handleClearAll(){
    setItems([]);
    
  }
    const sortedItems =
    sort === "input"
      ? items
      : [...items].sort((a, b) => {
          if (sort === "description")
            return a.description.localeCompare(b.description);
          if (sort === "packed")
            return a.isPacked === b.isPacked ? 0 : a.isPacked ? 1 : -1;
          return 0;
        });

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} items={items} />
      <PackingList items={sortedItems} handleDelete={handleDelete}  handleStatus={handleStatus}  handleClearAll={handleClearAll} setSort={setSort} sort={sort}/>
      <Stats items={items}/>
    </div>
  );
}





export default App;


