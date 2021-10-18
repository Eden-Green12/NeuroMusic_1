// we also have to randomize the music that is played
let track_list = [
  {
    num: 0,
    path: "./Yaman.mp3",
  },
  {
    num: 1,
    path: "./Vibhatsa.mp3",
  },
  {
    num: 2,
    path: "./Todhi.mp3",
  },
  {
    num: 3,
    path: "./Raga_Des.mp3",
  },
];

var arr = [0,1,2,3];
var jsonArr;

function call_Music(){
  var arr1 = shuffle(arr);
  jsonArr = JSON.stringify(arr1);
  localStorage.setItem('array',jsonArr);
  console.log(arr1);
}

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}
