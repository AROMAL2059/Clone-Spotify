console.log("Welcoe to Spotify");
let songindex=0;
let audioelement= new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogessbar= document.getElementById('myPregressBar');
let songitems=document.getElementsByClassName('songItem')

let songs = [
    {songname: 'muskuraneke',filepath:"1.mp3",coverpath:""},
    {songname: 'njan',filepath:"2.mp3",coverpath:""},
    
]
    masterplay.addEventListener('click',()=>{
        if(audioelement.paused||audioelement.currentTime<=0){
            audioelement.play();
          masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
        }
        else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');}
    })

    songitems.forEach((element)=>{
        
    })
audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
console.log(progress);
myprogessbar.value=progress;
})

myprogessbar.addEventListener('change',()=>{
audioelement.currentTime=myprogessbar.value*audioelement.duration/100;
})