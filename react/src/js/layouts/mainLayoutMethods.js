import omit from 'lodash.omit';
import { deepCopyStoreCollection } from '../helpers/objectManipulation';

export default {
  buildMenuTree(list) {
    if (list && list.allIds) {
      // building the tree out of store collection
      const copiedList = deepCopyStoreCollection(list, (item) => {
        // callback for each item will rename '_id_' to 'key'
        const result = item; // to get rid of linting 'no-param-reassign'
        result.key = result._id;
        delete result._id;
        return result;
      });
      for (let i = 0; i < copiedList.allIds.length; i++) {
        const currentItem = copiedList.byId[copiedList.allIds[i]];
        if (currentItem.parentId) {
          // has parent
          const parentItem = copiedList.byId[currentItem.parentId];
          // if parentItem doesn't exist here - data in db is inconsistent
          if (!parentItem.items) {
            parentItem.items = [];
          }
          // only pushing the reference, so if currentItem is a parent itself,
          // its children can be added to its 'items' during this iteration
          parentItem.items.push(currentItem);
        }
      }
      const result = [];
      // cleaning the copiedList out of nodes that were copied to their parents before
      for (let i = 0; i < copiedList.allIds.length; i++) {
        const item = copiedList.byId[copiedList.allIds[i]];
        if (item) {
          if (item.parentId) {
            // was copied before to else's 'items'
            // 'delete item;' would throw 'Parsing error: Deleting local variable in strict mode'
            delete copiedList.byId[copiedList.allIds[i]];
          } else {
            // is a parent itself
            result.push(item);
          }
        }
      }
      // returns list of roots with their children inside
      return result;
    }
    return null;
  },

  mapNotificationsToAlerts(list, currentUser) {
    return list.allIds
      .filter(id =>
        list.byId[id].type === 'notification' &&
        list.byId[id].users.includes(currentUser))
      .map(item => ({
        ...omit(list.byId[item], ['_id', 'users']),
        key: list.byId[item]._id,
      }))
      .concat([
        {
          key: new Date().getTime(),
          type: 'divider',
        }, {
          key: new Date().getTime() + 1,
          type: 'see-all',
          titles: {
            gb: 'See All Alerts',
            pl: 'Wszystkie powiadomienia',
          },
          href: '#' },
      ]);
  },
};
