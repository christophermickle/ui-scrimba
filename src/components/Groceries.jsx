import { createSignal, createEffect } from "solid-js";

function Groceries() {
  // Create a state signal to hold the list of grocery items
  const [items, setItems] = createSignal([]);

  // Create a state signal to hold the current input value
  const [inputValue, setInputValue] = createSignal("");

  // Define a function to handle adding a new item
  const addItem = () => {
    // Generate a unique ID for the new item
    const id = Date.now().toString();

    // Create a new item object with the ID and name
    const newItem = { id, name: inputValue() };

    // Update the items signal with the new item
    setItems([...items(), newItem]);

    // Clear the input field
    setInputValue("");
  };

  // Define a function to handle deleting an item
  const deleteItem = (itemId) => {
    // Filter out the item with the specified ID
    const updatedItems = items().filter((item) => item.id !== itemId);

    // Update the items signal with the filtered list
    setItems(updatedItems);
  };

  // Use a Solid effect to log the current list of items whenever it changes
  createEffect(() => {
    console.log("Current items:", items());
  });

  return (
    <>
      <div class='max-w-md mx-auto p-4'>
        {/* <h1 class='text-2xl font-bold mb-4'>Grocery List</h1> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addItem();
          }}
          class='flex mb-4'
        >
          <input
            type='text'
            placeholder='Enter a new item'
            value={inputValue()}
            onInput={(e) => setInputValue(e.target.value)}
            class='flex-1 rounded-l-lg py-2 px-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white'
          />
          <button
            type='submit'
            class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg'
          >
            Add
          </button>
        </form>
        <ul class='space-y-4'>
          {items().map((item) => (
            <li class='flex items-center justify-between' key={item.id}>
              <span class='text-gray-800'>{item.name}</span>
              <button
                type='button'
                onClick={() => deleteItem(item.id)}
                class='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Groceries;
