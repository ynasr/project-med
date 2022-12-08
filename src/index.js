'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
   bootstrap: async (/*{ strapi }*/) => {
    console.info(`NODE ENVIRONMENT: ${process.env.NODE_ENV}`);
    if (process.env.NODE_ENV === 'development') {
      const runDevLocal = require('../config/functions/runDevLocal')
      await runDevLocal.runDev();
    }
  },
};