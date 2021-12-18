"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encomendaController = void 0;

var _encomenda = _interopRequireDefault(require("../models/encomenda.model"));

var _sendSMS = _interopRequireDefault(require("../services/sendSMS"));

var _receptor = _interopRequireDefault(require("../models/receptor.model"));

var _pessoa = _interopRequireDefault(require("../models/pessoa.model"));

var _usuario = _interopRequireDefault(require("../models/usuario.model"));

var _viagem = _interopRequireDefault(require("../models/viagem.model"));

var _categoria = _interopRequireDefault(require("../models/categoria.model"));

var _endereco = _interopRequireDefault(require("../models/endereco.model"));

var _generatePassword = _interopRequireDefault(require("../services/generatePassword"));

var _provincia = _interopRequireDefault(require("../models/provincia.model"));

var _distrito = _interopRequireDefault(require("../models/distrito.model"));

var _serviceEncomenda = _interopRequireDefault(require("../services/serviceEncomenda"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class encomendaController {
  async addEncomenda(request, response) {
    const pessoa = await _pessoa.default.findOne({
      where: {
        id: request.userId
      }
    });
    if (!pessoa) return response.status(404).json({
      error: true,
      message: 'Erro ao buscar dados do usuario',
      data: null
    });
    const usuario = await _usuario.default.findOne({
      where: {
        pessoa_id: pessoa.id
      }
    });
    if (!usuario) return response.status(404).json({
      error: true,
      message: 'Erro de autenticação',
      data: null
    });
    let erro = false;
    let msg = [];

    if (!pessoa.nome) {
      erro = true;
      msg.push("Perfil incompleto! Não pode marcar encomenda sem o nome");
    }

    if (!pessoa.apelido) {
      erro = true;
      msg.push("Perfil incompleto! Não pode marcar encomenda sem o apelido");
    }

    if (!usuario.dataNascimento) {
      erro = true;
      msg.push("Perfil incompleto! Não pode marcar encomenda sem a data de nascimento");
    }

    if (!pessoa.contato) {
      erro = true;
      msg.push("Perfil incompleto! Não pode marcar encomenda sem o número do telefone");
    }

    if (!pessoa.email) {
      erro = true;
      msg.push("Perfil incompleto! Não pode marcar encomenda sem o email");
    }

    if (!usuario.nrDocumento) {
      erro = true;
      msg.push("Perfil incompleto! Não pode marcar encomenda informar o número do teu documento de identificação");
    }

    if (!usuario.endereco_id) {
      erro = true;
      msg.push("Perfil incompleto! Não pode marcar encomenda sem os dados do seu endereço de residência");
    }

    if (!pessoa.sexo) {
      erro = true;
      msg.push("Perfil incompleto! Não pode marcar encomenda sem especificar o seu genêro");
    }

    if (erro) return response.status(400).json({
      error: true,
      message: msg,
      data: null
    });
    const {
      descricao,
      provinciaProv,
      provincia,
      distrito,
      bairro,
      peso,
      categoria,
      nome,
      apelido,
      contato
    } = request.body;

    if (!descricao) {
      erro = true;
      msg.push("Não pode marcar encomenda sem descrição");
    }

    if (!provincia) {
      erro = true;
      msg.push("Não pode marcar encomenda sem especificar a província destino");
    }

    if (!provinciaProv) {
      erro = true;
      msg.push("Não pode marcar encomenda sem especificar a província proveniente");
    }

    if (!distrito) {
      erro = true;
      msg.push("Não pode marcar encomenda sem especificar o distríto destino");
    }

    if (!bairro) {
      erro = true;
      msg.push("Não pode marcar encomenda sem especificar o bairro destino");
    }

    if (!bairro) {
      erro = true;
      msg.push("Não pode marcar encomenda sem especificar o bairro destino");
    }

    if (!peso) {
      erro = true;
      msg.push("Não pode marcar encomenda sem especificar o peso");
    }

    if (!categoria) {
      erro = true;
      msg.push("Não pode marcar encomenda sem especificar a categoria");
    }

    if (!nome) {
      erro = true;
      msg.push("Não pode marcar encomenda sem especificar o nome da pessoa que vai receber");
    }

    if (!contato) {
      erro = true;
      msg.push("Não pode marcar encomenda sem especificar o contato da pessoa que vai receber");
    }

    if (erro) return response.status(400).json({
      error: true,
      message: msg,
      data: null
    });
    const zonaDestino = await _provincia.default.findOne({
      where: {
        id: provincia
      }
    });
    const zonaProve = await _provincia.default.findOne({
      where: {
        id: provinciaProv
      }
    });
    const prec = await _serviceEncomenda.default.generatePrice(zonaDestino.zona, zonaProve.zona, peso);
    if (!prec) return response.status(404).json({
      error: true,
      message: 'Falha calculando o preço da encomenda',
      data: null
    }); // ENCOMENDA ENDERECO SAVE

    try {
      const endereco = await _endereco.default.create({
        provincia_id: provincia,
        distrito_id: distrito,
        bairro: bairro,
        encomenda: true
      }); // ENCOMENDA RECEPTOR SAVE

      try {
        const codigo = _generatePassword.default.generateCode(6);

        const pessoa = await _pessoa.default.create({
          nome: nome,
          apelido: apelido,
          contato: contato,
          senha: codigo
        });

        try {
          const receptor = await _receptor.default.create({
            pessoa_id: pessoa.id,
            encomendante: request.userId
          }); // ENCOMENDA SAVE

          try {
            const categ = await _categoria.default.findOne({
              where: {
                id: categoria
              }
            });

            try {
              const encomenda = await _encomenda.default.create({
                descricao: descricao,
                peso: peso,
                endereco_id: endereco.id,
                provinciaProv: provinciaProv,
                categoria_id: categ.id,
                preco: prec,
                receptor_id: pessoa.id,
                pessoa_id: request.userId
              }); //ENCOMENDA CODIGO

              const codigo = encomenda.id + _generatePassword.default.generateCode(3);

              try {
                await _encomenda.default.update({
                  codigo: codigo
                }, {
                  where: {
                    id: encomenda.id
                  }
                });

                try {
                  const message = nome + " nova encomenda para ti.";

                  const sms = _sendSMS.default.sendMessage('+258' + contato, message);
                } catch (error) {}

                return response.status(202).json({
                  error: false,
                  message: 'Encomenda adicionada',
                  data: null
                });
              } catch (error) {
                await _endereco.default.destroy({
                  where: {
                    id: endereco.id
                  }
                });
                await _pessoa.default.destroy({
                  where: {
                    id: pessoa.id
                  }
                });
                await _receptor.default.destroy({
                  where: {
                    id: receptor.id
                  }
                });
                await _encomenda.default.destroy({
                  where: {
                    id: encomenda.id
                  }
                });
                return response.status(404).json({
                  error: true,
                  message: 'Erro com a encomenda',
                  data: error
                });
              }
            } catch (error) {
              await _endereco.default.destroy({
                where: {
                  id: endereco.id
                }
              });
              await _pessoa.default.destroy({
                where: {
                  id: pessoa.id
                }
              });
              await _receptor.default.destroy({
                where: {
                  id: receptor.id
                }
              });
              return response.status(404).json({
                error: true,
                message: 'Falha ao adicionar encomenda',
                data: error
              });
            }
          } catch (error) {
            await _endereco.default.destroy({
              where: {
                id: endereco.id
              }
            });
            await _pessoa.default.destroy({
              where: {
                id: pessoa.id
              }
            });
            await _receptor.default.destroy({
              where: {
                id: receptor.id
              }
            });
            return response.status(404).json({
              error: true,
              message: 'Falha com a categoria',
              data: error
            });
          }
        } catch (error) {
          _endereco.default.destroy({
            where: {
              id: endereco.id
            }
          });

          _pessoa.default.destroy({
            where: {
              id: pessoa.id
            }
          });

          return response.status(404).json({
            error: true,
            message: 'Falha ao adicionar receptor'
          });
        }
      } catch (error) {
        await _endereco.default.destroy({
          where: {
            id: endereco.id
          }
        });
        return response.status(404).json({
          error: true,
          message: 'Falha ao adicionar dados do receptor',
          data: error
        });
      }
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha registrando endereço',
        data: error
      });
    }
  }

  async outrasEncomendas(request, response) {
    const viagemId = request.params.viagemId;

    try {
      const viagem = await _viagem.default.findOne({
        where: {
          id: viagemId,
          pessoa_id: request.userId
        }
      });
      if (!viagem) return response.status(404).json({
        error: true,
        message: 'Viagem não existe',
        data: null
      });

      try {
        const viagemEndereco = await _endereco.default.findOne({
          where: {
            id: viagem.endereco_id
          }
        });

        try {
          // BUSCAR ENDERECOS DAS ENCOMENDAS CORRESPONDENTES AO ENDERECO DA VIAGEM
          const encomendasEnderecos = await _endereco.default.findAll({
            where: {
              encomenda: true,
              provincia_id: viagemEndereco.provincia_id
            }
          });
          if (encomendasEnderecos.length <= 0) return response.status(404).json({
            error: true,
            message: 'Sem encomendas correspondentes',
            data: null
          }); // BUSCAR AS ENCOMENDAS

          let lista = [];

          for (let index = 0; index < encomendasEnderecos.length; index++) {
            const encomenda = await _encomenda.default.findOne({
              where: {
                endereco_id: encomendasEnderecos[index].id
              }
            });
            const provincia = await _provincia.default.findOne({
              where: {
                id: encomendasEnderecos[index].provincia_id
              }
            });
            const distrito = await _distrito.default.findOne({
              where: {
                id: encomendasEnderecos[index].distrito_id
              }
            });
            lista.push({
              'id': encomenda.id,
              'codigo': encomenda.codigo,
              'peso': encomenda.peso,
              'preco': encomenda.preco,
              'avenida': encomendasEnderecos[index].avenida ? encomendasEnderecos[index].avenida : 'Não informada',
              'rua': encomendasEnderecos[index].rua ? encomendasEnderecos[index].rua : 'Não informada',
              'bairro': encomendasEnderecos[index].bairro ? encomendasEnderecos[index].bairro : 'Não informado',
              'distrito': distrito.nome,
              'provincia': provincia.nome
            });
          }

          return response.status(202).json({
            error: false,
            message: 'Lista de enconendas',
            data: lista
          });
        } catch (error) {
          return response.status(404).json({
            error: true,
            message: 'Falha ao buscar encomendas correspondestes ao endereço da viagem',
            data: error
          });
        }
      } catch (error) {
        return response.status(404).json({
          error: true,
          message: 'Falha ao buscar endereço da viagem',
          data: error
        });
      }
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha buscando dados da viagem',
        data: error
      });
    }
  }

  async listarEncomendas(request, response) {
    try {
      const encomendas = await _encomenda.default.findAll({
        where: {
          pessoa_id: request.userId
        }
      });

      if (encomendas.length <= 0) {
        return response.status(200).json({
          error: false,
          message: 'Sem encomendas',
          data: null
        });
      }

      let lista = [];

      for (let index = 0; index < encomendas.length; index++) {
        const categ = await _categoria.default.findOne({
          where: {
            id: encomendas[index].categoria_id
          }
        });
        const receptor = await _pessoa.default.findOne({
          where: {
            id: encomendas[index].receptor_id
          }
        });
        lista.push({
          'id': encomendas[index].id,
          'codigo': encomendas[index].codigo,
          'descricao': encomendas[index].descricao,
          'peso': encomendas[index].peso,
          'preco': encomendas[index].preco,
          'categoria_id': categ.id,
          'categoria_nome': categ.descricao,
          'receptor_id': receptor.id,
          'receptor_nome': receptor.nome,
          'receptor_apelido': receptor.apelido,
          'receptor_contato': receptor.contato
        });
      }

      return response.status(202).json({
        error: false,
        message: 'Lista de encomendas',
        data: lista
      });
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha ao listar encomendas',
        data: error
      });
    }
  }

}

exports.encomendaController = encomendaController;