'use strict';

/**
 *  note controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const gptGenerator = require("../../../helpers/gptGenerator");

module.exports = createCoreController('api::note.note', ({ strapi }) => ({
  async gptGenerate(ctx) {
    const { sex, age, unit, condition, history } = ctx.request.body;
    const prompt = `Example assessment and treatment plans for ${sex} patient aged ${age} ${unit} diagnosed with ${condition} and with a pertinent medical history of ${history.join(',')}`;
    console.log('before call...')
    const patientNote = await gptGenerator.generatePatientNote(prompt);
    console.log(`PATIENT NOTE: ${patientNote}`);
    await strapi.entityService.create('api::note.note', {
        response: patientNote,
      });
    return patientNote;
  },
}));