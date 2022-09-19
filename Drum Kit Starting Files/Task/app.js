async function loadData(){
const response = await fetch("audio.json");
const data = await response.json();
console.log(data);

for (let i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll("button")[i].addEventListener("click", function (){
        
    let buttonInnerHtml = this.innerHTML;


       let file = selectChar(buttonInnerHtml);
       playAudio(file) ;
   
    })
}



    function selectChar(char) {
        try {
            let soundFile = data[char];
            console.log(soundFile);
            return soundFile;
        } catch (e) {
            console.warn(e)
        }
    };

    function playAudio(audioFile) {
        new Audio(audioFile).play();
    }



};

loadData();