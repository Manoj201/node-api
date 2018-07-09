'use strict';

import jwtAuthentication from './jwtAuthentication';

const configure = (sdpApp) => {
  sdpApp.use(jwtAuthentication);
};

export default {configure};