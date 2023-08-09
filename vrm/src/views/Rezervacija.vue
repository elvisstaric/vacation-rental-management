<template>
  <div class="about">
    <h1>Rezervacija</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="nositelj">Ime nositelja</label>
              <p>Nositelj</p>
              <br />
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label for="datum_od">Rezervacija od</label>
                  <p>Od</p>
                </div>
                <div class="col-6">
                  <label for="datum_do">Rezervacija do</label>
                  <p>Do</p>
                </div>
              </div>
            </div>
            <br />
            <label for="status_naplate">Status naplate</label>
            <br />
            <div class="form-group">
              <div class="form-check form-check-inline">
                <p>Status</p>
              </div>
            </div>
            <br />
            <div class="form-group">
              <label for="iznos">Iznos</label>
              <p>Iznos</p>
              <br />
            </div>
            <br />
            <button type="button" class="btn btn-primary">Dodaj</button>
            <br />
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
