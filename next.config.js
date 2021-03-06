const path = require('path');
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

// module.exports = {
//     sassOptions: {
//         includePaths: [path.join(__dirname, 'styles')],
//     },
// }

module.exports = withPWA({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
})