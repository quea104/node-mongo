var express = require('express');
const Article = require('../models/Article');
var router = express.Router();

router.get('/', (req, res) => {
    res.send("글 전체 열람");
});

router.get('/:articleId', (req, res) => {
    res.send("글 열람");
  
});

router.post('/', async (req, res) => {
    res.send("글 등록");
  
    try {
        const saved = await Article.create(req.body);
        res.json(saved);
    } catch(err) {
        res.json(err);
    }
});

router.put('/', async (req, res) => {
    try {
      const updated = await Article.findOneAndUpdate({_id: req.body._id},
        {
          title: req.body.title,
          author: req.body.author,
          body: req.body.body,
          likes: req.body.likes,
          tags: req.body.tags,
          updatedAt: new Date()
        });
      res.json(updated);
    } catch (err) {
      res.json(err);
    }
  });
  

router.delete('/:articleId', (req, res) => {
    res.send("글 삭제");
  
    try {
        const article = Article.findOneAndDelete({_id: req.params.articleId});
        res.json(article);
    } catch(err) {
        res.json(err);
    }
});


module.exports = router;
