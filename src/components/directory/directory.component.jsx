import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

export default class Directory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: [
				{
					title: 'hats',
					id: 1,
				},
				{
					title: 'jackets',
					id: 2,
				},
				{
					title: 'sneakers',
					id: 3,
				},
				{
					title: 'womens',
					id: 4,
				},
				{
					title: 'mens',
					id: 5,
				},
			],
		};
	}

	render() {
		return (
			<div className='directory'>
				{this.state.sections.map(({ title, id }) => (
					<MenuItem title={title} key={id} />
				))}
			</div>
		);
	}
}
