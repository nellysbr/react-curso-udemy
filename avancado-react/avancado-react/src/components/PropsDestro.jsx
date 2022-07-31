
const PropsDestro = ({brand, roaded, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>{brand}</li>
            <li>{roaded} Km</li>
            <li>{color}</li>
        </ul>
        {newCar ? (
            <div>
                <p>Este carro e novo!</p>
            </div>
        ) : (
            <div>
            <p>Este carro e usado!</p>
             </div>
        )}
    </div>
  );
};

export default PropsDestro;