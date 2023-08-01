<template>
  <div class="about">
    <h1>Prijava</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
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
            </div>
            <br />
            <button type="submit" class="btn btn-primary">Prijava</button>
            <br />
            <small id="emailHelp" class="form-text text-muted"
              >Nemate račun?
              <router-link to="/registracija"
                >Registrirajte se.</router-link
              ></small
            >
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
