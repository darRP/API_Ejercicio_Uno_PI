'use strict'

class CalcularPiController {
    async getPI({ request, response }) {
        try {
            let numero = request.get().numero;
            if (!isNaN(numero) && numero != '') {
                numero = parseInt(numero);
                if (numero >= 0) {
                    let numeroMin = (numero / 2) % 1 == 0 ? numero / 2 : (numero / 2) - 0.5;
                    let numeroRandom = Math.floor(Math.random() * (numero + 1 - numeroMin)) + numeroMin;
                    let respuestaPI = Math.PI.toFixed(numeroRandom);
                    return response.status(200).json({ PI: respuestaPI, numeroRandom });
                } else {
                    return response.status(200).json({ message: 'Por favor ingrese solo números positivos o cero' });
                }

            } else {
                if (numero != '') {
                    return response.status(200).json({ message: 'Por favor no ingrese string solo números' });
                } else {
                    return response.status(200).json({ message: 'Por favor ingrese algún parámetro numérico' });
                }
            }
        } catch (error) {
            return response.status(500).json({ ERROR: error });
        }
    }
}

module.exports = CalcularPiController