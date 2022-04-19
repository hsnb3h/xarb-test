// Include Sequelize module.
const Sequelize = require("sequelize");

// Import sequelize object,
// Database connection pool managed by Sequelize.
const sequelize = require("../db/db");

const User = sequelize.define(
  "user",
  {
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    walletBalance: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const Transaction = sequelize.define(
  "transaction",
  {
    transaction_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    created_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

User.hasMany(Transaction);
Transaction.belongsTo(User);

User.sync().then(() => {
  console.log("User table created");
});

Transaction.sync().then(() => {
  console.log("Transaction table created");
});

module.exports = {
  User,
  Transaction,
};
