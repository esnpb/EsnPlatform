var omit = require('lodash.omit');

module.exports = function getQuery(reqQuery) {
  return {
    criteria: omit(reqQuery, ['page', 'pageSize', 'sort', 'sortDir']),
    paging: {
      page: reqQuery.page,
      pageSize: reqQuery.pageSize,
      sort: reqQuery.sort,
      sortDir: reqQuery.sortDir,
    }
  };
};
