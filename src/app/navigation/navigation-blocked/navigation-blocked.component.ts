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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (!isDemoTime()) {
      this.updateCountdown()
      const interval = setInterval(() => {
        if (isDemoTime()) {
          this.navigateToIntro(interval)
        }
        this.updateCountdown()
      }, 1000)
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

  navigateToIntro(interval?: any) {
    if (interval) {
      clearInterval(interval)
    }
    this.router.navigate(['/introduction'])
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
}
