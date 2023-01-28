import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import Users from '../database/models/UsersModel';
import  userMocked  from './mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(Users, 'findOne').resolves({
      ...userMocked,
    } as Users);
  });

  after(() => {
    (Users.findOne as sinon.SinonStub).restore();
  });

  it('testando a rota de login', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'felipe@luis.com', password: 'alunotrybe123' });

    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('testando o processo de validação com senha incorreta', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'felipe@luis.com', password: 24 });
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.equal({ message: 'Incorrect email or password' });
  });

  it('testando processo de validação sem a senha', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'felipe@luis.com' });
    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.equal({ message: 'All fields must be filled' });
  });

  it('testando processo de validação sem o email', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ password: 'alunotrybe123' });
    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.equal({ message: 'All fields must be filled' });
  });

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
