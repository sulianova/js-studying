const rates = {
  usd: {
    eur: 0.7,
  },
  eur: {
    usd: 1.2,
  },
};

function Money (value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
  const currency = this.getCurrency();
  const currentValue = this.getValue();
  if (currency === newCurrency) {
    return new Money(currentValue, currency);
  }
  const newValue = currentValue * rates[currency][newCurrency];
  return new Money(newValue, newCurrency);
};

Money.prototype.add = function add(money) {
const currency = this.getCurrency();
const convertedMoney = money.exchangeTo(currency);
const additionalValue = convertedMoney.getValue();
return new Money(this.getValue() + additionalValue, currency);
};

Money.prototype.format = function format() {
return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
};