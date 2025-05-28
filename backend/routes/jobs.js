const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const client = require('../utils/elasticClient');

// Create Job
router.post('/', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();

    await client.index({
      index: 'jobs',
      id: job._id.toString(),
      body: job.toObject()
    });

    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Jobs
router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Search Jobs
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const result = await client.search({
      index: 'jobs',
      body: {
        query: {
          multi_match: {
            query,
            fields: ['title', 'description', 'company', 'location']
          }
        }
      }
    });

    const hits = result.body.hits.hits.map(hit => hit._source);
    res.json(hits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Job
router.put('/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await client.update({
      index: 'jobs',
      id: req.params.id,
      body: { doc: req.body }
    });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Job
router.delete('/:id', async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    await client.delete({ index: 'jobs', id: req.params.id });
    res.json({ message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
