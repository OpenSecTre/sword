import PythonShell from 'python-shell';

export function scanHelp (req, res) {
	res.json({
		description: 'Network scanning',
		parameters: '/scan/:ip/:port'
	});
};

export function scan (req, res) {
	var options = {
	  mode: 'text',
	  pythonOptions: ['-u'],
	  scriptPath: './backend/',
	  args: ['-t', req.params.ip, '-p', req.params.port]
	};

	PythonShell.run('net_scan.py', options, function (err, results) {
	  if (err) throw err;
		res.json({
			result: results
		});
	});
};

export default scan;
