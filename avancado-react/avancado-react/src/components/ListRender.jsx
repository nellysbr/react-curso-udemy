import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(['matheus', 'pedro', 'nelson']);


    {/*Array de obejetos como se fosse pegar do banco de dados */}

    const [users, setUsers] = useState([
        {id: 1, name: 'nelson', email: 'nelson@nelson.com'},
        {id: 2, name: 'Bruno', email: 'bruno@bruno.com'},
        {id: 3, name: 'herica', email: 'herica@herica.com'},
        {id: 4, name: 'ana', email: 'ana@ana.com'},
    ]);

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUser) => {
            return prevUser.filter((user) => randomNumber !== user.id)
        })
    };


  return (
    <div>
        <ul>
            {/*Quando utilizar objeto no map, utilizar () no lugar de {} */}
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        {/*Iteracao como se fosse pegar do banco de dados*/}
        <ul>
            {users.map((users) => (
                <li key={users.id}>{users.name} - {users.email}</li>
            ))}
        </ul>

        <button onClick={deleteRandom}>Deletar usuario aleatorio</button>
    </div>
  );
};

export default ListRender