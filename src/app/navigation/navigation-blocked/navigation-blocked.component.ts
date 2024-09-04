import {Component} from '@angular/core'
import {DEMO_DATE, isDemoTime} from "../../services/auth-guard.service"
import {Router} from "@angular/router"

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

@Component({
  selector: 'app-navigation-blocked',
  templateUrl: './navigation-blocked.component.html',
  styleUrl: './navigation-blocked.component.scss'
})
export class NavigationBlockedComponent {
  days!: number
  hours!: number
  minutes!: number
  seconds!: number
  scale = 'scale(1)';
  positionTop: number = 0;
  positionLeft: number = 0;
  countDownInterval!: any
  glideInterval!: any

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (!isDemoTime()) {
      this.updateCountdown()
      this.randomZoomAndMove()
      this.countDownInterval = setInterval(() => {
        if (isDemoTime()) {
          this.navigateToIntro()
        }
        this.updateCountdown()
      }, 1000)
      this.glideInterval = setInterval(() => {
          this.randomZoomAndMove()
      }, 20000)
    } else {
      this.navigateToIntro()
    }
  }

  updateCountdown() {
    const demoDate = new Date(DEMO_DATE)
    const currentTime = new Date()
    const diff = demoDate.getTime() - currentTime.getTime()
    this.days = this.getDays(diff)
    this.hours = this.getHours(diff)
    this.minutes = this.getMinutes(diff)
    this.seconds = this.getSeconds(diff)
  }

  navigateToIntro() {
    if (this.countDownInterval) {
      clearInterval(this.countDownInterval)
    }
    if (this.glideInterval) {
      clearInterval(this.glideInterval)
    }
    this.router.navigate(['/slides'])
  }

  getDays(t: number) {
    return Math.floor(t / DAY)
  }

  getHours(t: number) {
    return Math.floor((t / HOUR) % 24)
  }

  getMinutes(t: number) {
    return Math.floor((t / MINUTE) % 60)
  }

  getSeconds(t: number) {
    return Math.floor((t / SECOND) % 60)
  }

  randomZoomAndMove() {
    this.positionTop = Math.floor(Math.random() * (-1489/1.8)); //img height 1489
    this.positionLeft = Math.floor(Math.random() * (-3728/1.8)); //img width 3728
    this.scale = `scale(${this.randomScale()})`
  }

  randomScale():number{
    const scale = Math.random() * 1.5
    return scale<0.1?this.randomScale():scale
  }

}
