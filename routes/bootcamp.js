const express = require('express');
const router = express.Router();
const {
  getAllData,
  getDataById,
  deleteDataById,
  updateDataById,
  createData
} = require('../controllers/bootcamp');

router
  .route('/')
  .get(getAllData)
  .post(createData);

router
  .route('/:id')
  .get(getDataById)
  .delete(deleteDataById)
  .put(updateDataById);

module.exports = router;
