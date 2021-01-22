const mongoose = require('mongoose');

const Menu = mongoose.model('Menu');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const menu = await Menu.paginate({}, { page, limit:10 });
    return res.json(menu);
  },

  async show(req, res) {
    const menu = await Menu.findById(req.params.id);
    return res.json(menu);
  },

  async store(req, res) {
    const menu = await Menu.create(req.body);
    return res.json(menu);
  },

  async update(req, res) {
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new:true });
    return res.json(menu);
  },

  async destroy(req, res) {
    await Menu.findByIdAndRemove(req.params.id);
    return res.send();
  },

  async search(req, res) {
    const menus = await Menu.find({startDate: req.params.date});
    return res.send(menus);
  }
};
