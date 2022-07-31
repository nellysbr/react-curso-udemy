const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <div>
            <h1>Detalhes do usuario - Desafio</h1>
        </div>
        <div>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Profissao: {job}</li>
                {age >= 18 ? (
                        <li><p>Esta apto para retirar habilitação</p></li>
                    ) : (
                        <li><p>Ainda é menor de idade</p></li>
                    ) 
                    }
            </ul>
        </div>
    </div>
  );
};

export default UserDetails;