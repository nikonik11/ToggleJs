jQuery("#storyTime").addClass('close')
jQuery("#myToggle").click(function(){
    if(jQuery("#storyTime").hasClass('open')){
        jQuery("#storyTime").removeClass('open');
        jQuery("#storyTime").addClass('close');
        jQuery("#myToggle").addClass('myToggleActive')
}
else if(jQuery("#storyTime").hasClass('close')){
    jQuery("#storyTime").removeClass('close');
    jQuery("#storyTime").addClass('open');
    jQuery("#myToggle").removeClass('myToggleActive')
}
});
