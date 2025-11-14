import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then(res => res.data)

const create = (newPerson) => axios.post(baseUrl, newPerson).then(res => res.data)

const deleteContact = (id) => axios.delete(`${baseUrl}/${id}`).then(res => res.data)

const updateContact = (changedPerson) => {
  const url = `${baseUrl}/${changedPerson.id}`
  return axios.put(url, changedPerson).then(res => res.data)
}

export default { getAll, create, deleteContact, updateContact}