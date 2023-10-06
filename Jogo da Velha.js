const player1 = "X";
const player2 = "O";
var playtime = player1;
var gamerover = false;

indicador();
jogo();


function indicador(){
    if (gamerover) { return;}

    if (playtime == player1) {
        var player = document.querySelectorAll("div#painel img")[0];
        player.setAttribute("src", "x.png");
    } else {
        var player = document.querySelectorAll("div#painel img")[0];
        player.setAttribute("src", "o.png");
    }
}

function jogo(){
    var space = document.getElementsByClassName("space");
    for (var i = 0; i < space.length; i++){
        
        space[i].addEventListener("click", function(){

            if (gamerover) {return;}

            if (this.getElementsByTagName("img").length == 0){
                
                if (playtime == player1) {
                    
                    this.innerHTML = "<img src='x.png'>";
                    this.setAttribute("jogada", player1);
                    playtime = player2;
                    
                } else{

                    this.innerHTML = "<img src='o.png'>";
                    this.setAttribute("jogada", player2);
                    playtime = player1;
                    
                }
                indicador();
                

            }

            
        
        } );   
            
        
    }

}

