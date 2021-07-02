export default class CurrencyExchange {
  static async getExchangeRate() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
    }
  }
}