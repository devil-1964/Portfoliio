import { Hero, Portfolio, Services,About } from '../components'

const Home= () => {
    return (
        <main className='overflow-hidden'>
            <Hero/>
            <Services/>
            <About/>
            <Portfolio/>
        </main>
    )
}

export default Home;
