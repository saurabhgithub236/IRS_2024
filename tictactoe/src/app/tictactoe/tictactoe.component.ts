import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.css'
})
export class TictactoeComponent {

  cells:string[]=Array(10).fill(null);

  playerSymbol:string='X';
  playerAName:string = "PlayerA";
  playerBName:string = "PlayerB";
  move:string = "";

  onGridCellClick(index:number):void
  {
    if(this.cells[index]!=null){return}
    this.cells[index]=this.playerSymbol;
    this.moveHandler(index,this.playerSymbol);
    this.checkGameState();
    if(this.playerSymbol=='X'){this.playerSymbol='O';}
    else{this,this.playerSymbol='X';}
  }

  moveHandler(index:number,str:string)
  {
    let msg = str + ":move on" + index + ' ';
    this.move = this.move + msg;
  }

  checkGameState()
  {
      const winningCombination = 
      [
        [1,2,3],[4,5,6],[7,8,9],
        [1,4,7],[2,5,8],[3,6,9],
        [1,5,9],[3,5,7]
      ]

      for(let comb of winningCombination)
      {
        let [a,b,c] = comb;
        if(this.cells[a]==this.playerSymbol
          && this.cells[b]==this.playerSymbol
          && this.cells[c]==this.playerSymbol
        )
        {
          alert("WIN");
        }
      }

      let isDraw = true;
      for(let i=1;i<10;i++)
      {
        if(this.cells[i]==null)
        {
          isDraw=false;
          break;
        }
      }

      if(isDraw){alert("draw");}
  }

}
