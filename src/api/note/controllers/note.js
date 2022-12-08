'use strict';

/**
 *  note controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const gptGenerator = require("../../../helpers/gptGenerator");

module.exports = createCoreController('api::note.note', ({ strapi }) => ({
  async gptGenerate(ctx) {
    const { prompt } = ctx.request.body;
    console.log('before call...')
    const patientNote = await gptGenerator.generatePatientNote(prompt);
    console.log(`PATIENT NOTE: ${patientNote}`);
    await strapi.entityService.create('api::note.note', {
        response: patientNote,
      });
    return patientNote;
  },
}));