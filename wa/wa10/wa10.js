const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
const storyText = "It was 94 fahrenheit outside, so :insertx: wandered. He always wandered however, this was not simply a result of the weather. After a while of their efforts, they arrived at :inserty: and then :insertz:. Bob saw the whole thing, but was not surprised — after all, :insertx: weighs 300 pounds, and it was a hot day. The carnage was immense and well disgusting. But so it goes in the wasteland of :inserty:.";
const insertX =["Hatsune Miku", "Bob Barker", "Legate Lanius"];
const insertY = ["the Mojave Desert", "downtown Washington DC", "Boston"];
const insertZ =["violently exploded", "got heatstroke", "got a gameover"];

randomize.addEventListener('click', result);
let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replaceAll(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);
function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name)
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stones";
    newStory = newStory.replace("300 pounds", weight);
        const temperature =  Math.round((94-32)*(5/9)) + " centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature)
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}