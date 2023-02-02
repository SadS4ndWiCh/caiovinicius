type SanityBase = {
	_id: string;
	_rev: string;
	_type: string;
	_createdAt: string;
	_updatedAt: string;
}

interface Image {
	_type: 'Image';
	asset: Reference;
}

interface Reference {
	_ref: string;
	_type: 'reference';
}

interface Project extends SanityBase {
	title: string;
	thumb: Image;
	categories: Category[];
	description: string;
	sourceCode: string;
	demo: string;
}

interface Category extends SanityBase {
	title: string;
	description: string;
}