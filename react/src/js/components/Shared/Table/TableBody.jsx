import React from 'react';

export default function TableBody(props) {
  return (
    <tbody>
      <tr class="gradeA odd" role="row">
        <td class="sorting_1">Gecko</td>
        <td>Firefox 1.0</td>
        <td>Win 98+ / OSX.2+</td>
        <td class="center">1.7</td>
        <td class="center">A</td>
      </tr>
      <tr class="gradeA even" role="row">
        <td class="sorting_1">Gecko</td>
        <td>Firefox 1.5</td>
        <td>Win 98+ / OSX.2+</td>
        <td class="center">1.8</td>
        <td class="center">A</td>
      </tr>
      <tr class="gradeA odd" role="row">
        <td class="sorting_1">Gecko</td>
        <td>Firefox 2.0</td>
        <td>Win 98+ / OSX.2+</td>
        <td class="center">1.8</td>
        <td class="center">A</td>
      </tr>
      <tr class="gradeA even" role="row">
        <td class="sorting_1">Gecko</td>
        <td>Firefox 3.0</td>
        <td>Win 2k+ / OSX.3+</td>
        <td class="center">1.9</td>
        <td class="center">A</td>
      </tr>
      <tr class="gradeA odd" role="row">
        <td class="sorting_1">Gecko</td>
        <td>Camino 1.0</td>
        <td>OSX.2+</td>
        <td class="center">1.8</td>
        <td class="center">A</td>
      </tr>
      <tr class="gradeA even" role="row">
        <td class="sorting_1">Gecko</td>
        <td>Camino 1.5</td>
        <td>OSX.3+</td>
        <td class="center">1.8</td>
        <td class="center">A</td>
      </tr>
      <tr class="gradeA odd" role="row">
        <td class="sorting_1">Gecko</td>
        <td>Netscape 7.2</td>
        <td>Win 95+ / Mac OS 8.6-9.2</td>
        <td class="center">1.7</td>
        <td class="center">A</td>
      </tr>
      <tr class="gradeA even" role="row">
        <td class="sorting_1">Gecko</td>
        <td>Netscape Browser 8</td>
        <td>Win 98SE+</td>
        <td class="center">1.7</td>
        <td class="center">A</td>
      </tr>
      <tr class="gradeA odd" role="row">
        <td class="sorting_1">Gecko</td>
        <td>Netscape Navigator 9</td>
        <td>Win 98+ / OSX.2+</td>
        <td class="center">1.8</td>
        <td class="center">A</td>
      </tr>
      <tr class="gradeA even" role="row">
        <td class="sorting_1">Gecko</td>
        <td>Mozilla 1.0</td>
        <td>Win 95+ / OSX.1+</td>
        <td class="center">1</td>
        <td class="center">A</td>
      </tr>
    </tbody>
  );
}

TableBody.propTypes = {
  // your propTypes here
  title: React.PropTypes.string.isRequired,
};
