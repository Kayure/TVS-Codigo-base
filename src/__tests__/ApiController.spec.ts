import request from 'supertest';
import server  from '../server';

describe("Testes da API", () => {
    it("Deve retornar uma saudação na rota /saudacao", async () => {
      const response = await request(server).get("/saudacao");
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ mensagem: "Olá, bem-vindo à API!" });
    });
  });


  test('dois mais dois', () => {
    const valor = 2 + 2;

    // Verifica se o valor é maior que 3
    expect(valor).toBeGreaterThan(3);     
    // Verifica se o valor é maior ou igual a 3.5
    expect(valor).toBeGreaterThanOrEqual(3.5); 
    // Verifica se o valor é menor que 5
    expect(valor).toBeLessThan(5); 
    // Verifica se o valor é menor ou igual a 4.5
    expect(valor).toBeLessThanOrEqual(4.5); 
  
    // toBe e toEqual são equivalentes para números
    expect(valor).toBe(4); // Verifica se o valor é igual a 4
    expect(valor).toEqual(4); // Verifica se o valor é igual a 4 
  });





  