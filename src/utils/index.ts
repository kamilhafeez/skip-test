export const formatPrice = (price: number, currency = 'GBP') => {
  return price.toLocaleString(navigator.language, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
