import axios from "axios";
const URL = "http://localhost:3001/persons";

const getPersons = () => {
  return axios.get(URL).then((res) => res.data);
};

const addPerson = (person) => axios.post(URL, person);

const updatePerson = (person, number) => {
  const req = axios.put(`${URL}/${person[0].id}`, {
    name: person[0].name,
    number,
  });
  return req.then((res) => res.data);
};

const deletePerson = (person) => axios.delete(`${URL}/${person.id}`);

export { getPersons, addPerson, deletePerson, updatePerson };
