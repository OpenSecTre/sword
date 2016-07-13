import { Router } from 'express';
import { scanHelp, scan } from './scanning';

export default function() {
	var api = Router();

	// Middleware for all routes
	api.use((req, res, next) => {
		console.log(`[Request] [${req.method}] ${req.originalUrl}`);
		next();
	});

	// Expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			name: 'SWoRD API',
			version : '1.0'
		});
	});

	// Scanning
	api.route('/scan').get(scanHelp)
	api.route('/scan/:ip/:port').get(scan);

	return api;
}
