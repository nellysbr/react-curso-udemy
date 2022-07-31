import {useState} from 'react';

const ConditionalRender = () => {

    const [x] = useState(true);

    const [name] = useState('Joao');

  return (
    <div>
        {x && <p>Se x for true, imprime na tela!</p>}
        {!x && <p>Agora x eh falso!</p>} {/* negacao !x */}

        {name === "Joao" ? (
            <div>
                <p>O nome e Joao</p>
            </div>
            
        ) : (
            <div>
                <p>O nome e diferente de Joao</p>
            </div>
        )}
    </div>
  );
};

export default ConditionalRender;