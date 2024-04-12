import { Helmet } from 'react-helmet-async';
import Estates from './Estates';
import Header from './Header';
import Succes from '../Succes';
import CoveredArea from '../CoveredArea';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>kState || Home</title>
            </Helmet>
            <div className='h-fit'>
            <Header></Header>
            </div>
            <Estates></Estates>
            <Succes></Succes>
            <CoveredArea></CoveredArea>
        </div>
    );
};

export default Home;