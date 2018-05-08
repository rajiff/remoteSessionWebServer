const route = require('express').Router();

// Mounted the entire session resources at the mount point /sessions
route.use('/sessions', require('./sessions'));