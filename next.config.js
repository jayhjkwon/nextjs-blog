const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([optimizedImages]);


// images: {
//     domains: [
//         "localhost:3000",
//         "img1.daumcdn.net",
//         "t1.daumcdn.net",
//         "img3.daumcdn.net",
//         "s3-ap-northeast-2.amazonaws.com",
//         "stashpub.com",
//         "stashpub-image-dev.s3.ap-northeast-2.amazonaws.com",
//         "master.djab33txz951j.amplifyapp.com"
//     ],
// },
// // this is to restore scroll position when back/forward happens
// experimental: {
//     scrollRestoration: true,
// },
