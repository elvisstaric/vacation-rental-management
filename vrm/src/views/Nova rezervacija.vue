<template>
  <div class="about">
    <h1>Nova rezervacija</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="nositelj">Ime nositelja</label>
              <input
                type="text"
                class="form-control"
                id="nositelj"
                placeholder="Ime nositelja"
              />
              <br />
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label for="datum_od">Rezervacija od</label>
                  <input
                    type="date"
                    class="form-control"
                    id="datum_od"
                    placeholder="Rezervacija od"
                  />
                </div>
                <div class="col-6">
                  <label for="datum_do">Rezervacija do</label>
                  <input
                    type="date"
                    class="form-control"
                    id="datum_do"
                    placeholder="Rezervacija do"
                  />
                </div>
              </div>
            </div>
            <br />
            <label for="status_naplate">Status naplate</label>
            <br />
            <div class="form-group">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="opcija-u_cijelosti"
                  value="opcija-u_cijelosti"
                />
                <label class="form-check-label" for="opcija-u_cijelosti"
                  >Plaćeno</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="opcija-predujam"
                  value="opcija-predujam"
                />
                <label class="form-check-label" for="opcija-predujam"
                  >Plaćen predujam</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="opcija-nije_naplaceno"
                  value="opcija-nije_naplaceno"
                />
                <label class="form-check-label" for="opcija-nije_naplaceno"
                  >Nije plaćeno
                </label>
              </div>
            </div>
            <br />
            <div class="form-group">
              <label for="iznos">Iznos</label>
              <input
                type="number"
                step="0.01"
                class="form-control"
                id="iznos"
                placeholder="Iznos"
              />
              <br />
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
