export default class CodeMatrix {

  public Matrix: [string[]];
  private _WeightChar?: string;

  private lengh = 10;
  private weight = 20;

  constructor(weightChar?: string, empty?: boolean){
    this._WeightChar = weightChar;
    if(empty){
      this.generateEmptyMatrix();
    }else{
      this.generateMatrix();
    }
  }

  public generateEmptyMatrix(){
    let rows: any = [];
    for (let i = 0; i < this.lengh; i++) {
      rows.push(new Array(this.lengh))
    }
    this.Matrix = rows;
  }

  private generateMatrix() {
    let countWeightChar = 0;
    let rows: any = [];
    for (let i = 0; i < this.lengh; i++) {
      let col: string[] = [];
      for (let j = 0; j < this.lengh; j++) {
          let randomChar = this.generateRandonChar();
          if(randomChar == this._WeightChar) countWeightChar++
          col.push(randomChar);
      }
      rows.push(col)
    }

    this.Matrix = rows;

    if(this._WeightChar)
      this.normalizeWeight(this._WeightChar, (this.lengh * this.lengh * this.weight / 100) - countWeightChar);

  }

  private normalizeWeight(weightChar: string, charactersToAdd: number){

    while(charactersToAdd > 0){

      let row = Math.floor(Math.random() * this.lengh)
      let col = Math.floor(Math.random() * this.lengh)

      if(this.Matrix[row][col] != weightChar){
        this.Matrix[row][col] = weightChar;
        charactersToAdd--;
      }
    }
  }

  private generateRandonChar(): string {
    const characters       = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));;
  }

  public calculateCode(): string {

    let seconds  = new Date().getSeconds().toString();
    if (seconds.length == 1) seconds = "0" + seconds

    let number1 = parseInt(seconds.charAt(0));
    let number2 = parseInt(seconds.charAt(1));

    let char1 = this.Matrix[number1][number2];
    let char2 = this.Matrix[number2][number1];

    let char1count = 0;
    let char2count = 0;
    this.Matrix.map(r => {
      r.map(value => {
        if(value == char1) char1count++
        if(value == char2) char2count++
      })
    })

    return this.normalizeCountToNatural(char1count) + this.normalizeCountToNatural(char2count)
  }

  private normalizeCountToNatural(count): string {

    let div = 1;
    while(true){
      let naturalNumber = Math.ceil(count/div);
      if(naturalNumber <= 9) return naturalNumber.toString();

      div++
    }

  }

  public getGrid() {

    let cellsCoordenates = [];
    for (let index = 0; index < 60; index++) {
      let coordenate = index.toString();
      if (coordenate.length == 1) coordenate = "0" + coordenate;

      if(cellsCoordenates.includes(coordenate) == false){
        cellsCoordenates.push(coordenate);
      }
      let invertedCoordenate = coordenate.charAt(1) + coordenate.charAt(0);
      if(cellsCoordenates.includes(invertedCoordenate) == false){
        cellsCoordenates.push(invertedCoordenate);
      }
    }

    console.log(cellsCoordenates.length)
    console.log(cellsCoordenates)
  }
}
