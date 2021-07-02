export default class CurrencyExchange {
  static async getExchangeRate() {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`
      );
      if (!response.ok) {
        throw Error(response);
      }
      return response.json();
    } catch (error) {
      return `Unfortunately, we were unable to complete the request due to ${error}`;
    }
  }
}
