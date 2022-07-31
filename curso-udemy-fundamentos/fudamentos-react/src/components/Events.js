const Events = () => {

    const handleMyEvent = () => {
        window.alert('Something');

    };

    {/* Renderizando jsx abaixo */}

    const renderSomething = (x) => {

        if (x) {
            return <h1>Isso for renderizado!</h1>
        }else {
            return <h2>Isso tambem foi renderizado!</h2>
        }

    };


    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div> 

            {/*Chamando funcao de renderizacao */}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>

    );
};

export default Events;