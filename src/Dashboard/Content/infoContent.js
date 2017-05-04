const infoContent = [
  {
  url: 'https://farm1.staticflickr.com/1/129791271_17f2285f6a.jpg',
  lat: 43.639429,
  lon: -79.412441,
  neighbourhood: 'Liberty Village',
  locality: 'Toronto',
  region: 'Ontario',
  country: 'Canada',
  photog: 'Jesse Pinkman',
  views: 426,
  score1: 0.13607524,
    red1: 92,
    green1: 88,
    blue1: 67,
  score2: 0.13316193,
    red2: 189,
    green2: 200,
    blue2: 197,
  score3: 0.13597432,
    red3: 121,
    green3: 117,
    blue3: 93,
  score4: 0.084974706,
    red4: 148,
    green4: 157,
    blue4: 151
  },
  {
  url: 'https://farm1.staticflickr.com/1/130145242_50c7c94833.jpg',
  lat: 43.639429,
  lon: -79.412441,
  neighbourhood: 'Liberty Village',
  locality: 'Toronto',
  region: 'Ontario',
  country: 'Canada',
  photog: 'Jesse Pinkman',
  views: 263,
  score1: 0.49378803,
    red1: 45,
    green1: 46,
    blue1: 45,
  score2: 0.10656666,
    red2: 128,
    green2: 115,
    blue2: 108,
  score3: 0.0112846885,
    red3: 229,
    green3: 229,
    blue3: 220,
  score4: 0.19705312,
    red4: 28,
    green4: 29,
    blue4: 28
  },
  {url: 'https://farm1.staticflickr.com/51/130191078_d3d712978b.jpg',
  lat: 43.639429,
  lon: -79.412441,
  neighbourhood: 'Liberty Village',
  locality: 'Toronto',
  region: 'Ontario',
  country: 'Canada',
  photog: 'marc falideau',
  views: 517,
  score1: 0.21303861,
    red1: 156,
    green1: 120,
    blue1: 103,
  score2: 0.09397806,
    red2: 15,
    green2: 136,
    blue2: 222,
  score3: 0.026732063,
    red3: 25,
    green3: 55,
    blue3: 82,
  score4: 0.20251384,
    red4: 183,
    green4: 147,
    blue4: 128 },
  {
    url: 'https://farm1.staticflickr.com/80/212798849_534bac3dfa.jpg',
    lat: 43.637383,
    lon: -79.424779,
    neighbourhood: 'Liberty Village',
    locality: 'Toronto',
    region: 'Ontario',
    country: 'Canada',
    photog: 'p caira',
    views: 1361,
    score1: 0.40358973,
      red1: 156,
      green1: 156,
      blue1: 156,
    score2: 0.05783822,
      red2: 15,
      green2: 15,
      blue2: 15,
    score3: 0.22552256,
      red3: 119,
      green3: 119,
      blue3: 119,
    score4: 0.12960601,
      red4: 191,
      green4: 191,
      blue4: 191
  },
  {
  url: 'https://farm2.staticflickr.com/1272/866368641_1e113aafe1.jpg',
  lat: 43.641137,
  lon: -79.388923,
  neighbourhood: 'Entertainment District',
  locality: 'Toronto',
  region: 'Ontario',
  country: 'Canada',
  photog: 'Jesse Pinkman',
  views: 383,
  score1: 0.16487828,
    red1: 103,
    green1: 81,
    blue1: 63,
  score2: 0.13075164,
    red2: 179,
    green2: 152,
    blue2: 123,
  score3: 0.12218057,
    red3: 139,
    green3: 114,
    blue3: 90,
  score4: 0.111856185,
    red4: 107,
    green4: 78,
    blue4: 60
  },
  {url: 'https://farm2.staticflickr.com/1272/866368641_1e113aafe1.jpg', lat: 43.641137, lon: -79.388923, neighbourhood: 'Entertainment District', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Jesse Pinkman', views: 383, score1: 0.16487828, red1: 103, green1: 81, blue1: 63, score2: 0.13075164, red2: 179, green2: 152, blue2: 123, score3: 0.12218057, red3: 139, green3: 114, blue3: 90, score4: 0.111856185, red4: 107, green4: 78, blue4: 60 },
{url: 'https://farm3.staticflickr.com/2093/2189869687_490fc856c3.jpg', lat: 43.639014, lon: -79.416346, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'p caira', views: 445, score1: 0.31779128, red1: 137, green1: 197, blue1: 252, score2: 0.0853137, red2: 156, green2: 107, blue2: 101, score3: 0.043916542, red3: 18, green3: 15, blue3: 20, score4: 0.011758003, red4: 92, green4: 179, blue4: 251 },
{url: 'https://farm4.staticflickr.com/3248/2496252938_92f5fa973d.jpg', lat: 43.637527, lon: -79.425208, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Jesse Pinkman', views: 224, score1: 0.65707415, red1: 27, green1: 24, blue1: 29, score2: 0.012773594, red2: 190, green2: 188, blue2: 193, score3: 0.10588163, red3: 47, green3: 46, blue3: 53, score4: 0.069916956, red4: 24, green4: 25, blue4: 40 },
{url: 'https://farm3.staticflickr.com/2370/2496265360_8f847344c3.jpg', lat: 43.637659, lon: -79.424521, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Jesse Pinkman', views: 462, score1: 0.20585525, red1: 60, green1: 83, blue1: 102, score2: 0.0075423713, red2: 136, green2: 192, blue2: 236, score3: 0.005376231, red3: 66, green3: 4, blue3: 3, score4: 0.0036781477, red4: 211, green4: 74, blue4: 73 },
{url: 'https://farm4.staticflickr.com/3270/2695344103_6f8d1c4b48.jpg', lat: 43.638870, lon: -79.414157, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Jesse Pinkman', views: 92, score1: 0.28208694, red1: 167, green1: 152, blue1: 128, score2: 0.094062194, red2: 102, green2: 121, blue2: 143, score3: 0.021136397, red3: 164, green3: 217, blue3: 246, score4: 0.16895059, red4: 132, green4: 119, blue4: 97 },
{url: 'https://farm4.staticflickr.com/3281/2695347763_54fda35740.jpg', lat: 43.638862, lon: -79.413471, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Jesse Pinkman', views: 124, score1: 0.22107665, red1: 129, green1: 6, blue1: 9, score2: 0.1165726, red2: 99, green2: 19, blue2: 24, score3: 0.094637126, red3: 25, green3: 24, blue3: 24, score4: 0.012787062, red4: 90, green4: 76, blue4: 57 },
{url: 'https://farm4.staticflickr.com/3150/2760986491_11ff55daff.jpg', lat: 43.638225, lon: -79.410402, neighbourhood: 'Trinity - Niagara', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Monique', views: 163, score1: 0.21438815, red1: 47, green1: 51, blue1: 31, score2: 0.028836532, red2: 159, green2: 161, blue2: 157, score3: 0.0026957295, red3: 238, green3: 201, blue3: 184, score4: 0.19966489, red4: 46, green4: 51, blue4: 46 },
{url: 'https://farm4.staticflickr.com/3148/2783066192_2e0c61e42d.jpg', lat: 43.637255, lon: -79.426689, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Jesse Pinkman', views: 225, score1: 0.2976974, red1: 149, green1: 183, blue1: 209, score2: 0.023188401, red2: 108, green2: 72, blue2: 57, score3: 0.2737178, red3: 137, green3: 176, blue3: 207, score4: 0.10223457, red4: 125, green4: 173, blue4: 216 },
{url: 'https://farm4.staticflickr.com/3208/2783077520_2f1905d1cf.jpg', lat: 43.637255, lon: -79.426689, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Jesse Pinkman', views: 252, score1: 0.3050145, red1: 53, green1: 49, blue1: 50, score2: 0.10060131, red2: 180, green2: 186, blue2: 190, score3: 0.25872213, red3: 25, green3: 23, blue3: 25, score4: 0.15435557, red4: 85, green4: 82, blue4: 83 },
{url: 'https://farm4.staticflickr.com/3452/3191374009_f16e3bc269.jpg', lat: 43.640671, lon: -79.428126, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'p caira', views: 260, score1: 0.17274098, red1: 163, green1: 145, blue1: 116, score2: 0.10233907, red2: 16, green2: 18, blue2: 15, score3: 0.10213746, red3: 74, green3: 83, blue3: 80, score4: 0.0961457, red4: 20, green4: 59, blue4: 106 },
{url: 'https://farm4.staticflickr.com/3629/3323875962_fe86de30d1.jpg', lat: 43.637286, lon: -79.426860, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Jesse Pinkman', views: 163, score1: 0.3127149, red1: 154, green1: 210, blue1: 234, score2: 0.14039306, red2: 54, green2: 47, blue2: 43, score3: 0.05337184, red3: 139, green3: 156, blue3: 159, score4: 0.11351663, red4: 30, green4: 23, blue4: 20 },
{url: 'https://farm4.staticflickr.com/3541/3425846437_01802fc0be.jpg', lat: 43.638614, lon: -79.425197, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Jesse Pinkman', views: 179, score1: 0.619996, red1: 31, green1: 77, blue1: 155, score2: 0.052364144, red2: 10, green2: 5, blue2: 5, score3: 0.011634562, red3: 76, green3: 37, blue3: 23, score4: 0.007022946, red4: 138, green4: 52, blue4: 23 },
{url: 'https://farm4.staticflickr.com/3545/3444972383_f6cb7db612.jpg', lat: 43.638435, lon: -79.422397, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Jesse Pinkman', views: 196, score1: 0.60379577, red1: 198, green1: 182, blue1: 159, score2: 0.035262387, red2: 21, green2: 17, blue2: 12, score3: 0.21187736, red3: 177, green3: 161, blue3: 140, score4: 0.060305886, red4: 142, green4: 127, blue4: 102 },
{url: 'https://farm4.staticflickr.com/3356/3597419241_7a2df18f0d.jpg', lat: 43.639091, lon: -79.422161, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Frank Lemire', views: 394, score1: 0.30143934, red1: 22, green1: 19, blue1: 17, score2: 0.16656253, red2: 136, green2: 151, blue2: 183, score3: 0.19169103, red3: 54, green3: 50, blue3: 47, score4: 0.093512714, red4: 88, green4: 82, blue4: 80 },
{url: 'https://farm4.staticflickr.com/3530/3993349919_745a116ed9.jpg', lat: 43.637942, lon: -79.418803, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'p caira', views: 254, score1: 0.29888448, red1: 207, green1: 139, blue1: 67, score2: 0.08853969, red2: 253, green2: 228, blue2: 158, score3: 0.029747821, red3: 147, green3: 116, blue3: 63, score4: 0.0067270417, red4: 21, green4: 12, blue4: 3 },
{url: 'https://farm3.staticflickr.com/2563/3993350159_5c571d86b1.jpg', lat: 43.637352, lon: -79.425305, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'p caira', views: 474, score1: 0.2576078, red1: 162, green1: 40, blue1: 6, score2: 0.0067729885, red2: 249, green2: 184, blue2: 163, score3: 0.20428143, red3: 203, green3: 73, blue3: 32, score4: 0.10044742, red4: 152, green4: 41, blue4: 17 },
{url: 'https://farm3.staticflickr.com/2672/4059655129_2aa576294c.jpg', lat: 43.638831, lon: -79.424414, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Frank Lemire', views: 399, score1: 0.25168207, red1: 87, green1: 87, blue1: 87, score2: 0.25160876, red2: 192, green2: 192, blue2: 192, score3: 0.22709052, red3: 117, green3: 117, blue3: 117, score4: 0.1452099, red4: 156, green4: 156, blue4: 156 },
{url: 'https://farm3.staticflickr.com/2709/4148422909_5366d368da.jpg', lat: 43.639324, lon: -79.424918, neighbourhood: 'Liberty', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Frank Lemire', views: 304, score1: 0.32870072, red1: 155, green1: 154, blue1: 151, score2: 0.28788364, red2: 122, green2: 121, blue2: 118, score3: 0.1441344, red3: 86, green3: 85, blue3: 82, score4: 0.09283687, red4: 54, green4: 54, blue4: 51 },
{url: 'https://farm3.staticflickr.com/2890/34280630215_a6cf621217.jpg', lat: 43.633100, lon: -79.397028, neighbourhood: 'Toronto Islands', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Vincent Demers', views: 327, score1: 0.20476182, red1: 197, green1: 206, blue1: 229, score2: 0.15221712, red2: 110, green2: 124, blue2: 146, score3: 0.023724144, red3: 14, green3: 22, blue3: 40, score4: 0.19074912, red4: 213, green4: 220, blue4: 240 },
{url: 'https://farm3.staticflickr.com/2830/34271938866_e8893ab10e.jpg', lat: 43.596057, lon: -79.520182, neighbourhood: 'New Toronto', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Jesse Pinkman', views: 91, score1: 0.22443159, red1: 206, green1: 192, blue1: 198, score2: 0.20757318, red2: 240, green2: 228, blue2: 235, score3: 0.12340916, red3: 169, green3: 155, blue3: 161, score4: 0.090193555, red4: 210, green4: 188, blue4: 201 },
{url: 'https://farm3.staticflickr.com/2891/34132775241_55e4ff85ce.jpg', lat: 43.647938, lon: -79.372272, neighbourhood: 'St Lawrence Market', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Chris  W.', views: 1003, score1: 0.32913747, red1: 87, green1: 87, blue1: 87, score2: 0.281098, red2: 52, green2: 52, blue2: 52, score3: 0.16314058, red3: 113, green3: 113, blue3: 113, score4: 0.12649815, red4: 26, green4: 26, blue4: 26 },
{url: 'https://farm5.staticflickr.com/4181/34169488822_834652c338.jpg', lat: 43.647038, lon: -79.378859, neighbourhood: 'Financial District', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Johnny [Shakedown]', views: 63, score1: 0.4966825, red1: 230, green1: 230, blue1: 230, score2: 0.035838615, red2: 51, green2: 52, blue2: 54, score3: 0.3004337, red3: 198, green3: 199, blue3: 199, score4: 0.07108279, red4: 159, green4: 160, blue4: 161 },
{url: 'https://farm5.staticflickr.com/4157/33485043364_6f7ae252a2.jpg', lat: 43.652285, lon: -79.379568, neighbourhood: 'Financial District', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Chris  W.', views: 197, score1: 0.5081462, red1: 16, green1: 16, blue1: 16, score2: 0.06513663, red2: 194, green2: 194, blue2: 194, score3: 0.19076514, red3: 50, green3: 50, blue3: 50, score4: 0.087591246, red4: 83, green4: 83, blue4: 83 },
{url: 'https://farm3.staticflickr.com/2844/33926132570_eab2470894.jpg', lat: 43.653186, lon: -79.401433, neighbourhood: 'Alexandra Park', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Jesse Pinkman', views: 79, score1: 0.24825163, red1: 206, green1: 200, blue1: 176, score2: 0.07664567, red2: 196, green2: 63, blue2: 80, score3: 0.01824652, red3: 52, green3: 51, blue3: 46, score4: 0.0057959706, red4: 116, green4: 176, blue4: 100 },
{url: 'https://farm3.staticflickr.com/2872/34327058645_1be4d8864b.jpg', lat: 43.664045, lon: -79.417762, neighbourhood: 'Koreatown', locality: 'Toronto', region: 'Ontario', country: 'Canada', photog: 'Johnny [Shakedown]', views: 530, score1: 0.31694886, red1: 15, green1: 18, blue1: 21, score2: 0.13227685, red2: 156, green2: 157, blue2: 157, score3: 0.16712749, red3: 44, green3: 53, blue3: 54, score4: 0.13879846, red4: 78, green4: 85, blue4: 85 }
]

export default infoContent;




