const reviews = [
  {
    name: 'abcz',
    dish: {
      id: 0,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    title: 'Fantasic SADAD',
    image: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087318/Pickles_yoyqut.jpg',
    content: 'Our ancient ancestors found fermentation an effective way to preserve food, as the lactic acid or alcohol produced becomes natural preservatives that ',
    rate: 5,
    user: {
      id: 0,
      name: 'Matt',
      avatar: 'https://semantic-ui.com/images/avatar/small/matt.jpg',
    },
  },
  {
    name: 'abcz',
    dish: {
      id: 1,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    title: 'Pretty food',
    image: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087319/Wine_f6fppn.jpg',
    content: 'Fermentation is the result of bacteria and yeast breaking down carbohydrates to produce carbon dioxide, lactic acid, and alcohol as '
    + 'Fermentation is the result of bacteria and yeast breaking down carbohydrates to produce carbon dioxide, lactic acid, and alcohol as'
    + 'This is an example of truncating the text in PHP. This method works fine in limiting the text, but requires messing with the'
    + 'server-side just to deal with presentation, which is supposed to the be the job of CSS',
    rate: 3,
    user: {
      id: 2,
      name: 'La la',
      avatar: 'https://semantic-ui.com/images/avatar/small/elliot.jpg',
    },
  },
  {
    name: 'abcdasfdsaz',
    dish: {
      id: 2,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    title: 'Fantasic food',
    image: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087318/kimchi_ttn85h.jpg',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
  {
    name: 'abfdafdacz',
    title: 'Terrible food',
    dish: {
      id: 3,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    image: 'http://www.belmare.gr/uploads/vegan-Eggplant-baked.jpg',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
  {
    name: 'bbf',
    title: 'Terrible food',
    dish: {
      id: 3,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    image: '',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
  {
    name: 'aaf',
    title: 'Noodle Malaysia',
    dish: {
      id: 3,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    image: 'https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
  {
    name: 'aaffff',
    title: 'Miennnn',
    dish: {
      id: 3,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    image: 'https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
  {
    name: 'abffff',
    title: 'Nicoise salad',
    dish: {
      id: 3,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    image: 'https://minimalistbaker.com/wp-content/uploads/2016/06/30-minute-EASY-Vegan-Nicoise-Salad-with-Shallot-and-Dijon-Vinaigrette-Quick-satisfying-HEALTHY-vegan-glutenfree-plantbased-recipe.jpg',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
  {
    name: 'bfffff',
    title: 'Polpette',
    dish: {
      id: 3,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    image: 'https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/2594/compressed_Polpette_1-593.jpg',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
  {
    name: 'cfff',
    title: 'Happy meal',
    dish: {
      id: 3,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    image: 'https://i0.wp.com/twohappyrabbits.com/wp/wp-content/uploads/2017/10/Day-23cC.jpg?resize=1080%2C718',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
  {
    name: 'dfff',
    title: 'Mushroom pizza',
    dish: {
      id: 3,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    image: 'https://livekindlyproduction-8u6efaq1lwo6x9a.stackpathdns.com/wp-content/uploads/2017/12/vegan-pizza-1280x640.png',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
];

const reviewsCollection = [
  {
    name: 'Viet Nam cuisine '
  },
  {
    name: 'Singapore cuisine '
  },
  {
    name: 'Malaysia cuisine '
  },
  {
    name: 'Thai cuisine '
  },
];

module.exports = {
  reviewsCollection,
  reviews,
};
