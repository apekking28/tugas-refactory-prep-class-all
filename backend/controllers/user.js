const User = require("../models/user");

const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ message: "Data semua user", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const { firstName, lastName, address } = req.body;

    const oldUser = await User.findOne({ firstName });

    if (oldUser) {
      return res.status(400).json({ message: "Nama sudah terdaftar" });
    }

    const newUser = new User({
      firstName,
      lastName,
      address,
    });
    await newUser.save();
    res.status(200).json({ message: "berhasil mememasukan data" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, address } = req.body;

    const user = await User.findOne({ firstName });

    const updateMember = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body, updatedAt: new Date() }
    );

    if (!updateMember.modifiedCount && !updateMember.matchedCount) {
      return res.status(404).json({ message: "Nama tidak di temukan" });
    }

    if (user) {
      return res.status(400).json({ message: "Nama sudah ada" });
    }

    res.status(200).json({
      message: "Berhasil memperbarui user",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({ _id: req.params.id });

    if (!deleteUser.deletedCount) {
      return res.status(404).json({ message: "Member not found" });
    }

    return res.status(200).json({
      message: "Berhasil menghapus user",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addUser, getAllUser, updateUser, deleteUser };
