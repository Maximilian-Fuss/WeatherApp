import {Component} from '@angular/core';
 import {NavController} from 'ionic-angular';
 import {CompleteTestService} from '../../service/autocomplete';
 import {FormGroup, Validators, FormControl } from '@angular/forms'
 
 
 @Component({
   selector: 'page-home',
   templateUrl: 'home.html'
 })
 export class HomePage {
   myForm: FormGroup
 
   constructor(public navCtrl: NavController, public completeTestService: CompleteTestService) {
   
   }
 
   ngOnInit(): void {
     this.myForm = new FormGroup({
       country: new FormControl('', [
         Validators.required
       ])
     })
   }
 
   submit(): void {
     let country = this.myForm.value.country
   }
 
 }