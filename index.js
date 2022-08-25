const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

const algorithms = [
    'advanced_bo', 
    'basic_bo',
    'botorch_bo',
    'silly', 
    'simplex', 
    'simplex_acr', 
    'simplex_advanced',
    'simplex_bound',
    'simplex_norm'
];

const environments = [
    'TNK',
    'dumb', 
    'inj_lcls', 
    'inj_surrogate', 
    'lcls',  
    'lcls_test', 
    'multinormal', 
    'myenv', 
    'naive', 
    'silly', 
    'silly_slow', 
    'xfel'
];

const extensions = [
    'xopt', 
    'xopt_legacy'
];

const interfaces = [
    'default', 
    'doocs',
    'doocs_mock', 
    'epics', 
    'silly'
];


app.get('/' , (req, res) => {
    res.send('Welcome to the Badger Plugins server!');
});


// API to download plugin tarballs

app.use('/algorithms', express.static('algorithms'));
app.use('/environments', express.static('environments'));
app.use('/extensions', express.static('extensions'));
app.use('/interfaces', express.static('interfaces'));


// API to list all plugins

app.get('/api/algorithms', (req, res) => {
    res.send(algorithms);
});

app.get('/api/environments', (req, res) => {
    res.send(environments);
});

app.get('/api/extensions', (req, res) => {
    res.send(extensions);
});

app.get('/api/interfaces', (req, res) => {
    res.send(interfaces);
});


// API to return download URL given plugin type and plugin name

app.get('/api/url/algorithms/:id', (req, res) => {
    if (algorithms.includes(req.params.id)) {
            res.send(`http://localhost:${port}/algorithms/${req.params.id}.tar.gz`);
    } else {
        res.send('This algorithms plugin does not exist or is not available right now ...');
    }    
});


app.get('/api/url/environments/:id', (req, res) => {
    if (environments.includes(req.params.id)) {
            res.send(`http://localhost:${port}/environments/${req.params.id}.tar.gz`);
    } else {
        res.send('This environments plugin does not exist or is not available right now ...');
    }    
});


app.get('/api/url/extensions/:id', (req, res) => {
    if (extensions.includes(req.params.id)) {
            res.send(`http://localhost:${port}/extensions/${req.params.id}.tar.gz`);
    } else {
        res.send('This extensions plugin does not exist or is not available right now ...');
    }    
});


app.get('/api/url/interfaces/:id', (req, res) => {
    if (interfaces.includes(req.params.id)) {
            res.send(`http://localhost:${port}/interfaces/${req.params.id}.tar.gz`);
    } else {
        res.send('This interfaces plugin does not exist or is not available right now ...');
    }    
});

