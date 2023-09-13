var express = require('express');
const { getAllProjectUrls, getProjectUrls, getMetaOfProject, getThumbnailOfProject, getPageOfProject } = require('../util/projectsInfo');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(getAllProjectUrls(req));
});


router.get('/:projectName', function(req, res, next) {
  const json = getProjectUrls(req);
  if(json == null){
    res.status(404).send("404");
  }
  res.send(json);
});



module.exports = router;
