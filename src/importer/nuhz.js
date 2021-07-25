const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1-BcprHM7kp7znXKbCKrcCnKbd2q5GvX4UI8qod5J3rA', {
  name: 'Nuhz Caps',
  instagram: 'https://www.instagram.com/nuhz_caps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
