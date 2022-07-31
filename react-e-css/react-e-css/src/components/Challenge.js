import '../styles/Challenge.css';

const Challenge = ({brand, km, cor, newCar}) => {

    const usedCar = true;

  return (
    <div className="carContent">
        <ul className="car-details">
            <li>{brand}</li>
            <li>{km}</li>
            <li>{cor}</li>
            <li>{newCar ? (<p className="usedCar01">Carro novo!</p>) : (<p className="usedCar02">Carro usado!</p>)}</li>

        </ul>
    </div>
  )
}

export default Challenge;