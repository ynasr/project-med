'use strict';

/**
 * note router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter('api::note.note');

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: "POST",
    path: "/note/generate",
    handler: "api::note.note.gptGenerate",
  },
];

module.exports = customRouter(defaultRouter, myExtraRoutes);
