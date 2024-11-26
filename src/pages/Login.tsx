import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const Login = ()=>  {
    return (
        <>
            <Header/>
            <div className="flex justify-center items-center gap-9">
                <div className="relative lg:block hidden bg-[#1C1919] bg-opacity-80 w-[753px] h-[491px] rounded-2xl">
                    <div className="flex flex-col justify-center items-center h-full pb-32 px-6 max-w-[550px]">
                        <h1 className="text-[40px] text-white font-bold tracking-[0.1em] leading-tight uppercase mb-4">¡Bienvenido
                            a <span className="text-[#E169E3]">KIRBY </span><span
                                className="text-[#5990D2]">PREGUNTA</span>!
                        </h1>
                        <div className="text-[20px] text-white font-semibold tracking-tight">
                            <p>¿Listo para desafiar tu curiosidad?</p>
                            <p>Explora el universo del conocimiento con nuestro adorable Kirby.</p>
                        </div>
                    </div>
                    <img className="absolute -bottom-20 -right-12 w-[350px] h-[350px]" src={"/public/kirbyInicio.png"}
                         alt={'Kirby inicio'}/>
                </div>
                <div
                    className="relative bg-[#1C1919] bg-opacity-80 w-[321px] lg:w-[350px] h-[491px] rounded-2xl flex flex-col gap-y-6 items-center justify-center">
                    <h1 className="text-white text-[25px] font-semibold tracking-[2px] uppercase">Iniciar sesión</h1>
                    <form action="/user/login" method="post" encType="multipart/form-data"
                          className="flex flex-col gap-y-6">
                        <input
                            className="bg-[#252121] rounded-[10px] w-[280px] h-[60px] text-left px-2 outline-0 text-white"
                            placeholder="Usuario" id="username" name="login_username"/>
                        <input
                            className="bg-[#252121] rounded-[10px] w-[280px] h-[60px] text-left px-2 outline-0 text-white"
                            type="password" placeholder="Password" id="password" name="login_password"/>
                        <button
                            className="bg-[#252121] rounded-[10px] w-[280px] h-[60px] text-left px-2 outline-0 text-white text-center uppercase tracking-[2px]"
                            name='login' value="Login">Ingresar
                        </button>
                    </form>
                    <p className="text-[12px] font-bold text-white">¿No tiene una cuenta? <a className="text-[#92D7F4]"
                                                                                             href="/register">Registrate
                        aca</a></p>
                    <img
                        className="absolute w-[100px] h-[100px]  lg:w-[160px] lg:h-[184px] bottom-0 -right-8 lg:-right-16"
                        src={"/public/pngwingLogin.png"} alt={'Login'}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}