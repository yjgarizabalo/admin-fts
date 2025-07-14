import { Component,  } from '@angular/core';
import { Btn } from "../btn/btn";
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle, faXmark } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  imports: [Btn, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.html'
})
export class Navbar {

  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faXmark = faXmark

  isOpen = false;
  isOpenBody = false;

}
