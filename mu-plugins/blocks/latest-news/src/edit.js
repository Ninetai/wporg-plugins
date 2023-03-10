/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	Disabled,
	__experimentalNumberControl as NumberControl, // eslint-disable-line @wordpress/no-unsafe-wp-apis
	PanelBody,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Renders controls and a preview of this dynamic block.
 *
 * @param {Object}   props
 * @param {Object}   props.attributes
 * @param {Function} props.setAttributes
 * @param {string}   props.name
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, name } ) {
	const { perPage } = attributes;

	const onPerPageChange = ( value ) => setAttributes( { perPage: value * 1 } );

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'wporg' ) }>
					<NumberControl
						label={ __( 'Items To Show', 'wporg' ) }
						onChange={ onPerPageChange }
						value={ perPage }
					/>
				</PanelBody>
			</InspectorControls>
			<Disabled>
				<ServerSideRender block={ name } attributes={ attributes } />
			</Disabled>
		</div>
	);
}
