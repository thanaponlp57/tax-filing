import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.scss']
})
export class PenaltyComponent implements OnInit  {

  public penalty!: number;

  @Input()  penaltyRate!: number;
  @Output() getPenalty = new EventEmitter<number>();

  ngOnInit(): void {
    this.setSurcharge(this.penaltyRate);
    this.emitPenalty(this.penaltyRate);
  }

  private emitPenalty(penalty: number): void {
    this.getPenalty.emit(penalty);
  }

  private setSurcharge(penalty: number): void {
    this.penalty = penalty;
  }
}
