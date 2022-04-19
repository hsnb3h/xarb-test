const { User, Transaction } = require("../models/model");

const getBalance = async (req, res) => {
  if (!req.body.userId) {
    return res.status(422).json({
      userId: "userId is required",
    });
  }
  const userId = req.body.userId;

  user = await User.findByPk(userId);
  userBalance = user.dataValues.walletBalance;

  return res.status(200).json({
    userId: userId,
    userBalance: userBalance,
  });
};

const addMoney = (req, res) => {
  if (!req.body.userId || !req.body.amount) {
    return res.status(422).json({
      userId: "userId is required",
      amount: "amount is required",
    });
  }

  const userId = req.body.userId;
  const amount = req.body.amount;

  user = User.findByPk(userId).then((user) => {
    if (!user) {
      throw new Error("No user found");
    }
    newBalance = parseInt(user.dataValues.walletBalance) + parseInt(amount);
    newValues = {
      walletBalance: newBalance,
    };
    user.update(newValues).then((updatedRecord) => {
      Transaction.create({
        userUserId: userId,
      }).then((newTransaction) => {
        transactionRefId = newTransaction.dataValues.transaction_id
        return res.status(200).json({
          reference_id: transactionRefId
        })
      });
    });
  });
};

module.exports = {
  getBalance,
  addMoney,
};
