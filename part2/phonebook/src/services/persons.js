import axios from "axios";
const URL = "http://localhost:3001/persons";

const getPersons = () => {
  return axios.get(URL).then((res) => res.data);
};

const addPerson = (person) => axios.post(URL, person);

const updatePerson = (person, number, setErrMsg) => {
  axios
    .put(`${URL}/${person[0].id}`, {
      name: person[0].name,
      number,
    })
    .catch((err) => setErrMsg("err"));
};

const deletePerson = (person) => axios.delete(`${URL}/${person.id}`);

export { getPersons, addPerson, deletePerson, updatePerson };
