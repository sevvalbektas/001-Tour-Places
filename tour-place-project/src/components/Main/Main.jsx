import './Main.scss';
// data.js de başta export yaptığı için bu şekilde import ediyoruz
import {data} from '../../helper/data';

import Card from './Card';

const Main = () => {
    
    return(
        <div className="card-container">
            <div className="card-container">
                {data.map((item) => <Card {...item} />
                )}
            </div>
        </div>
    )
}

export default Main;