const routes = require('express').Router()
const getallblog = require('../controllers/getallblog')
const postblog = require('../controllers/postblog')
const createBlogAdmin = require('../controllers/createBlogAdmin')
const blogsAdminLogin = require('../controllers/blogsAdminLogin')
const getblogadmin = require('../controllers/getblogadmin')
const authblogadmin = require("../middlewares/authblogadmin")
const deleteblog = require("../controllers/deleteblog")
const getadminblog = require('../controllers/getadminblog')
const authsuperadmin = require('../middlewares/authsuperadmin')
const superadminlogin = require('../controllers/superadminlogin')
const getoneblog = require('../controllers/getoneblog')
const update = require('../controllers/update')
const getalladmins = require('../controllers/getalladmins')
const blogadminlist = require('../controllers/blogadminlist')
const disableadmin = require('../controllers/disableadmin')
const checkforadmin = require('../middlewares/checkadmin')
//this is for blogs

routes.get('/api/blogs',getallblog)

routes.post('/api/postblog',authblogadmin,postblog)

routes.post('/api/blogs/admin/login',blogsAdminLogin)

routes.get('/api/blog-admin/me',authblogadmin,checkforadmin,getblogadmin)

routes.get('/api/adminblog',authblogadmin,getadminblog)

routes.delete('/api/:id',authblogadmin,deleteblog)

routes.put('/api/:id',authblogadmin,update)

routes.get('/api/:id',getoneblog)

routes.post('/api/superadmin/login',superadminlogin)

routes.post('/api/createblogadmin',authsuperadmin,createBlogAdmin)

routes.get('/alladmins',authsuperadmin,getalladmins)

routes.get('/api/admin-list',authsuperadmin,blogadminlist)

routes.put('/disable-admin/:id',disableadmin)

routes.get('/api/blog/:slug',getoneblog)


module.exports = routes

