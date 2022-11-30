const AddItem = ({ handleSubmit, newItem, setNewItem, editing }) => {
  return (
    <form onSubmit={handleSubmit} className='mb-2'>
      <input
        className='py-1 rounded focus:outline-none pl-3'
        type='text'
        value={newItem}
        autoFocus
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type='submit'
        className={`${
          editing ? 'bg-pink-500' : 'bg-blue-600'
        } text-white px-2 font-bold py-1 ml-1 rounded`}
      >
        {editing ? 'Save' : 'Add'}
      </button>
    </form>
  )
}
export default AddItem
