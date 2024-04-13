import { Helmet } from 'react-helmet-async';
import Estates from './Estates';
import Header from './Header';
import Succes from '../Succes';
import CoveredArea from '../CoveredArea';
const Home = () => {
    return (
        <section className='overflow-hidden'>
            <Helmet>
                <title>kState || Home</title>
            </Helmet>
            <div className='h-fit'>
            <Header></Header>
            </div>
            <Estates></Estates>
            <Succes></Succes>
            <CoveredArea></CoveredArea>
        </section>
    );
};

export default Home;