(()=>{"use strict";const e=window.wp.element,t=window.wp.i18n,a=window.wp.hooks,o=window.wp.compose,r=window.wp.blockEditor,i=window.wp.components;(0,a.addFilter)("blocks.registerBlockType","blockify/featured-image-attributes",((e,t)=>("core/image"===t&&(e={...e,attributes:{...e.attributes,featured_image:{type:"boolean",default:!1}}}),e))),(0,a.addFilter)("editor.BlockEdit","blockify/with-featured-image-controls",(0,o.createHigherOrderComponent)((a=>o=>{const{attributes:n,setAttributes:l,name:d}=o;return"core/image"!==d?(0,e.createElement)(a,o):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r.InspectorAdvancedControls,null,(0,e.createElement)(i.PanelRow,null,(0,e.createElement)(i.ToggleControl,{label:(0,t.__)("Featured image","featured-image-toggle"),help:(0,t.__)("Display this image as a featured image","featured-image-toggle"),checked:n.featured_image,onChange:e=>{l({featured_image:e})}}))),(0,e.createElement)(a,o))}),"withFeaturedImageControls"),11)})();