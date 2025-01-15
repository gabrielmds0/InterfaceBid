import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';
import { Body2Component } from '../body2/body2.component';
import { Body3Component } from '../body3/body3.component';
import { FooterComponent } from '../footer/footer.component';
import { FormComponent } from '../form/form.component';
import { Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BodyComponent, Body2Component, Body3Component, FooterComponent, FormComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
