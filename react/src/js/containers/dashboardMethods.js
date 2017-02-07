export default {
  collectionTo2DimTable(list) {
    const result = [];
    for (let i = 0; i < list.allIds.length; i++) {
      const row = {
        class: 'gradeA',
        cells: [],
      };
      const person = list.byId[list.allIds[i]];
      row.cells.push({ value: person.firstName });
      row.cells.push({ value: person.lastName });
      row.cells.push({ value: person.photoUrl });
      row.cells.push({ value: person.birthDate });
      row.cells.push({ value: person.user });
      result.push(row);
    }
    return result;
  },
};
