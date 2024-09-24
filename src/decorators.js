export class GradeWeighter {
    constructor(w1, w2) {
        this.w1 = w1;
        this.w2 = w2;
    }
    eval(n1, n2) {
        return 0.01 * (this.w1 * n1 + this.w2 * n2);
    }
}

export class MinExamGradeDecorator {
    constructor(minGrade, weighter) {
        this.minGrade = minGrade;
        this.weighter = weighter;
    }
    eval(nexam, nwork) {
        if (nexam < this.minGrade) {
            return nexam;
        }
        return this.weighter.eval(nexam, nwork);
    }
}

export class RecoveryStrategyDecorator {
    constructor(strategy, weighter) {
        this.strategy = strategy;
        this.weighter = weighter;
    }
    eval(n1, n2) {
        if (this.strategy === "g5" && this.e_maig >= 5) {
            // Estratègia de recuperació de gener amb un 5
            return this.weighter.eval(5, n2);
          } else if(this.strategy === "mm" && n2 > n1) {
            // Estratègia de recuperació de gener amb la mateixa nota de maig
            return n2;
          } else {
            // Cap estratègia -- poderació simple
            return this.weighter.eval(n1, n2);
          }
    }
}

