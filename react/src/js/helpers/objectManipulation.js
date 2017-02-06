export function omit(myObj, deleteKey) {
  return Object.keys(myObj)
    .filter(key => key !== deleteKey)
    .reduce((result, current) => ({ ...result, [current]: myObj[current] }), {});
}

export function normalizePayload(payload, keepId = true) {
  const result = {};
  for (let i = 0; i < payload.length; i++) {
    if (keepId) {
      result[payload[i]._id] = {
        ...payload[i],
      };
    } else {
      result[payload[i]._id] = {
        ...omit(payload[i], '_id'),
      };
    }
  }
  return result;
}

export function deepCopyStoreCollection(collection, eachItemCallback) {
  // simplified, copies only 1st and a little bit of second level
  const result = {
    byId: {},
    allIds: collection.allIds.slice(),
  };
  for (let i = 0; i < collection.allIds.length; i++) {
    // iterate through collection items
    const item = collection.byId[collection.allIds[i]];
    const itemProps = Object.keys(item);
    result.byId[collection.allIds[i]] = {};
    for (let j = 0; j < itemProps.length; j++) {
      // iterate through item props
      if (item[itemProps[j]] == null) {
        // copying null valued props
        result.byId[collection.allIds[i]][itemProps[j]] = null;
      } else if (Array.isArray(item[itemProps[j]])) {
        // copying array props
        result.byId[collection.allIds[i]][itemProps[j]] = item[itemProps[j]].slice();
      } else if (typeof item[itemProps[j]] === 'object') {
        // copying object props simplified way
        result.byId[collection.allIds[i]][itemProps[j]] = { ...item[itemProps[j]] };
      } else {
        // copying other type of props
        result.byId[collection.allIds[i]][itemProps[j]] = item[itemProps[j]];
      }
    }
    if (eachItemCallback) {
      eachItemCallback(result.byId[collection.allIds[i]]);
    }
  }
  return result;
}
