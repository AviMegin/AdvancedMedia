$('.book-page[page-Id="1"]').addClass('active');
$('.book-marks li[page-Id="1"]').addClass('active');

$('.book-marks li').on('click', function(){
	var pageId = $(this).attr('page-id');
	var currentPage = $('.book-page.active')
	var currentPageId = $(currentPage).attr('page-id');
	var page = $('.book-page[page-Id="'+pageId+'"]');
	
	$(currentPage).removeClass('open-from-right');
	
	if(currentPageId < pageId){
		$(page).addClass('open-from-right');
		$(currentPage).removeClass('open-from-right');
		toggleActive(page, this);
	}
	if(currentPageId > pageId){
		$(currentPage).addClass('open-from-right');
		toggleActive(page, this);
	}	
});

function toggleActive(page, li){
	$('.book-marks li').removeClass('active');
	$('.book-page').removeClass('active');
	$(page).addClass('active'); 
	$(li).addClass('active');
}