import Menu from "../../components/Layout/Menu/Menu"
import Register from '../../components/Empresa/Register';
import Actions from '../../components/Actions/Actions';
import Footer from "../../components/Layout/Footer/Footer"
import Header from "../../components/Layout/Header/Header"

export default function register() {
    return(
        <>
            <Header/>
            <section className="">
                <main className="w-full flex flex-wrap">
                    <Menu/>
                    <section className="w-10/12 relative">
                        <Actions register="/registrar-empresa" update="/actualizar-empresa" list="/empresa"/>
                        <Register/>
                        <Footer/>
                    </section>
                </main>
            </section>
        </>
    );
}