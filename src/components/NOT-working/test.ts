console.log('test');

interface Comps {
	VBtn: typeof import('vuetify/components')['VBtn']
}

const VBtn = ({} as Comps).VBtn;
