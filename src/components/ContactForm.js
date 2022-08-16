export default function ContacForm() {
  const arrayInput = [
    { name: "Nombre Completo", for: "name", type: "text", id: "1" },
    { name: "Correo Electrónico", for: "email", type: "email", id: "2" },
    { name: "Número de Contacto", for: "tel", type: "tel", id: "3" },
    { name: "Asunto", for: "Asunto", type: "text", id: "4" },
  ];
  return (
    <div class="my-5">
      <h1 className="pb-lg-5 text-center">Contacto</h1>
      <div class="d-flex ">
        <div className="col-lg-5 text-center align-self-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13323.358625728875!2d-70.6297483!3d-33.4013472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8026b79af4e4e694!2sCentro%20educacional%20Escuela%20Arturo%20Perez%20Canto%20A-34!5e0!3m2!1ses-419!2scl!4v1659932540839!5m2!1ses-419!2scl"
            width="400"
            height="300"
          ></iframe>
        </div>
        <div className="col-lg-5 text-center align-self-center">
          <form>
            {arrayInput.map((datos) => {
              return (
                <div className=" mb-1 mb-lg-3 row " key={datos.id}>
                  <label
                    htmlFor={datos.for}
                    className="col-lg-4 col-form-label "
                  >
                    {datos.name}
                  </label>
                  <div className="col-lg-8 ">
                    <input
                      type={datos.type}
                      className="form-control form-control-sm"
                      id={datos.for}
                    />
                  </div>
                </div>
              );
            })}
            <div className="mb-3 row">
              <label htmlFor="mensaje" className="form-label col-lg-4">
                Mensaje
              </label>
              <div className="col-lg-8">
                <textarea
                  className="form-control "
                  id="text"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="col-12 d-flex ">
              <div className="mb-3 form-check col-sm-4 d-none d-lg-flex">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="exampleCheck1"
                >
                  No soy un robot
                </label>
              </div>
              <div className="col-8 px-2 d-lg-flex justify-content-sm-evenly">
                <a
                  type="submit"
                  className="btn btn-primary d-block"
                  href="#"
                >
                  Enviar
                </a>
                <a
                  type="submit"
                  className="mt-3 mt-sm-0 btn btn-primary d-block"
                  href="#"
                >
                  Limpiar
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
