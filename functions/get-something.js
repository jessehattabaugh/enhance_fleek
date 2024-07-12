
export const main = (params) => {
	const { method, path } = params;
	return `${method} request to ${path}`;
};
