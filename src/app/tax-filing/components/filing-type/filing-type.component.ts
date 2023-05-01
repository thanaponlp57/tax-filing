import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilingType } from '../../models/filing-type.model';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.scss']
})
export class FilingTypeComponent implements OnInit{

  public selectedfilingType!: string;

  @Input()  filingTypes!: FilingType[];
  @Output() getFilingType = new EventEmitter<FilingType>();
  
  ngOnInit(): void {
    const filingTypes = this.filingTypes;
    const firstFilingType = filingTypes[0];

    this.setFilingTypes(filingTypes);
    this.setSelectedFilingType(firstFilingType);
    this.emitFilingType(firstFilingType);
  }

  private setFilingTypes(filingTypes: FilingType[]): void {
    this.filingTypes = filingTypes;
  }

  private setSelectedFilingType(filingType: FilingType): void {
    this.selectedfilingType = filingType.value;
  }

  public emitFilingType(filingType: FilingType): void {
    this.getFilingType.emit(filingType);
  }

}