const User = require("./model");

const addUsers = async (req, res) => {
  try {
    const { namaLengkap, umur, noHp } = req.body;
    const duplicateUser = await User.findOne({ namaLengkap });

    if (!namaLengkap || !umur || !noHp) {
      return res
        .status(400)
        .json({ message: "Harap mengisi semua kolom yang ada." });
    }

    if (duplicateUser) {
      return res.status(400).json({ message: "User sudah ada." });
    }

    const newUser = new User({
      namaLengkap,
      umur,
      noHp,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "Berhasil membuat user baru", payload: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json({
      message: "Berhasil mendapatkan semua data user",
      payload: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addUsers, getAllUsers };
