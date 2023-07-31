<template>
  <div class="about">
    <h1>Registracija</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Ime</label>
              <input
                type="ime"
                class="form-control"
                id="ime"
                placeholder="Ime"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="prezime">Prezime</label>
              <input
                type="prezime"
                class="form-control"
                id="prezime"
                placeholder="Prezime"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="E-mail(netko@example.com)"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Lozinka</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Lozinka"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="exampleInputPasswordctrl">Potvrda lozinke</label>
              <input
                type="passwordctrl"
                class="form-control"
                id="exampleInputPasswordctrl"
                placeholder="Potvrda lozinke"
              />
            </div>
            <br />
            <button type="submit" class="btn btn-primary">Registracija</button>
            <br />
            <small id="emailHelp" class="form-text text-muted"
              >Već imate račun?
              <router-link to="/login">Prijavite se.</router-link></small
            >
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
