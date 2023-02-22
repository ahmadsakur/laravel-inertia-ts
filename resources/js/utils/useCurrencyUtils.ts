export function formatCurrency(currency) {
  // Remove non-numeric characters from the currency string
  const numericString = currency.replace(/\D/g, "");

  // Convert the numeric string to a number
  const numericValue = Number(numericString);

  // Return the numeric value
  return numericValue;
}

export function setRupiahPrice(numericValue) {
  const discountPrice = numericValue + 10000;
  // Convert the numeric value to a string with commas
  const numberWithCommas = discountPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Add the currency symbol and return the formatted string
  return "Rp " + numberWithCommas;
}

function getLiraPrice(quantity) {
  let price = 0;
  switch(true) {
    case (quantity <= 25):
      price = quantity * 1350;
      break;
    case (quantity <= 50):
      price = quantity * 1250;
      break;
    case (quantity <= 75):
      price = quantity * 1200;
      break;
    case (quantity <= 100):
      price = quantity * 1150;
      break;
    case (quantity <= 500):
      price = quantity * 1100;
      break;
    case (quantity <= 750):
      price = quantity * 1075;
      break;
    case (quantity <= 1000):
      price = quantity * 1050;
      break;
    default:
      price = quantity * 1000;
      break;
  }
  return price;
}


export function setLiraPrice(num) {
  const price = getLiraPrice(num / 100)
  const numberWithCommas = price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if(numberWithCommas === "0") return "Free";
  let numWithoutDecimal = numberWithCommas.replace(/\.\d*/, "");
  return "Rp " + numWithoutDecimal;
}
