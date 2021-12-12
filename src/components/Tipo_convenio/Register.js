export default function Register() {
    return (
      <section className="w-full py-12">
        <h1 className="text-center text-2xl font-semibold mb-8">
          Registrar tipo de convenio
        </h1>
        <form className="w-full max-w-lg mx-auto">
                    <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-representante"
              >
                Nombre
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-representante"
                type="text"
              />
            </div>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-300 font-bold py-2 px-4 rounded">
          Registrar
          </button>
        </form>
      </section>
    );
  }
  