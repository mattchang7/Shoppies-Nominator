const router = require('express').Router()
const { Nominee } = require('../db')

// GET /api/nominees
router.get('/', async (req, res, next) => {
    try {
        const projects = await Nominee.findAll()
        res.json(projects)
    }
    catch (err) {
        next(err)
    }
})

// POST /api/nominees
router.post('/', async(req, res, next) => {
    try {
        const project = await Nominee.create(req.body)
        res.status(201).json(project)
    } catch (err) {
        next(err)
    }
})

// DELETE /api/nominees/:nomineeId
router.delete('/:nomineeId', async (req, res, next) => {
    try {
        const nominee = await Nominee.findByPk(req.params.nomineeId)
        if (!nominee) {
            res.sendStatus(404)
        } else {
            await nominee.destroy(req.body)
            res.sendStatus(204)
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router