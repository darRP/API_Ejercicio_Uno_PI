'use strict'

const { test, trait } = use('Test/Suite')('Calcular PI')
trait('Test/ApiClient')
test('API de calculo de PI Status 200 segun valor 0', async({ client }) => {
    const response = await client.get('/getPI').query({ 'numero': '0' }).send().end()
    response.assertStatus(200)
    response.assertJSONSubset({
        "PI": "3",
        "numeroRandom": 0
    });
})
test('API de calculo de PI Status 200 con mensaje de error en caso de que nummero (parámetro) sea negativo -1', async({ client }) => {
    const response = await client.get('/getPI').query({ 'numero': '-1' }).send().end()
    response.assertStatus(200)
    response.assertJSONSubset({
        "message": "Por favor ingrese solo números positivos o cero"
    });
})
test('API de calculo de PI Status 200 con mensaje de error en caso de que nummero (parámetro) sea String', async({ client }) => {
    const response = await client.get('/getPI').query({ 'numero': 'STRING' }).send().end()
    response.assertStatus(200)
    response.assertJSONSubset({
        "message": "Por favor no ingrese string solo números"
    });
})
test('API de calculo de PI Status 200 con mensaje de error en caso de que nummero (parámetro) sea "" (vacio)', async({ client }) => {
    const response = await client.get('/getPI').query({ 'numero': '' }).send().end()
    response.assertStatus(200)
    response.assertJSONSubset({
        "message": "Por favor ingrese algún parámetro numérico"
    });
})