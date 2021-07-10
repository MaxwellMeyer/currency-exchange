export default class CurrencyExchange {
  static async getExchangeRate() {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/f77fc57ce905a65/latest/USD`
      );
      if (!response.ok) {
        console.log(response);
        throw Error(response);
      }
      return response.json();
    } catch (Error) {
      return `Unfortunately, we were unable to complete the request due to a network error.`;
    }
  }
}
