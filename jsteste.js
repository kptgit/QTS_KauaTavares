
import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
    assertNotEquals,
    assertStrictEquals,
    assertObjectMatch,
    assertThrows,
} from "http://deno.land/std/testing/asserts.ts"

let nome = 'Teste'
let lista = ['teste1', 'teste2', 'teste3', 'teste4']
let testestring = 'Mensagem 1'

Deno.test("Teste 1 - Correct", () => {
    assertEquals(nome, "teste1"); 
    assertStringIncludes(nome, "teste1");    
})

Deno.test("Teste 2 - Correct", ()=> {
    assertArrayIncludes(lista, 
        ["teste2", "teste3", "teste4"],
        "erro");
})

Deno.test("Teste 3 - Correct ", () =>{

  assertObjectMatch ( 
    {  Silas :  true ,  Teste0 :  false  } , 
    { 
      Silas :  true , 
    } , 
  ) ;

})



Deno.test("Teste 4 - Falha", () => {
    assertStringIncludes(testestring, "Mesnagem 2");    
})

Deno.test("Teste 5 - Falha", () => {
  assertNotEquals("Careca", "Careca");
 
});

Deno.test("Teste 6 - Falha", () => {
    assertStrictEquals("Mono", "Bola");