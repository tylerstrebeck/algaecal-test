<?php

function replace_jquery() {
	if (!is_admin()) {
		wp_deregister_script('jquery');
		wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', false, '3.3.1');
		wp_enqueue_script('jquery');
	}
}
add_action('init', 'replace_jquery');

?>