import StockTransaction from "../model/stockTransaction.model.js";

export const buyStock = async (req, res) => {
  try {
    const { userId, stockSymbol, quantity, price } = req.body;
    const transaction = await StockTransaction.create({
      userId,
      stockSymbol,
      transactionType: "buy",
      quantity,
      price,
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const sellStock = async (req, res) => {
  try {
    const { userId, stockSymbol, quantity, price } = req.body;
    const transaction = await StockTransaction.create({
      userId,
      stockSymbol,
      transactionType: "sell",
      quantity,
      price,
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
