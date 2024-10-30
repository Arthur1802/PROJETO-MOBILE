"use strict"

import { getDatabase, ref, query, orderByChild, equalTo, get, set, remove } from "firebase/database"

import UsuarioDTO from "./UsuarioDTO.js"
import ModelError from "../ModelError.js"
import Usuario from "./Usuario.js"

export default class DaoUsuario {

    static promessaConexao = null

    constructor() {
        this.obterConexao()
    }

    async obterConexao() {
        if (DaoUsuario.promessaConexao == null) {
            DaoUsuario.promessaConexao = new Promise(function (resolve, reject) {
                const db = getDatabase()
                if (db) {
                    resolve(db)
                } else {
                    reject(new ModelError("Não foi possível estabelecer conexão com o BD"))
                }
            })
        }
        return DaoUsuario.promessaConexao
    }

    async obterUsuarioPeloUID(uid) {
        let connectionDB = await this.obterConexao()
        console.log("Database connection established:", connectionDB)
    
        return new Promise((resolve) => {
            let dbRefUsuario = ref(connectionDB, 'usuarios/' + uid)
            let consulta = query(dbRefUsuario)
            console.log("Querying database for UID:", uid)
    
            let resultPromise = get(consulta)
            
            resultPromise.then(dataSnapshot => {
                let usr = dataSnapshot.val()
                console.log("Data retrieved from Firebase:", usr)
    
                if (usr != null) {
                    resolve(new Usuario(usr.email, usr.nome, usr.uid, usr.funcao, usr.modulos))
                } else {
                    console.warn("No user found for UID:", uid)
                    resolve(null)
                }
            }).catch(error => {
                console.error("Error retrieving data:", error)
                resolve(null)
            })
        })
    }
    

    async obterUsuarioPeloEmail(email) {
        let connectionDB = await this.obterConexao()
        
        return new Promise((resolve) => {
            let dbRefUsuario = ref(connectionDB, 'usuarios')
            let paramConsulta = orderByChild('email')
            let paramEqual = equalTo(email)
            let consulta = query(dbRefUsuario, paramConsulta, paramEqual)
            let resultPromise = get(consulta)
        
            resultPromise.then(dataSnapshot => {
                let usr = dataSnapshot.val()
                
                if (usr != null) {
                    
                    resolve(new Usuario(usr.email, usr.nome, usr.uid, usr.funcao, usr.modulos))
                } else {
                    resolve(null)
                }
            })
        })
    }

    async obterUsuarios() {
        let connectionDB = await this.obterConexao()

        return new Promise((resolve) => {
            let conjUsuarios = []
            let dbRefUsuarios = ref(connectionDB, 'usuarios')
            let paramConsulta = orderByChild('email')
            let consulta = query(dbRefUsuarios, paramConsulta)
            let resultPromise = get(consulta)
            
            resultPromise.then(dataSnapshot => {
                dataSnapshot.forEach(dataSnapshotObj => {
                    // let chave = dataSnapshotObj.key
                    let elem = dataSnapshotObj.val()
                    conjUsuarios.push(new Usuario(elem.email, elem.uid, elem.funcao))
                })
                
                resolve(conjUsuarios)
            }, (e) => console.log("#" + e))
        })
    }

    async incluir(usuario) {
        let connectionDB = await this.obterConexao()

        let resultado = new Promise((resolve, reject) => {
            let dbRefUsuario = ref(connectionDB, 'usuarios/' + usuario.getUid())
            let setPromise = set(dbRefUsuario, new UsuarioDTO(usuario))
            setPromise.then(() => { resolve(true) }, erro => { reject(erro) })
        })

        return resultado
    }

    async alterar(usuario) {
        let connectionDB = await this.obterConexao()

        let resultado = new Promise((resolve, reject) => {
            let dbRefUsuario = ref(connectionDB, 'usuarios/' + usuario.getUid())
            let setPromise = set(dbRefUsuario, new UsuarioDTO(usuario))
            setPromise.then(() => { resolve(true) }, erro => { reject(erro) })
        })

        return resultado
    }

    async excluir(usuario) {
        let connectionDB = await this.obterConexao()

        let resultado = new Promise((resolve, reject) => {
            let dbRefUsuario = ref(connectionDB, 'usuarios/' + usuario.getUid())
            let setPromise = remove(dbRefUsuario)
            setPromise.then(() => { resolve(true) }, erro => { reject(erro) })
        })

        return resultado
    }
}
