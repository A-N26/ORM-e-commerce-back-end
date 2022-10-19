const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes:
      [
        'id',
        'category_name'
      ],
    include:
      [
        {
          model: Product,
          attributes:
            [
              'id',
              'product_name',
              'price',
              'stock',
              'category_id'
            ]
        }
      ]
  })
    .then(CategoryDB_Info => res.json(CategoryDB_Info))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where:
    {
      id: req.params.id
    },
    attributes:
      [
        'id',
        'category_name'
      ],
    include:
      [
        {
          model: Product,
          attributes:
            [
              'id',
              'product_name',
              'price',
              'stock',
              'category_id'
            ]
        }
      ]
  })
    .then(CategoryDB_Info => {
      if (!CategoryDB_Info) {
        res.status(404).json(
          {
            message: 'Error...unknown category. Please enter valid id.'
          }
        );
        return;
      }
      res.json(CategoryDB_Info);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then(CategoryDB_Info => res.json(CategoryDB_Info))
    .catch (err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where:
    {
      id: req.params.id
    }
  })
    .then(CategoryDB_Info => {
      if (!CategoryDB_Info[0]) {
        res.status(404).json(
          {
            message: 'Error updating category, id unknown. Please try again.'
          }
        );
        return;
      }
      res.json(CategoryDB_Info);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:
    {
      id: req.params.id
    }
  })
    .then(CategoryDB_Info => {
      if (!CategoryDB_Info) {
        res.status(404).json(
          {
            message: 'Error deleting category, id unknown. Please try again.'
          }
        );
        return;
      }
      res.json(CategoryDB_Info);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
