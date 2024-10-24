"use strict"

// A cláusula 'import' é utilizada sempre que uma classe precisar conhecer a estrutura
// de outra classe. No arquivo referenciado após o 'from' é necessário informar o que
// para a ser visível para a classe que utiliza o import. Para isso, lá colocamos a 
// indicação 'export'

import { getDatabase, ref, query, onValue, onChildAdded, orderByChild, child, orderByKey, equalTo, get, set, remove, push, runTransaction } from "firebase-database.js"

import Aluno from "/model/Aluno.js"
import Curso from "/model/Curso.js"
import DaoCurso from "/model/DaoCurso.js"
import ModelError from "/model/ModelError.js"


export default class DaoAluno {
    static promessaConexao = null

    constructor() {
        this.obterConexao()
    }

    /*
     *  Devolve uma Promise com a referência para o BD. Sempre que 'obterConexao' for chamado, 
     *  será necessário usar o await para recuperar o IDBDatabase.
     */
    async obterConexao() {
        if (DaoAluno.promessaConexao == null) {
            DaoAluno.promessaConexao = new Promise(function (resolve, reject) {
                const db = getDatabase()
                if (db) {
                    resolve(db)
                }
                
                else {
                    reject(new ModelError("Não foi possível estabelecer conexão com o BD"))
                }
            })
        }
        return DaoAluno.promessaConexao
    }

    async obterAlunoPelaMatricula(matr) {
        let connectionDB = await this.obterConexao()
        
        return new Promise((resolve) => {
            let dbRefAluno = ref(connectionDB, 'alunos/' + matr)
            let consulta = query(dbRefAluno)
            let resultPromise = get(consulta)
        
            resultPromise.then(async (dataSnapshot) => {
                let aluno = dataSnapshot.val()
        
                if (aluno != null) {
                    let daoCurso = new DaoCurso()
                    let curso = await daoCurso.obterCursoPelaSigla(aluno.curso)

                    resolve(new Aluno(aluno.matricula, aluno.cpf, aluno.nome, aluno.email, aluno.telefone, curso))
                }
        
                else {
                    resolve(null)
                }
            })
        })
    }

    async obterAlunos() {
        let connectionDB = await this.obterConexao()

        return new Promise((resolve) => {
            let conjAlunos = []
            let dbRefAlunos = ref(connectionDB, 'alunos')
            let paramConsulta = orderByChild('matricula')
            let consulta = query(dbRefAlunos, paramConsulta)
            let resultPromise = get(consulta)

            resultPromise.then(dataSnapshot => {
                dataSnapshot.forEach((dataSnapshotObj) => {
                    let elem = dataSnapshotObj.val()
                    let daoCurso = new DaoCurso()
                    let curso = daoCurso.obterCursoPelaSigla(elem.curso)

                    conjAlunos.push(new Aluno(elem.matricula, elem.cpf, elem.nome, elem.email, elem.telefone, curso))
                })
                // Não precisa ordenar na memória! mas se precisasse: conjAlunos.sort((a,b) => { return a.matricula - b.matricula})
                resolve(conjAlunos)
            })
        })
    }

    async incluir(aluno) {
        let connectionDB = await this.obterConexao()

        let resultado = new Promise((resolve, reject) => {
            let dbRefAlunos = ref(connectionDB, 'alunos')

            runTransaction(dbRefAlunos, (alunos) => {
                let dbRefNovoAluno = child(dbRefAlunos, aluno.getMatricula())

                aluno.curso = aluno.curso.getSigla()

                let setPromise = set(dbRefNovoAluno, aluno)

                setPromise.then(value => { resolve(true) }, erro => { reject(erro) })
            })
        })
        return resultado
    }

    async alterar(aluno) {
        let connectionDB = await this.obterConexao()

        let resultado = new Promise((resolve, reject) => {
            let dbRefAlunos = ref(connectionDB, 'alunos')

            runTransaction(dbRefAlunos, (alunos) => {
                let dbRefAlterarAluno = child(dbRefAlunos, aluno.getMatricula())

                aluno.curso = aluno.curso.getSigla()

                let setPromise = set(dbRefAlterarAluno, aluno)

                setPromise.then(value => { resolve(true) }, erro => { reject(erro) })
            })
        })
        return resultado
    }

    async excluir(aluno) {
        let connectionDB = await this.obterConexao()

        let resultado = new Promise((resolve, reject) => {
            let dbRefAluno = ref(connectionDB, 'alunos')

            runTransaction(dbRefAluno, (alunos) => {
                let dbRefExcluirAluno = child(dbRefAluno, aluno.getMatricula())
                let setPromise = remove(dbRefExcluirAluno, aluno)

                setPromise.then(value => { resolve(true) }, erro => { reject(erro) })
            })
        })
        
        return resultado
    }
}
