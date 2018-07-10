class Correspondente {

    constructor(nome, cpf, oab) {
        this._dataRegistro = new Date();
        this._nome = nome;
        this._cpf = cpf;
        this._oab = oab;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    get oab() {
        return this._oab;
    }

    set oab(oab) {
        this._oab = oab;
    }

    get dataRegistro() {
        return this._dataRegistro;
    }

    set dataRegistro(dataRegistro) {
        this._dataRegistro = dataRegistro;
    }
}