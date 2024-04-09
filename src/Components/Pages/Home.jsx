import Estates from './Estates';
import Header from './Header';
const Home = () => {
    return (
        <div>
            <div className='min-h-screen'>
            <Header></Header>
            </div>
            <Estates></Estates>
        </div>
    );
};

export default Home;