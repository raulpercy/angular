/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

(function(global) {
  global.ng = global.ng || {};
  global.ng.common = global.ng.common || {};
  global.ng.common.locales = global.ng.common.locales || {};
  const u = undefined;
  function plural(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return 5;
  }
  root.ng.common.locales['se'] = [
    'se',
    [['i.b.', 'e.b.'], u, ['iđitbeaivet', 'eahketbeaivet']],
    [['i.b.', 'e.b.'], u, ['iđitbeaivi', 'eahketbeaivi']],
    [
      ['S', 'V', 'M', 'G', 'D', 'B', 'L'], ['sotn', 'vuos', 'maŋ', 'gask', 'duor', 'bear', 'láv'],
      [
        'sotnabeaivi', 'vuossárga', 'maŋŋebárga', 'gaskavahkku', 'duorasdat', 'bearjadat',
        'lávvardat'
      ],
      ['sotn', 'vuos', 'maŋ', 'gask', 'duor', 'bear', 'láv']
    ],
    u,
    [
      ['O', 'G', 'N', 'C', 'M', 'G', 'S', 'B', 'Č', 'G', 'S', 'J'],
      [
        'ođđj', 'guov', 'njuk', 'cuo', 'mies', 'geas', 'suoi', 'borg', 'čakč', 'golg', 'skáb',
        'juov'
      ],
      [
        'ođđajagemánnu', 'guovvamánnu', 'njukčamánnu', 'cuoŋománnu', 'miessemánnu', 'geassemánnu',
        'suoidnemánnu', 'borgemánnu', 'čakčamánnu', 'golggotmánnu', 'skábmamánnu', 'juovlamánnu'
      ]
    ],
    u,
    [['o.Kr.', 'm.Kr.'], u, ['ovdal Kristtusa', 'maŋŋel Kristtusa']],
    1,
    [6, 0],
    ['y-MM-dd', 'y MMM d', 'y MMMM d', 'y MMMM d, EEEE'],
    ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
    ['{1} {0}', u, u, u],
    [',', ' ', ';', '%', '+', '−', '·10^', '·', '‰', '∞', '¤¤¤', ':'],
    ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
    'kr',
    'norgga kruvdno',
    {
      'DKK': ['Dkr', 'kr'],
      'JPY': ['JP¥', '¥'],
      'NOK': ['kr'],
      'SEK': ['Skr', 'kr'],
      'THB': ['฿'],
      'USD': ['US$', '$']
    },
    plural,
    []
  ];
})(typeof globalThis !== 'undefined' && globalThis || typeof global !== 'undefined' && global ||
   typeof window !== 'undefined' && window);
