import '../styles/Form.css';
import { useState } from 'react';

const Form = ({user}) => {

    //gerenciamento de dados - Utiliza o useState

    const [name, setname] = useState(user ? user.name : ''); //recebendo como prop - simulado como se fosse um valor do BD
    const [email, setemail] = useState(user ? user.email : ''); //recebendo como prop - simulado como se fosse um valor do BD
    const [bio, setbio] = useState();
    const [role, setrole] = useState();

    const handleName = (e) => {
        setname(e.target.value);
    };

    const handleEmail = (e) => {
        setemail(e.target.value);
    };

    const handleBio = (e) => {
        setbio(e.target.value);
    };

    const handleRole = (e) => {
        setrole(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulario");
        console.log(name, email, bio, role);

        // limpar form apos envio dos dados

        setname("");
        setemail("");
        setbio("");
    };


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" name="name" placeholder="Digite o seu nome completo" value={name} onChange={handleName} />
            </label>  
            {/* Recomendado pelo React */}

            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder="Digite um email valido" value={email} onChange={handleEmail}/>
            </label>

            <label>
                <span>Biografia</span>
                <textarea name="bio" placeholder="Biografia" onChange={handleBio} value={bio}></textarea>
            </label>
            <label>
                <span className="select-form-label">Funcao no sistema</span>
                <select name="role" onChange={handleRole} value={role}>
                    <option value="user">Usuario</option>
                    <option value="email">Administrador</option>
                    <option value="editor">Editor</option>
                </select>
            </label>


            <input id="enviar-btn" type="submit" value="Enviar" />
            <input id="reset-btn" type="reset" value="Limpar formulario" />
        </form>
    </div>
  );
};

export default Form