import {Component} from '@angular/core';

@Component({
  selector:    'auto-complete-component',
  templateUrl: 'auto-complete-component.component.html',
  styleUrls: [
    'auto-complete-component.component.scss'
  ],
})
export class AutoCompleteComponent {
  public labelAttribute:string;
  
  public objects:any[];

  constructor() {
    const objects = [
       "a","b","tesst"
    ]
  }
  
  protected filter(keyword) {
    keyword = keyword.toLowerCase();

    return this.objects.filter(
      (object) => {
        const value = object[this.labelAttribute].toLowerCase();

        return value.includes(keyword);
      }
    );
  }
}