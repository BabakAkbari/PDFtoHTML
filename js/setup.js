function reverser(inputSentence){
    var words = inputSentence.split(" ");
    var output = new Array();
    words.forEach(function(word) {
      if(isNaN(word))
        output.push(word.split("").reverse().join(""));
      else
        output.push(word);
    });
    return output.join(" ");
}
function setup(){
  for(var i=0;i< document.getElementsByTagName("p").length;i++){
    var sentence = document.getElementsByTagName("p")[i].innerHTML;
    sentence = sentence.replace(/&nbsp;/g, " ");
    sentence = sentence.replace(/<b>/g, "");
    sentence = sentence.replace(/<\/b>/g, "");
    document.getElementsByTagName("p")[i].innerHTML = sentence;
    var revSentence = reverser(sentence);
    revSentence = revSentence.split(" ").reverse().join(" ");
    document.getElementsByTagName("p")[i].innerHTML = revSentence;
  }
}
