/**
 * Formats a number as a price string.
 * Example: 2500 -> "$2,500"
 * @param {number} amount
 * @returns {string}
 */
export function formatPrice(amount) {
  if (typeof amount !== "number") return "$0";
  
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "xaf",
    minimumFractionDigits: 0,
  });
}