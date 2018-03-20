/*
	Alpha by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				alignment: 'right'
			});

		// Off-Canvas Navigation.

			// Navigation Button.
				$(
					'<div id="navButton">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navButton, #navPanel, #page-wrapper')
						.css('transition', 'none');

		// Header.
		// If the header is using "alt" styling and #banner is present, use scrollwatch
		// to revert it back to normal styling once the user scrolls past the banner.
		// Note: This is disabled on mobile devices.
			if (!skel.vars.mobile
			&&	$header.hasClass('alt')
			&&	$banner.length > 0) {

				$window.on('load', function() {

					$banner.scrollwatch({
						delay:		0,
						range:		0.5,
						anchor:		'top',
						on:			function() { $header.addClass('alt reveal'); },
						off:		function() { $header.removeClass('alt'); }
					});

				});

			}

			// ------------------------ Analytics - ME
			var el = document.getElementById("#signup"); 
			el.addEventListener("click", function() {
				var dataLayer = [];

				dataLayer.push({
					'currencyCode': 'EUR',
					'ecommerce': {
					  'purchase': {
						'actionField': {
						  'id': 'T12345',                         // Transaction ID. Required for purchases and refunds.
						  'affiliation': 'Online Store',
						  'revenue': '50.00',                     // Total transaction value (incl. tax and shipping)
						  'tax':'0.00',
						  'shipping': '0.00',
						  'coupon': 'SUMMER_SALE'
						},
						'products': [{                            // List of productFieldObjects.
						  'name': 'Triblend Android T-Shirt',     // Name or ID is required.
						  'id': '12345',
						  'price': '15.25',
						  'brand': 'Google',
						  'category': 'Apparel',
						  'variant': 'Gray',
						  'quantity': 1,
						  'coupon': ''                            // Optional fields may be omitted or set to empty string.
						 },
						 {
						  'name': 'Donut Friday Scented T-Shirt',
						  'id': '67890',
						  'price': '33.75',
						  'brand': 'Google',
						  'category': 'Apparel',
						  'variant': 'Black',
						  'quantity': 1
						 }]
					  }
					}
				  });

			}, false); 


			var el = document.getElementById("#learnmore"); 
			el.addEventListener("click", function() {
				var dataLayer = [];

				dataLayer.push({
					'currencyCode': 'MXN',
					'ecommerce': {
					  'purchase': {
						'actionField': {
						  'id': 'T12345',                         // Transaction ID. Required for purchases and refunds.
						  'affiliation': 'Online Store',
						  'revenue': '2297.87',                     // Total transaction value (incl. tax and shipping)
						  'tax':'0.00',
						  'shipping': '0.00',
						  'coupon': 'SUMMER_SALE'
						},
						'products': [{                            // List of productFieldObjects.
						  'name': 'Triblend Android T-Shirt',     // Name or ID is required.
						  'id': '12345',
						  'price': '15.25',
						  'brand': 'Google',
						  'category': 'Apparel',
						  'variant': 'Gray',
						  'quantity': 1,
						  'coupon': ''                            // Optional fields may be omitted or set to empty string.
						 },
						 {
						  'name': 'Donut Friday Scented T-Shirt',
						  'id': '67890',
						  'price': '33.75',
						  'brand': 'Google',
						  'category': 'Apparel',
						  'variant': 'Black',
						  'quantity': 1
						 }]
					  }
					}
				  });

			}, false); 

	});

})(jQuery);