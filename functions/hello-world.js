import HelloWorld from '../elements/hello-world.js';
import enhance from '@enhance/ssr';

const html = enhance({
	elements: {
		'hello-world': HelloWorld,
	},
});

export const main = () => {
	const body = html`<hello-world greeting="Well hi!"></hello-world>`;
	const headers = {'Content-Type': 'text/html'};
	const status = 200;
	return {body, headers, status};
};
