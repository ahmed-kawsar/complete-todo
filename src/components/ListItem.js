const ListItem = ({ items, handleCheck, handleEdit, handleDelete }) => {
  return (
    <ul>
      {items.length < 1 ? (
        <p className='text-center py-2'>No Todo Here</p>
      ) : null}
      {items.map((item) => (
        <li
          key={item.id}
          className='my-1 bg-white px-2 py-1 grid grid-cols-6 items-center rounded'
        >
          <input
            className='col-span-1'
            type='checkbox'
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
          />
          <label
            className={`bg-white col-span-3 ${
              item.checked ? 'line-through' : null
            }`}
          >
            {item.item}
          </label>
          <button
            className='bg-pink-400 col-span-1 ml-1 p-1 text-white font-bold text-sm rounded-sm hover:bg-pink-500'
            onClick={() => handleEdit(item.id)}
          >
            edit
          </button>
          <button
            className='bg-red-800 col-span-1 ml-1 p-1 text-white font-bold text-sm rounded-sm hover:bg-red-900'
            onClick={() => handleDelete(item.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}
export default ListItem
