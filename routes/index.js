var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

function getStory(formData){
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  }else if (formData.storyChoice === "2"){
    return generateStory2(formData);
  }else if (formData.storyChoice === "3"){
    return generateStory3(formData);
  }else {
    return "invalid"
  }
}
function generateStory1(formData){
return `Twas a dark and stormy ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}!`
}

function generateStory2(formData){
  return `Twas a cold and wintery ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}!`
}

function generateStory3(formData){
  return `Twas a rainy and cold ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}!`
}