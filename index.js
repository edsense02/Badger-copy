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

app.use(express.static('algorithms'));
app.use(express.static('environments'));
app.use(express.static('extensions'));
app.use(express.static('interfaces'));


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


// API to return download URL given plugin name

app.get('/api/:id', (req, res) => {
    if ((algorithms.includes(req.params.id))   ||
         environments.includes(req.params.id)  ||
         extensions.includes(req.params.id)    ||
         interfaces.includes(req.params.id)) {
            res.send(`http://localhost:${port}/${req.params.id}.tar.gz`);
    } else {
        res.send('This plugin does not exist or is not available right now ...');
    }    
});

