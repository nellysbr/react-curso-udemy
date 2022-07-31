const TemplateExpressions = () => {

    const name = "Nelson";
    const data = {
        
            age: 31,
            job: "programador"
        
    }

    return (

        <div>
            {/*Template expressions (js direto jsx*/}
            
            <h1>Olá {name}, tudo bem ?</h1>
            <p>Voce tem {data.age} anos e atua como {data.job}</p>
        </div>
    );

};

export default TemplateExpressions;