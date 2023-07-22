import { XLg, CheckLg, CurrencyDollar } from 'react-bootstrap-icons';

function Card({card}) {
	return(
     <div className="col">
    <div className="card h-100 ms-5 mt-5" style={{width: "25rem"}}>
      <div className="card-header">
       <p className="text-secondary">{card.plan}</p>
       <p> <span className="display-3"> <CurrencyDollar />{card.cost}</span>/month </p>
      </div>
       <div className="card-body">
        <ul style={{ listStyleType: "none" , textAlign:"left" }} className="card-text">
         {
         	card.features.map(list => <li><p className={list.value ? "" :"text-secondary"}>{list.value ? <CheckLg /> : <XLg />}   {list.text}</p></li>)
         }
        </ul>
      </div>
      <button type="button" className="btn btn-primary btn-block mx-3 my-3">Button</button>
     </div>
  </div>
	);
}

export default Card;