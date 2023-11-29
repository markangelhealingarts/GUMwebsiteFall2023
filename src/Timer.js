export default class Timer {
  constructor(targetTime, onExpire) {
    this.targetTime = targetTime;
    this.onExpire = onExpire;
    this.timerId = null;
    console.log("Setting Timer");
  }

  
  calculateTimeUntilExpiration = () => {
    const now = new Date();
    const [hours, minutes] = this.targetTime.split(':').map(Number);
    const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0, 0);

    if (target < now) {
      target.setDate(target.getDate() + 1);
    }

    return target.getTime() - now.getTime();
  };

  start() {
    const timeUntilExpiration = this.calculateTimeUntilExpiration();

    // If the target time has already passed, execute the expiration logic immediately
    if (timeUntilExpiration <= 0) {
      this.onExpire();
      return;
    }

    this.stop(); // Stop any existing timer
    this.timerId = setTimeout(this.onExpire, timeUntilExpiration);
    console.log("Timer set." + timeUntilExpiration);
  }

  stop() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }
}
