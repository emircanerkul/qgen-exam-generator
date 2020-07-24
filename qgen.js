const BezierEasing = require('bezier-easing');

module.exports = class QGEN {
  constructor(structure) {
    this.structure = structure;

    this.data = {
      provinces: [
        'Adana',
        'Adıyaman',
        'Afyon',
        'Ağrı',
        'Amasya',
        'Ankara',
        'Antalya',
        'Artvin',
        'Aydın',
        'Balıkesir',
        'Bilecik',
        'Bingöl',
        'Bitlis',
        'Bolu',
        'Burdur',
        'Bursa',
        'Çanakkale',
        'Çankırı',
        'Çorum',
        'Denizli',
        'Diyarbakır',
        'Edirne',
        'Elazığ',
        'Erzincan',
        'Erzurum',
        'Eskişehir',
        'Gaziantep',
        'Giresun',
        'Gümüşhane',
        'Hakkari',
        'Hatay',
        'Isparta',
        'Mersin',
        'İstanbul',
        'İzmir',
        'Kars',
        'Kastamonu',
        'Kayseri',
        'Kırklareli',
        'Kırşehir',
        'Kocaeli',
        'Konya',
        'Kütahya',
        'Malatya',
        'Manisa',
        'Kahramanmaraş',
        'Mardin',
        'Muğla',
        'Muş',
        'Nevşehir',
        'Niğde',
        'Ordu',
        'Rize',
        'Sakarya',
        'Samsun',
        'Siirt',
        'Sinop',
        'Sivas',
        'Tekirdağ',
        'Tokat',
        'Trabzon',
        'Tunceli',
        'Şanlıurfa',
        'Uşak',
        'Van',
        'Yozgat',
        'Zonguldak',
        'Aksaray',
        'Bayburt',
        'Karaman',
        'Kırıkkale',
        'Batman',
        'Şırnak',
        'Bartın',
        'Ardahan',
        'Iğdır',
        'Yalova',
        'Karabük',
        'Kilis',
        'Osmaniye',
        'Düzce'
      ],
      male_names: [
        'Mehmet',
        'Ali',
        'Mustafa',
        'Ahmet',
        'Hüseyin',
        'Hasan',
        'İbrahim',
        'İsmail',
        'Osman',
        'Halil',
        'Ömer',
        'Yusuf',
        'Süleyman',
        'Ramazan',
        'Murat',
        'Abdullah',
        'Mahmut',
        'Salih',
        'Kemal',
        'Recep',
        'Yaşar',
        'Emin',
        'Bekir',
        'Kadir',
        'Bayram',
        'Şükrü',
        'Cemal',
        'Musa',
        'Nuri',
        'Adem',
        'Memet',
        'Metin',
        'Dursun',
        'Orhan',
        'Haci',
        'Arif',
        'Şaban',
        'Fatih',
        'Zeki',
        'İsmet',
        'İhsan',
        'Abdurrahman',
        'Sabri',
        'Yilmaz',
        'Celal',
        'Kamil',
        'Riza',
        'Hakki',
        'Selahattin',
        'Veli',
        'Muzaffer',
        'Hakan',
        'Mevlüt',
        'Durmuş',
        'Cemil',
        'Muharrem',
        'Necati',
        'Yakup',
        'Nurettin',
        'Kazim',
        'Halit',
        'Erol',
        'Sadik',
        'İsa',
        'Ekrem',
        'Sait',
        'Aziz',
        'Ayhan',
        'Serkan',
        'Kenan',
        'Niyazi',
        'Cengiz',
        'Nihat',
        'Gökhan',
        'Selim',
        'Yunus',
        'Bilal',
        'Aydin',
        'Haydar',
        'Remzi',
        'Muhammet',
        'Bülent',
        'Uğur',
        'İlyas',
        'Şevket',
        'Mesut',
        'Faruk',
        'Sami',
        'Hikmet',
        'Hamdi',
        'Tahir',
        'Erkan',
        'Hamit',
        'Şerif',
        'Ercan',
        'Sinan',
        'Tahsin',
        'Ziya',
        'Adnan',
        'İrfan'
      ],
      female_names: [
        'Fatma',
        'Ayşe',
        'Emine',
        'Hatice',
        'Zeynep',
        'Meryem',
        'Şerife',
        'Sultan',
        'Hanife',
        'Elif',
        'Fadime',
        'Havva',
        'Cemile',
        'Zeliha',
        'Zehra',
        'Sevim',
        'Hacer',
        'Hayriye',
        'Kadriye',
        'Gülsüm',
        'Aysel',
        'Halime',
        'Hanim',
        'Asiye',
        'Hava',
        'Döndü',
        'Leyla',
        'Melek',
        'Zekiye',
        'Keziban',
        'Naciye',
        'Hülya',
        'Nuriye',
        'Ayten',
        'Aynur',
        'Makbule',
        'Saniye',
        'Türkan',
        'Güllü',
        'Nazmiye',
        'Dudu',
        'Safiye',
        'Özlem',
        'Hamide',
        'Huriye',
        'Feride',
        'Rukiye',
        'Yasemin',
        'Şükran',
        'Remziye',
        'Rahime',
        'Dilek',
        'Rabia',
        'Songül',
        'Sevgi',
        'Selma',
        'Yeter',
        'Münevver',
        'Esma',
        'Filiz',
        'Nurten',
        'Seher',
        'Meliha',
        'Saliha',
        'Hediye',
        'Nazife',
        'Saadet',
        'Perihan',
        'Medine',
        'Güler',
        'Fikriye',
        'Zahide',
        'Hafize',
        'Cennet',
        'Gülten',
        'Semra',
        'Müzeyyen',
        'Arife',
        'Elmas',
        'Gönül',
        'Raziye',
        'Şükriye',
        'Bedriye',
        'Hatun',
        'Yildiz',
        'Necla',
        'Serpil',
        'Nuray',
        'Habibe',
        'Gülay',
        'Zübeyde',
        'Neriman',
        'Arzu',
        'Lütfiye',
        'Melahat',
        'Nurcan',
        'Nermin',
        'Ümmü',
        'Sibel',
        'Gülşen'
      ],
      surnames: [
        'YILMAZ',
        'KAYA',
        'DEMIR',
        'SAHIN',
        'CELIK',
        'YILDIZ',
        'YILDIRIM',
        'OZTURK',
        'AYDIN',
        'OZDEMIR',
        'ARSLAN',
        'DOGAN',
        'KILIC',
        'CETIN',
        'ASLAN',
        'KARA',
        'KOC',
        'KURT',
        'OZKAN',
        'ACAR',
        'OZCAN',
        'SIMSEK',
        'CAKIR',
        'KORKMAZ',
        'ERDOGAN',
        'YAVUZ',
        'CAN',
        'POLAT',
        'SEN',
        'YALCIN',
        'GULER',
        'AKTAS',
        'GUNES',
        'BULUT',
        'UNAL',
        'KESKIN',
        'ISIK',
        'BOZKURT',
        'AVCI',
        'TURAN',
        'COSKUN',
        'GUL',
        'OZER',
        'SARI',
        'KAPLAN',
        'YUKSEL',
        'KOSE',
        'TEKIN',
        'AKSOY',
        'ATES',
        'TAS',
        'UZUN',
        'YIGIT',
        'KARATAS',
        'CEYLAN',
        'KARACA',
        'CALISKAN',
        'COBAN',
        'DEMIRCI',
        'CICEK',
        'CAKMAK',
        'GUNGOR',
        'BAYRAM',
        'YASAR',
        'UYSAL',
        'CIFTCI',
        'DENIZ',
        'UCAR',
        'ERDEM',
        'KAHRAMAN',
        'GENC',
        'DUMAN',
        'CINAR',
        'AKIN',
        'SONMEZ',
        'DEMIREL',
        'KUCUK',
        'AY',
        'YAMAN',
        'MUTLU',
        'KILINC',
        'CETINKAYA',
        'KOCAK',
        'GUMUS',
        'GUNDUZ',
        'OZ',
        'ALTUN',
        'EREN',
        'COLAK',
        'DONMEZ',
        'GUVEN',
        'KARAKAYA',
        'TUNC',
        'AYDEMIR',
        'GOK',
        'KARAMAN',
        'EROL',
        'OZEN',
        'KARTAL',
        'BALCI'
      ]
    };

    this.timing_fn = {
      //linear: BezierEasing(0, 0, 1, 1),
      //ease_in: BezierEasing(0.42, 0, 1, 1),
      ease_out: BezierEasing(0, 0, 0.3, 1)
    };

    this.difficulties = {
      q1: {
        max: 1,
        fn: (combination_length, columns_length) =>
          this.timing_fn.ease_out(combination_length / columns_length) *
          this.difficulties.q1.max
      },
      q2: {
        max: 3,
        fn: (combination_length, columns_length) =>
          this.difficulties.q1.fn(combination_length, columns_length) +
          (this.difficulties.q2.max - this.difficulties.q1.max)
      },
      q3: {
        max: 6,
        fn: (combination_length, columns_length) =>
          this.difficulties.q2.fn(combination_length, columns_length) +
          (this.difficulties.q3.max - this.difficulties.q2.max)
      }
    };

    let t0 = performance.now();
    this.result = [this.q1(), this.q2(), this.q3()];
    this.length = 0;
    this.result.forEach((e) => {
      this.length += e.questions.length;
    });
    this.time = performance.now() - t0;
  }

  q1() {
    let result = {
      question:
        '{table} tablosunun {columns} değerlerini veren sql komutu nedir?',
      answer: 'SELECT {columns} FROM {table}',
      questions: [],
      answers: [],
      difficulties: []
    };

    Object.entries(this.structure).forEach((element) => {
      let table = element[0];
      let columns = Object.keys(this.structure[table].columns);
      let combinations = this.getCombinations(columns);

      combinations.forEach((combination) => {
        result.questions.push(
          this.capitalizeFirstLetter(
            result.question
              .replace('{table}', table)
              .replace('{columns}', combination.join(', '))
          )
        );

        result.answers.push(
          result.answer
            .replace('{table}', table)
            .replace('{columns}', combination.join(', '))
        );

        result.difficulties.push(
          this.difficulties.q1.fn(combination.length, columns.length)
        );
      });
    });

    return result;
  }

  q2() {
    let result = {
      question:
        '{table} tablosunun {columns} değerlerini {column} değerine göre {order} sıra ile veren sql komutu nedir?',
      answer: 'SELECT {columns} FROM {table} ORDER BY {column} {order}',
      questions: [],
      answers: [],
      difficulties: []
    };

    Object.entries(this.structure).forEach((element) => {
      let table = element[0];
      let columns = Object.keys(this.structure[table].columns);
      let combinations = this.getCombinations(columns);
      let orders = ['ASC', 'DESC'];

      combinations.forEach((combination) => {
        columns.forEach((column) => {
          orders.forEach((order) => {
            result.questions.push(
              this.capitalizeFirstLetter(
                result.question
                  .replace('{table}', table)
                  .replace('{columns}', combination.join(', '))
                  .replace('{column}', column)
                  .replace('{order}', order == 'ASC' ? 'artan' : 'azalan')
              )
            );

            result.answers.push(
              result.answer
                .replace('{table}', table)
                .replace('{columns}', combination.join(', '))
                .replace('{column}', column)
                .replace('{order}', order)
            );

            result.difficulties.push(
              this.difficulties.q2.fn(combination.length, columns.length)
            );
          });
        });
      });
    });
    return result;
  }

  q3() {
    let result = {
      question:
        '{table} tablosunun "{column#province}" verisi "{province}" değerine eşit olan {columns} değerlerini {column} değerine göre {order} sıra ile veren sql komutu nedir?',
      answer:
        'SELECT {columns} FROM {table} WHERE {column#province}="{province}" ORDER BY {column} {order}',
      questions: [],
      answers: [],
      difficulties: []
    };

    Object.entries(this.structure).forEach((element) => {
      let table = element[0];
      let columns = Object.keys(this.structure[table].columns);
      let combinations = this.getCombinations(columns);
      let orders = ['ASC', 'DESC'];

      combinations.forEach((combination) => {
        columns.forEach((column) => {
          columns
            .filter((x) =>
              this.structure[table].columns[x].includes('province')
            )
            .forEach((column_province) => {
              orders.forEach((order) => {
                this.data.provinces.forEach((province) => {
                  result.questions.push(
                    this.capitalizeFirstLetter(
                      result.question
                        .replace('{table}', table)
                        .replace('{columns}', combination.join(', '))
                        .replace('{column}', column)
                        .replace('{order}', order == 'ASC' ? 'artan' : 'azalan')
                        .replace('{province}', province)
                        .replace('{column#province}', column_province)
                    )
                  );

                  result.answers.push(
                    result.answer
                      .replace('{table}', table)
                      .replace('{columns}', combination.join(', '))
                      .replace('{column}', column)
                      .replace('{order}', order)
                      .replace('{province}', province)
                      .replace('{column#province}', column_province)
                  );

                  result.difficulties.push(
                    this.difficulties.q3.fn(combination.length, columns.length)
                  );
                });
              });
            });
        });
      });
    });
    return result;
  }

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getCombinations(set) {
    var combi = [];
    var temp = [];
    var slent = Math.pow(2, set.length);

    for (var i = 0; i < slent; i++) {
      temp = [];
      for (var j = 0; j < set.length; j++) {
        if (i & Math.pow(2, j)) {
          temp.push(set[j]);
        }
      }
      if (temp.length > 0) {
        combi.push(temp);
      }
    }

    combi.sort((a, b) => a.length - b.length);
    return combi;
  }

  //https://gist.github.com/axelpale/3118596
  getKCombinations(set, k) {
    var i, j, combs, head, tailcombs;

    // There is no way to take e.g. sets of 5 elements from
    // a set of 4.
    if (k > set.length || k <= 0) {
      return [];
    }

    // K-sized set has only one K-sized subset.
    if (k == set.length) {
      return [set];
    }

    // There is N 1-sized subsets in a N-sized set.
    if (k == 1) {
      combs = [];
      for (i = 0; i < set.length; i++) {
        combs.push([set[i]]);
      }
      return combs;
    }

    // Assert {1 < k < set.length}

    // Algorithm description:
    // To get k-combinations of a set, we want to join each element
    // with all (k-1)-combinations of the other elements. The set of
    // these k-sized sets would be the desired result. However, as we
    // represent sets with lists, we need to take duplicates into
    // account. To avoid producing duplicates and also unnecessary
    // computing, we use the following approach: each element i
    // divides the list into three: the preceding elements, the
    // current element i, and the subsequent elements. For the first
    // element, the list of preceding elements is empty. For element i,
    // we compute the (k-1)-computations of the subsequent elements,
    // join each with the element i, and store the joined to the set of
    // computed k-combinations. We do not need to take the preceding
    // elements into account, because they have already been the i:th
    // element so they are already computed and stored. When the length
    // of the subsequent list drops below (k-1), we cannot find any
    // (k-1)-combs, hence the upper limit for the iteration:
    combs = [];
    for (i = 0; i < set.length - k + 1; i++) {
      // head is a list that includes only our current element.
      head = set.slice(i, i + 1);
      // We take smaller combinations from the subsequent elements
      tailcombs = this.getKCombinations(set.slice(i + 1), k - 1);
      // For each (k-1)-combination we join it with the current
      // and store it to the set of k-combinations.
      for (j = 0; j < tailcombs.length; j++) {
        combs.push(head.concat(tailcombs[j]));
      }
    }
    return combs;
  }
};
