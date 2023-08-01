<template>
  <div class="about">
    <h1>Dodavanje personala</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="ime">Ime</label>
              <input
                type="text"
                class="form-control"
                id="ime"
                placeholder="Ime"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="prezime">Prezime</label>
              <input
                type="text"
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
                placeholder="E-mail(netko@example.com)"
              />
              <br />
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-5">
                  <label for="ulica">Ulica</label>
                  <input
                    type="text"
                    class="form-control"
                    id="ulica"
                    placeholder="Ulica"
                  />
                </div>
                <div class="col-3">
                  <label for="kbroj">Kućni broj</label>
                  <input
                    type="number"
                    class="form-control"
                    id="kbroj"
                    placeholder="Kućni broj"
                  />
                </div>
                <div class="col-4">
                  <label for="pbr">Poštanski broj</label>
                  <input
                    type="number"
                    class="form-control"
                    id="pbr"
                    placeholder="Poštanski broj"
                  />
                </div>
              </div>
            </div>
            <br />
            <div class="form-group">
              <label for="satnica">Satnica</label>
              <input
                type="number"
                class="form-control"
                id="satnica"
                placeholder="Satnica"
              />
            </div>
            <br />
            <button type="submit" class="btn btn-primary">Dodaj</button>
            <br />
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
