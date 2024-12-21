import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Calculator';
  displayValue: string = "";

  onButtonClick(val: string) {
    // If displayValue is "0", replace it with the clicked number
    if (this.displayValue === "Invalid Input"){
      this.displayValue = val;
    }
    if (this.displayValue === "0") {
      this.displayValue = val;
    } else {
      this.displayValue += val;
    }
  }

  // Method for clearing the display
  clear() {
    this.displayValue = "";
  }

  // For now, it just logs the value. You can extend it for ANS button functionality.
  ans() {
    let result : string = "";
    try{
      result = eval(this.displayValue);
      this.displayValue = result;
    }
    catch(error){
      this.displayValue = "Invalid Input";
    }

   }

}

