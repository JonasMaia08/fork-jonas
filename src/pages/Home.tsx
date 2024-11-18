
import Navbar from '../components/navbars/NavbarHome';

export default function Home() {
    return (
        <>
            <Navbar />

            <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: 'url(/background.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white space-y-4">
                        <h1 className="text-4xl font-bold">ESPORTE NA CIDADE</h1>
                        <p>Uma iniciativa da Prefeitura da cidade de Potim para o incentivo e apoio ao esporte</p>
                        <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">Saiba Mais</button>
                    </div>
                </div>
            </section>

            <section className="bg-[#F4F6FF] py-16">
                <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <img src="/fotoHome.jpg" alt="Modalidades" className="rounded-lg shadow-md" />
                    <div>
                        <h2 className="text-3xl font-bold mb-4">MODALIDADES</h2>
                        <p className="mb-6">
                            A iniciativa através de professores e voluntários capacitados abrange as seguintes modalidades esportivas.
                        </p>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Ver Mais</button>
                    </div>
                </div>
            </section>
        </>
    )
}