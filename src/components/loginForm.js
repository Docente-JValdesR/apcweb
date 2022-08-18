import logo from "../assets/logo.jpg";
export default function loginForm() {
  return (
    <div className="container-fluid bg-light login">
      <div className="row vh-100 justify-content-center align-content-center">
        <form className="col-lg-3 col-10  shadow-lg md-5 bg-white p-5 rounded login-form">
          <div className=" text-center">
            <img src={logo} className="img-fluid mb-5" alt="logo" />
          </div>
          <div class="mb-3">
            <label for="emai1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Ingresa tu correo electrónico.
            </div>
          </div>
          <div class="mb-3">
            <select class="form-select" aria-label="Default select example">
              <option selected>Selecciona tu rol</option>
              <option value="administrador">Administrador</option>
              <option value="docente">Docente</option>
              <option value="alumno">Alumno</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">
              Contraseña
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              aria-describedby="passwordHelp"

 />
             <div id="passwordHelp" class="form-text">
              Nunca compartas tu contraseña
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
