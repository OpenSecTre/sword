import { Router } from 'express';
import facets from './facets';
import PythonShell from 'python-shell';

export default function() {
	var api = Router();

	// mount the facets resource
	api.use('/facets', facets);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});

	api.get('/scan', (req, res) => {
		var options = {
		  mode: 'text',
		  pythonOptions: ['-u'],
		  scriptPath: '../backend/',
		  args: ['-t', '127.0.0.1', '-p', '1024']
		};

		PythonShell.run('net_scan.py', options, function (err, results) {
		  if (err) throw err;
		  // results is an array consisting of messages collected during execution
		  console.log('results: %j', results);

			res.json({
				result: results
			});
		});
	});

	return api;
}
