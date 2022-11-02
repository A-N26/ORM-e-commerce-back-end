const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include:
    {
      model: Product,
      attributes:
        [
          'product_name', 'price', 'stock', 'category_id'
        ]
    }
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
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    Where:
    {
      id: req.params.id
    },
    attributes: ['id', 'tag_name'],
    include:
    {
      model: Product,
      attributes:
        [
          'product_name', 'price', 'stock', 'category_id'
        ]
    }
  })
    .then(TagInfo_db => {
      if (!TagInfo_db) {
        res.status(404).json({ message: 'No tag found with this id.' });
        return;
      }
      res.json(TagInfo_db);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.params.tag_name
  })
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
  Tag.update({
    Where:
    {
      id: req.params.id
    }
  })
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
    Where:
    {
      id: req.params.id
    }
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
