"use strict"

import { getDatabase, ref, query, orderByChild, get, set, remove } from "firebase/database"

import ModuloDTO from "./ModuloDTO.js"
import ModelError from "../ModelError.js"
import Modulo from "./Modulo.js"

export default class DaoModulo {

    static promessaConexao = null

    constructor() {
        this.obterConexao()
    }

    async obterConexao() {
        if (DaoModulo.promessaConexao == null) {
            DaoModulo.promessaConexao = new Promise(function (resolve, reject) {
                const db = getDatabase()
                if (db) {
                    resolve(db)
                } else {
                    reject(new ModelError("Não foi possível estabelecer conexão com o BD"))
                }
            })
        }
        return DaoModulo.promessaConexao
    }

    async obterModuloPeloNome(nome) {
        let connectionDB = await this.obterConexao()
        console.log("Database connection established:", connectionDB)
    
        return new Promise((resolve) => {
            let dbRefModulo = ref(connectionDB, `modulos/${nome}`)
            let consulta = query(dbRefModulo)
            console.log(`Querying database for Módulo: ${nome}`)
    
            let resultPromise = get(consulta)
            
            resultPromise.then(dataSnapshot => {
                let mdl = dataSnapshot.val()
                console.log(`Dados resgatados do BD: ${mdl}`)
    
                if (mdl != null) {
                    resolve(new Modulo(mdl.nome, mdl.questoes))
                } else {
                    console.warn("Nenhum módulo encontrado para o parametro: {nome}")
                    resolve(null)
                }
            }).catch(error => {
                console.error(`Erro na consulta: ${error}}`)
                resolve(null)
            })
        })
    }
    

    async obterModulos() {
        let connectionDB = await this.obterConexao()

        return new Promise((resolve) => {
            let conjModulos = []
            let dbRefModulos = ref(connectionDB, 'modulos/')
            let paramConsulta = orderByChild('nome')
            let consulta = query(dbRefModulos, paramConsulta)
            let resultPromise = get(consulta)
            
            resultPromise.then(dataSnapshot => {
                dataSnapshot.forEach(dataSnapshotObj => {
                    let elem = dataSnapshotObj.val()
                    conjModulos.push(new Modulo(elem.nome, elem.questoes))
                })
                
                resolve(conjModulos)
            }, (e) => console.log("#" + e))
        })
    }

    async incluir(modulo) {
        let connectionDB = await this.obterConexao()

        let resultado = new Promise((resolve, reject) => {
            let dbRefModulo = ref(connectionDB, 'modulos/' + modulo.getNome())
            let setPromise = set(dbRefModulo, new ModuloDTO(modulo))
            setPromise.then(() => { resolve(true) }, erro => { reject(erro) })
        })

        return resultado
    }

    async alterar(modulo) {
        let connectionDB = await this.obterConexao()

        let resultado = new Promise((resolve, reject) => {
            let dbRefModulo = ref(connectionDB, 'modulos/' + modulo.getUid())
            let setPromise = set(dbRefModulo, new ModuloDTO(modulo))
            setPromise.then(() => { resolve(true) }, erro => { reject(erro) })
        })

        return resultado
    }

    async excluir(modulo) {
        let connectionDB = await this.obterConexao()

        let resultado = new Promise((resolve, reject) => {
            let dbRefModulo = ref(connectionDB, 'modulos/' + modulo.getUid())
            let setPromise = remove(dbRefModulo)
            setPromise.then(() => { resolve(true) }, erro => { reject(erro) })
        })

        return resultado
    }
}
