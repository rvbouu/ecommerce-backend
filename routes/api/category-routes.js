const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const catData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json({ status: `success`, result: catData });
  }
  catch (err) {
    res.status(500).json({ status: `error`, message: err });
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const catData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!catData) {
      res.status(404).json({ status: `error`, message: `No category found with that id.` });
      return;
    }
    res.status(200).json({ status: `success`, result: catData });
  }
  catch (err) {
    res.status(500).json({ status: `error`, message: err });
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const catData = await Category.create(req.body);
    res.status(200).json({ status: `success`, result: catData });
  }
  catch (err) {
    res.status(400).json({ status: `error`, message: err });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const catData = await Category.update(req.body,
      {
        where:
        {
          id: req.params.id
        }
      });
    if (!catData) {
      res.status(404).json({ status: `error`, message: `No category found with id.` });
      return;
    }
    res.status(200).json({ status: `success`, result: catData });
  }
  catch (err) {
    res.status(400).json({ status: `error`, message: err });
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    await Category.destroy(
      {
        where:
        {
          id: req.params.id
        }
      });
    // if (!ca)
    res.status(200).json({ status: `success`, message: `Category has been deleted` });
  }
  catch (err) {
    res.status(400).json({status: `error`, message: err})
  }
});

module.exports = router;
