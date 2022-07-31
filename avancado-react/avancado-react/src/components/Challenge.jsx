
const Challenge = () => {

  let num1 = 5;
  let num2 = 10;

    const sumNumber = () => {

        return console.log(num1 + num2);

    };

  return (

    <div>
        <div>
            <p>Valor do numero 01: {num1}</p>
            <p>Valor do numero 02: {num2}</p>
        </div>
       <div>
            <button onClick={sumNumber}> Clique para a soma </button>
       </div>
    </div>
  );
};

export default Challenge;