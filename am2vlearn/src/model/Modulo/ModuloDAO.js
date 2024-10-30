"use strict";

import { getDatabase, ref, query, get, set, remove } from "firebase/database";
import ModuloDTO from "./ModuloDTO.js";
import ModelError from "../ModelError.js";
import Modulo from "./Modulo.js";

export default class DaoModulo {

    static promessaConexao = null;

    constructor() {
        this.obterConexao();
    }

    async obterConexao() {
        if (DaoModulo.promessaConexao == null) {
            DaoModulo.promessaConexao = new Promise(function (resolve, reject) {
                const db = getDatabase();
                if (db) {
                    resolve(db);
                } else {
                    reject(new ModelError("Não foi possível estabelecer conexão com o BD"));
                }
            });
        }
        return DaoModulo.promessaConexao;
    }

    async obterModuloPeloNome(nome) {
        let connectionDB = await this.obterConexao();
        console.log("Database connection established:", connectionDB);

        return new Promise((resolve, reject) => {
            let dbRefModulo = ref(connectionDB, 'modulos/' + nome);
            let consulta = query(dbRefModulo);
            console.log(`Querying database for Módulo: ${nome}`);

            get(consulta)
                .then(dataSnapshot => {
                    let mdl = dataSnapshot.val();
                    console.log('Dados resgatados do BD:', JSON.stringify(mdl, null, 2));

                    if (mdl != null && mdl.questoes) {
                        mdl.questoes = Object.keys(mdl.questoes).map(key => {
                            return { id: key, ...mdl.questoes[key] };
                        });
                        resolve(new Modulo(mdl.nome, mdl.questoes));
                    } else {
                        console.warn(`Nenhum módulo encontrado para o parâmetro: ${nome}`);
                        resolve(null);
                    }
                })
                .catch(error => {
                    console.error(`Erro na consulta: ${error}`);
                    reject(error);
                });
        });
    }

    async obterModulos() {
        let connectionDB = await this.obterConexao();

        return new Promise((resolve, reject) => {
            let conjModulos = [];
            let dbRefModulos = ref(connectionDB, 'modulos');
            let consulta = query(dbRefModulos);

            get(consulta)
                .then(dataSnapshot => {
                    dataSnapshot.forEach(dataSnapshotObj => {
                        let elem = dataSnapshotObj.val();
                        
                        // Convertendo as questões para um array de objetos
                        if (elem.questoes) {
                            elem.questoes = Object.keys(elem.questoes).map(key => {
                                return { id: key, ...elem.questoes[key] };
                            });
                        }

                        conjModulos.push(new Modulo(elem.nome, elem.questoes));
                    });

                    resolve(conjModulos);
                })
                .catch(e => {
                    console.error("Erro ao obter módulos:", e);
                    reject(e);
                });
        });
    }

    async incluir(modulo) {
        let connectionDB = await this.obterConexao();

        let resultado = new Promise((resolve, reject) => {
            let dbRefModulo = ref(connectionDB, 'modulos/' + modulo.getNome());
            let setPromise = set(dbRefModulo, new ModuloDTO(modulo));
            setPromise.then(() => { resolve(true); }, erro => { reject(erro); });
        });

        return resultado;
    }

    async alterar(modulo) {
        let connectionDB = await this.obterConexao();

        let resultado = new Promise((resolve, reject) => {
            let dbRefModulo = ref(connectionDB, 'modulos/' + modulo.getUid());
            let setPromise = set(dbRefModulo, new ModuloDTO(modulo));
            setPromise.then(() => { resolve(true); }, erro => { reject(erro); });
        });

        return resultado;
    }

    async excluir(modulo) {
        let connectionDB = await this.obterConexao();

        let resultado = new Promise((resolve, reject) => {
            let dbRefModulo = ref(connectionDB, 'modulos/' + modulo.getUid());
            let setPromise = remove(dbRefModulo);
            setPromise.then(() => { resolve(true); }, erro => { reject(erro); });
        });

        return resultado;
    }
}