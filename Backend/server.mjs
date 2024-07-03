import cors from 'cors'
import express from 'express'
import mysql from 'mysql2'

const app = express()
const port = 3000

// Utiliser CORS pour autoriser les requêtes provenant de n'importe quelle origine
app.use(cors())

// Configuration de la connexion à la base de données
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecommerce_cigarette'
})

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err)
    return
  }
  console.log('Connecté à la base de données MySQL')
})

// ---------------------------------------------------------- [ CATEGORIES ] ---------------------------------------------------------- //

// ALL catégories
app.get('/api/categorie', (req, res) => {
  db.query('SELECT * FROM categorie', (err, results) => {
    if (err) {
      res.status(500).send(err)
      return
    }
    res.json(results)
  })
})

// chaque categorie
app.get('/api/categorie/:id', (req, res) => {
  const { id } = req.params
  db.query('SELECT * FROM categorie WHERE id = ?', [id], (err, results) => {
    res.json(results)
  })
})

//Route pour récupérer les images
app.get('/api/image', (req, res) => {
  db.query('SELECT * FROM images', (err, results) => {
    if (err) {
      res.status(500).send(err)
      return
    }
    res.json(results)
  })
})

// Route pour récupérer les produits
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM produit', (err, results) => {
    if (err) {
      res.status(500).send(err)
      return
    }
    res.json(results)
  })
})

// -----------------------------[ CONNEXION ET INSCRIPTION ]-----------------------------//

// connexion utilisateur
app.post('/api/login', (req, res) => {
  const { email, password } = req.body
  db.query(
    'SELECT * FROM utilisateur WHERE email = ? AND password = ?',
    [email, password],
    (err, results) => {
      if (err) {
        res.status(500).send(err)
        return
      }
      res.json(results)
    }
  )
})

// inscription utilisateur
app.post('/api/register', (req, res) => {
  const { nom, prenom, email, password } = req.body
  db.query(
    'INSERT INTO utilisateur (nom, prenom, email, password) VALUES (?, ?, ?, ?)',
    [nom, prenom, email, password],
    (err, results) => {
      if (err) {
        res.status(500).send(err)
        return
      }
      res.json(results)
    }
  )
})

//
//

//-----------------------------[ PANIER ]-----------------------------//

// Route pour ajouter un produit au panier
app.post('/api/panier', (req, res) => {
  const { utilisateur_id, produit_id, quantite } = req.body
  db.query(
    'INSERT INTO panier_produit (panier_id, produit_id, quantite) VALUES ((SELECT id FROM panier WHERE utilisateur_id = ?), ?, ?)',
    [utilisateur_id, produit_id, quantite],
    (err, results) => {
      if (err) {
        res.status(500).send(err)
        return
      }
      res.json(results)
    }
  )
})

// Route pour passer une commande
app.post('/api/commande', (req, res) => {
  const { utilisateur_id, produits, total } = req.body
  db.query(
    'INSERT INTO commande (utilisateur_id, statut, total) VALUES (?, "En cours", ?)',
    [utilisateur_id, total],
    (err, results) => {
      if (err) {
        res.status(500).send(err)
        return
      }
      const commande_id = results.insertId
      const values = produits.map((p) => [commande_id, p.produit_id, p.quantite, p.prix])
      db.query(
        'INSERT INTO commande_produit (commande_id, produit_id, quantite, prix) VALUES ?',
        [values],
        (err, results) => {
          if (err) {
            res.status(500).send(err)
            return
          }
          res.json(results)
        }
      )
    }
  )
})

app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur http://localhost:${port}`)
})
