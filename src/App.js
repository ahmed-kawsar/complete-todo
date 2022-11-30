import { useEffect, useState } from 'react'
import AddItem from './components/AddItem'
import ListItem from './components/ListItem'

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(items))
  }, [items])
  const [newItem, setNewItem] = useState('')
  const [editing, setEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    if (editing && newItem) {
      setItems(
        items.map((item) => {
          if (item.id === editId) {
            return { ...item, item: newItem }
          }
          return item
        })
      )
      setNewItem('')
      setEditId(null)
      setEditing(false)
    } else {
      setItems([
        ...items,
        {
          id: items.length ? items[items.length - 1].id + 1 : 1,
          item: newItem,
          checked: false,
        },
      ])
    }
    setNewItem('')
  }

  const handleEdit = (id) => {
    const specificItem = items.find((item) => item.id === id)
    setEditing(true)
    setNewItem(specificItem.item)
    setEditId(id)
  }

  const handleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold my-4'>Todos</h1>
      <main className='bg-blue-100 p-2 border-4 border-blue-200'>
        <AddItem
          newItem={newItem}
          editing={editing}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <ListItem
          items={items}
          handleCheck={handleCheck}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  )
}
export default App
