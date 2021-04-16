const express = require(`express`); // imports express
const helmet = require('helmet'); // imports helmet for security use


// these three lines import routers for their respective endpoints
const tasksRouter = require('./task/router.js');
const resourcesRouter = require('./resource/router.js');
const projectsRouter = require('./project/router.js');

const server = express(); // creates server

server.use(express.json()); // allows server to parse json data
server.use(helmet()); // allows helmet use for header security

// these three lines connect the server up to the previously created routers
server.use('/api/tasks', tasksRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/projects', projectsRouter);