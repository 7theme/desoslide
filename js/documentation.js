// syntax highlighting
hljs.initHighlightingOnLoad();

// [BEGIN] documentation demo
$(function() {

	
	$('#wizard_thumbs').desoSlide({
		mainImage: '#wizard_mainImage',
		displayCaption: 'always'
	});
	
	$('#ex1_thumbs').desoSlide({
		mainImage: '#ex1_mainImage',
		imgFirst: 1,
		disableCaption: true
	});
	
	$('#ex2_thumbs').desoSlide({
		mainImage: '#ex2_mainImage',
		displayCaption: 'hover'
	});
	
	
});
// [END] documentation demo