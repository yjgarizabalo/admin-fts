import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from "../../components/navbar/navbar";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { faBell, faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear, faHouse } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-boards',
  imports: [Navbar, FontAwesomeModule, CdkAccordionModule, CommonModule],
  templateUrl: './boards.html'
})
export class Boards {

  faBell = faBell;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;
  faHouse = faHouse;

  items = [
    {
      label: 'Boards',
      itmes: [
        {
          label: 'Boards',
        },
        {
          label: 'Highlights',
        }
      ]
    },
    {
      label: 'Highlights',
      itmes: [
        {
          label: 'Highlights',
        },
        {
          label: 'Members',
        }
      ]
    },
    {
      label: 'Views',
      itmes: [
        {
          label: 'Views',
        },
        {
          label: 'Settings',
        }
      ]
    }
  ];

}
