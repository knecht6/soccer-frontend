export default class MatchTeams {
  constructor(localTeam, visitTeam) {
    this.localTeam = localTeam;
    this.visitTeam = visitTeam;
    this.winner = null;
    this.losser = null;
    this.calculate();
  }

  //return the winner
  calculate() {
    let ratingLocal = this.localTeam.rating,
      ratingVisit = this.visitTeam.rating,
      posLocal = this.localTeam.position_team,
      posVisit = this.visitTeam.position_team;
    let ratingSum = ratingLocal + ratingVisit;
    this.localTeam.percentage = (ratingLocal * 90) / ratingSum;
    this.localTeam.percentage += 5;
    this.visitTeam.percentage = (ratingVisit * 90) / ratingSum;
    if (posLocal < posVisit) {
      this.localTeam.percentage += 5;
    } else if (posVisit < posLocal) {
      this.visitTeam.percentage += 5;
    } else {
      this.localTeam.percentage += 2.5;
      this.visitTeam.percentage += 2.5;
    }
    this.localTeam.percentage = Math.round(this.localTeam.percentage);
    this.visitTeam.percentage = Math.round(this.visitTeam.percentage);
    //look for winner and losser
    if (this.localTeam.percentage > this.visitTeam.percentage) {
      this.winner = this.localTeam;
      this.losser = this.visitTeam;
    } else if (this.visitTeam.percentage > this.localTeam.percentage) {
      this.winner = this.visitTeam;
      this.losser = this.localTeam;
    } else {
      this.winner = null;
    }
  }
}
