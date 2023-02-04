import { pool } from "./db.js";
import {
  getPizzeriaQuery,
  getMenuByIdQuery,
  getMenuQuery,
  getTopicsQuery,
  getTopicsByIdQuery,
  getPaymentQuery,
  getPaymentByIdQuery,
  // deletePizeriaQuery,
  //deleteMenuQuery,
  //deleteTopicsQuery,
  //deletePaymentQuery,
} from "./queries.js";

//GET

//Pizzeria

export const getPizzeria = (req, res) => {
  //res.send("checking the info");

  pool.query(getPizzeriaQuery, (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

// Delete Pizeria

{
  /*export const deletePizzeria = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(deletePizeriaQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send(`It was sucsesfully deleted`);
  });
};*/
}

//Menu

export const getMenu = (req, res) => {
  pool.query(getMenuQuery, (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

// MEnu get by ID

export const getMenuById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(getMenuByIdQuery, [id], (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

// DELETE MENU

{
  /*export const deleteMenu = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(deleteMenuQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send(`It was sucsesfully deleted`);
  });
};*/
}

//Topics

export const getTopics = (req, res) => {
  //res.send("checking the info");

  pool.query(getTopicsQuery, (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

// Topics get by ID

export const getTopicsById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(getTopicsByIdQuery, [id], (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

// DEELETE TOPICS

{
  /*export const deleteTopics = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(deleteTopicsQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send(`It was sucsesfully deleted`);
  });
};*/
}

// PAyment

export const getPayment = (req, res) => {
  //res.send("checking the info");

  pool.query(getPaymentQuery, (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

// payment by id

export const getPaymentById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(getPaymentByIdQuery, [id], (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

//DELETE PAyment

{
  /*export const deletePayment = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(deletePaymentQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send(`It was sucsesfully deleted`);
  });
};*/
}
