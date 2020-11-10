import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export class Utils extends Vue {
  isMobile() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  }
  isOdd (num: number) {
    return num % 2
  }

  isPrime(num: number) {
    if(num < 2) return false;
    for (let i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
}
