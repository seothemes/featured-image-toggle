<?php
/**
 * Plugin Name: Featured Image Toggle
 * Plugin URI: http://wordpress.org/plugins/featured-image-toggle/
 * Description: Featured Image Toggle allows users to flag an image(s) as a "featured" within the content area that will be accessible using custom PHP functions within your theme.
 * Author: ArrayPress
 * Author URI: https://arraypress.com/
 * License: GPL-2.0-or-later
 * Version: 1.0.0
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: featured-image-toggle
 * Domain Path: /languages
 */

declare( strict_types=1 );

namespace ArrayPress\FeaturedImageToggle;

use function add_action;
use function load_plugin_textdomain;
use function plugin_dir_path;
use function plugins_url;
use function wp_enqueue_script;

add_action( 'plugins_loaded', __NAMESPACE__ . '\\load_textdomain' );
/**
 * Load plugin textdomain.
 *
 * @since 1.0.0
 */
function load_textdomain() {
	load_plugin_textdomain(
		'featured-image-toggle',
		false,
		plugin_dir_path( __FILE__ ) . 'languages'
	);
}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_assets' );
/**
 * Enqueue the block editor assets.
 *
 * @return void
 */
function enqueue_assets(): void {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_enqueue_script(
		'featured-image-toggle',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_enqueue_style(
		'featured-image-toggle',
		plugins_url( 'build/index.css', __FILE__ ),
		[],
		$asset_file['version']
	);
}
