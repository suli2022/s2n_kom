import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private emit: EmitterService) { }

  ngOnInit(): void {
    this.emit.event.subscribe( () => {
      this.firstFunc();
    });
  }

  firstFunc() {
    alert("A firstFunc fut")
  }
}
