import express from 'express';
import xss from 'xss';
import Article from '../models/Article.js';

const router = express.Router();

// Create an article
router.post('/', async (req, res) => {
  try {
    const sanitizedTitle = xss(req.body.title);
    const sanitizedBody = xss(req.body.body);
    const sanitizedTags = Array.isArray(req.body.tags)
      ? req.body.tags.map(tag => xss(tag))
      : [];

    const article = new Article({
      title: sanitizedTitle,
      body: sanitizedBody,
      tags: sanitizedTags,
    });

    await article.save();
    res.status(201).json(article);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
