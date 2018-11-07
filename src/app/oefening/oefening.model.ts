export class Oefening {
  private _oefeningId: number;

  private _sessieId: number;
  private _naam: string;
  private _dateAdded: Date = new Date();
  private _beschrijving: string;
  private _file: File
  private _fileName: string;
  private _fileMimetype: string;
  private _fileOriginalName: string;
  private _fileSize: number;

  constructor(naam: string, beschrijving: string, oefeningId: number) {
    this._naam = naam;
    this._beschrijving = beschrijving;
    this._oefeningId = oefeningId;
  }

  /**
   * Geeft het id van een oefening terug
   */
  get oefeningId(): number {
    return this._oefeningId;
  }

  get sessieId(): number {
    return this._sessieId;
  }

  /**
   * Geeft de naam van een oefening terug
   */
  get naam(): string {
    return this._naam;
  }

  /**
   * Geeft het sessieId van een oefening terug
   */
  get sessieId(): number {
    return this._sessieId;
  }

  /**
   * Geeft de beschrijving van een oefening terug
   */
  get beschrijving(): string {
    return this._beschrijving;
  }

  get datumGemaakt(): Date {
    return this._dateAdded;
  }

  get file(): File {
    return this._file;
  }

  get fileName() : string {
    return this._fileName;
  }

  get fileSize() : number {
    return this._fileSize;
  }
  
  get fileOriginalName() : string {
    return this._fileOriginalName;
  }
  
  get fileMimetype() : string {
    return this._fileMimetype;
  }

  /**
   * Verandert de naam van de oefening
   * @param naam: Dit is de nieuwe naam van de oefening
   */
  set naam(naam: string) {
    this._naam = naam;
  }

  /**
   * Verandert de beschrijving van de oefening
   * @param beschrijving: Dit is de nieuwe beschrijving van de oefening
   */
  set beschrijving(beschrijving: string) {
    this._beschrijving = beschrijving;
  }

  set fileName(name : string) {
    this._fileName = name;
  }

  set fileSize(size : number) {
    this._fileSize = size;
  }
  
  set fileOriginalName(originalName : string) {
    this._fileOriginalName = originalName
  }
  
  set fileMimetype(mimetype : string) {
    this._fileMimetype = mimetype;
  }

  set sessieId(sessieId : number) {
    this._sessieId = sessieId;
  }

  set file(file : File)
  {
    this._file = file;
  }


  /**
   * Verandert het sessieid van de oefening
   * @param id: Dit is de nieuwe sessieId van de oefening
   */
  set sessieId(id: number) {
    this._sessieId = id;
  }
}
