import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorAdvancedControls } from "@wordpress/block-editor";
import { PanelRow, ToggleControl } from "@wordpress/components";

addFilter(
    'blocks.registerBlockType',
    'blockify/featured-image-attributes',
    ( props, name: string ): void => {
        if ( name === 'core/image' ) {
            props = {
                ...props,
                attributes: {
                    ...props.attributes,
                    featured_image: {
                        type: 'boolean',
                        default: false,
                    }
                },
            }
        }

        return props;
    }
);

addFilter(
    'editor.BlockEdit',
    'blockify/with-featured-image-controls',
    createHigherOrderComponent( ( BlockEdit: any ) => ( props : any ) => {

        const { attributes, setAttributes, name } = props;

        if ( 'core/image' !== name ) {
            return <BlockEdit { ...props } />;
        }

        return (
            <>
                <InspectorAdvancedControls>
                    <PanelRow>
                        <ToggleControl
                            label={ __( 'Featured image', 'featured-image-toggle' ) }
                            help={ __( 'Display this image as a featured image', 'featured-image-toggle' ) }
                            checked={ attributes.featured_image }
                            onChange={ ( value: string ) => {
                                setAttributes( { featured_image: value } );
                            } }
                        />
                    </PanelRow>
                </InspectorAdvancedControls>
                <BlockEdit { ...props } />
            </>
        );
    }, 'withFeaturedImageControls' ),
    11
);
