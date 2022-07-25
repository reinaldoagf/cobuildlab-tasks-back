var express = require('express');
var router = express.Router();
const _TaskController = require('../controllers/TaskController');

/*Tasks*/
router.get("/tasks/all/",_TaskController._all)
router.post("/tasks/store/",_TaskController._store)
router.put("/tasks/update/:id",_TaskController._update)
router.delete("/tasks/delete/:id",_TaskController._delete)

module.exports = router;