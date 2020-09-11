
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo')
    .then(() => console.log('Connected to Mongodb...'))
    .catch(err => console.log('Cannot connect to Mongodb...', err));

const newsSchema = new mongoose.Schema({
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: { type: Date, default: Date.now },
    content: String,
});

const News = mongoose.model('News', newsSchema);

async function createNews() {
    const news = new News({
        author: 'Maetamong',
        title: 'The first news',
        description: 'Hello nodejs',
        url: 'https://nodejs.org/en/',
        urlToImage: 'https://www.oregonlive.com/resizer/elhukRl9EYtCt4RzZsOjNgxq57g=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/7GCROD53NZEI5PI3SQCPX4XH6I.JPG',
        content: 'Library staff will use the Local Library website to store information about books and borrowers, while library members will use it to browse and search for books, find out whether there are any copies available, and then reserve or borrow them. In order to store and retrieve information efficiently, we will store it in a database.Express apps can use many different databases, and there are several approaches you can use for performing Create, Read, Update and Delete (CRUD) operations. This tutorial provides a brief overview of some of the available options and then goes on to show in detail the particular mechanisms selected.'
    });

    const result = await news.save();
    console.log(result);
}

async function getNews() {
    
    const news = await News
        .find({ author: 'K. Rambo | The Oregonian/OregonLive' })
    console.log(news);
}

// createNews();
getNews();