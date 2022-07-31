import {useState} from 'react'

const ManageData = () => {

    let somaData = 10;

    const [number, setNumber] = useState(somaData);

  return (
    <div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => {setNumber(45);}}>Mudar variavel</button>
        </div>
    </div>
  );
};

export default ManageData;