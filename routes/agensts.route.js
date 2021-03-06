const express = require('express');
const agentsRouter = express.Router();
const newId = require('../utils/idMaker');

const agents = [
  {
    id: 007,
    name: 'Bond,  Michi Bond',
  },
];

agentsRouter.get('/api/agents', (req, res) => {
  res.json({
    agents,
  });
});

agentsRouter.get('/api/agents/:id', (req, res) => {
  const id = req.params.id;
  const agent = agents.find(agent => agent.id == id);

  if (agent) {
    res.json(agent);
  } else {
    res.status(404).json({
      status: 404,
      message: "Lo sentimos, no existe ninguna michi agente con el id " + id,
    });
  }
});

agentsRouter.post('/api/agents', (req, res) => {
  console.log(req.body);

  const { name } = req.body
  let id = newId();

  const newAgent = { id, name };

  directors.push(newAgent);

  res.json({
    status: 200,
    agent: newAgent,
  })
})


module.exports = agentsRouter;