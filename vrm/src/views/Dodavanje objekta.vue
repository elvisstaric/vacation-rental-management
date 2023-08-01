<template>
  <div class="about">
    <h1>Dodavanje objekta</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="naziv_obj">Naziv</label>
              <input
                type="naziv_obj"
                class="form-control"
                id="naziv_obj"
                placeholder="Naziv"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="adresa_obj">Adresa</label>
              <input
                type="adresa_obj"
                class="form-control"
                id="adresa_obj"
                placeholder="Adresa"
              />
              <br />
            </div>
            <label for="vrsta_obj">Vrsta</label>
            <div class="form-group">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="opcija-kuca"
                  value="opcija-kuca"
                />
                <label class="form-check-label" for="opcija-kuca"
                  >Kuća za odmor</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="opcija-app"
                  value="opcija-app"
                />
                <label class="form-check-label" for="opcija-app"
                  >Apartman</label
                >
              </div>

              <br />
            </div>
            <div class="form-group">
              <label for="kapacitet_obj">Kapacitet</label>
              <input
                type="number"
                class="form-control"
                id="kapacitet_obj"
                placeholder="Kapacitet"
              />
              <br />
            </div>

            <button type="submit" class="btn btn-primary">Dodaj</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
