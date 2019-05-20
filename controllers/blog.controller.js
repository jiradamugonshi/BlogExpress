const blogModel = require('../models/blog.model');

exports.blog_all = function (req, res) {
    blogModel.find(function (err, result) {
        if (err) {
            throw err;
        }
        res.render('index.hbs', { title: 'BlogExpress', blogs: result });
    })
};

exports.blog_details = function (req, res) {
    blogModel.findById(req.params.id, function (err, result) {
        if (err) {
            throw err;
        }
        res.render('update.hbs', { title: 'BlogExpressUpdate', blog: result });
    })
};

exports.blog_delete = function (req, res) {
    blogModel.findByIdAndDelete(req.body.id, function (err) {
        if (err) return res.status(500).send(err);
        res.send('Deleted successfully!');
    })
};

exports.blog_update = function (req, res) {
    blogModel.findByIdAndUpdate(       
        req.body.id,
        { $set: req.body },
        {
            new: true,                       // return updated doc
            runValidators: true              // validate before update
        }, function (err, blog) {
            if (err) return res.status(500).send(err);
            res.send('Blog udpated.');
        });
};

exports.blog_create = function (req, res) {
    let blog = new blogModel(
        {
            name: req.body.name,
            blogue: req.body.blogue
        }
    );
    blog.save(function (err) {
        if (err) return res.status(500).send(err);           
        //res.send('blog created successfully')
        res.redirect('/blogs')
    })
};