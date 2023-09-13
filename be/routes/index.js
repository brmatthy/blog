var express = require('express');
const { getAllProjectUrls, getProjectUrls, getMetaOfProject, getThumbnailOfProject, getPageOfProject } = require('../public/javascripts/projectsInfo');
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

router.get('/:projectName/meta', function(req, res, next){
  const meta = getMetaOfProject(req);
  if(meta == null){
    res.status(404).send("404");
  }
  res.send(meta);
});

router.get('/:projectName/thumbnail', function(req, res, next){
  const thumbnail = getThumbnailOfProject(req);
  if(thumbnail == null){
    res.status(404).send("404");
  }
  res.send(thumbnail);
});

router.get('/:projectName/page', function(req, res, next){
  const page = getPageOfProject(req);
  if(page == null){
    res.status(404).send("404");
  }
  res.send(page);
});

module.exports = router;
