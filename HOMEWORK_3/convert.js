class Convert {
    constructor() {
      console.log("Convert");
    }
    fromCelcius(to, hasil) {
      if (to == "celcius") {
        return hasil;
      }
      if (to == "reamur") {
        return (4 / 5) * hasil;
      }
      if (to == "farenheit") {
        return (9 / 5) * hasil + 32;
      }
    }
    fromReamur(to, hasil) {
      if (to == "reamur") {
        return hasil;
      }
      if (to == "celcius") {
        return (5 / 4) * hasil;
      }
      if (to == "farenheit") {
        return (9 / 4) * hasil + 32;
      }
    }
    fromFarenheit(to, hasil) {
      if (to == "farenheit") {
        return hasil;
      }
      if (to == "celcius") {
        return (5 / 9) * (hasil - 32);
      }
      if (to == "reamur") {
        return (4 / 9) * (hasil - 32);
      }
    }
  }
  
  module.exports = Convert;
  