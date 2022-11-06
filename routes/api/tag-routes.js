const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include:
    {
      model: Product,
      through: ProductTag,
      attributes:
      [
        'product_name', 'price', 'stock', 'category_id',
      ]
    },
  })
    .then(TagInfo_db => {
      if (!TagInfo_db) {
        res.status(404).json({ message: 'No tag/s found.' });
        return;
      }
      res.json(TagInfo_db);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // console.log(req.params.id);
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where:
    {
      id: req.params.id,
    },
    include:
    [
      {
        model: Product,
        through: ProductTag,
        attributes:
        [
          'product_name', 'price', 'stock',
        ]
      },
    ],
  })
    .then(TagInfoDb => {
      if (!TagInfoDb) {
        res.status(404).json({ message: 'No tag found with this id.' });
        return;
      }
      res.json(TagInfoDb);
      console.log(TagInfoDb);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(
    {
    tag_name: req.body.tag_name,
    },
    {
      where:
      {
        id: req.params.id,
      }
    }
  )
    .then(TagInfo_db => {
      if (!TagInfo_db) {
        res.status(404).json({ message: 'No tag found.' });
        return;
      }
      res.json(TagInfo_db);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where:
      {
        id: req.params.id,
      },
    }
  )
    .then(TagInfo_db => {
      if (!TagInfo_db) {
        res.status(404).json({ message: 'No tag found, to update, with this id.' });
        return;
      }
      res.json(TagInfo_db);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where:
    {
      id: req.params.id,
    },
  })
    .then(TagInfo_db => {
      if (!TagInfo_db) {
        res.status(404).json({ message: 'No tag found, to delete, with this id.' });
        return;
      }
      res.json(TagInfo_db);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
