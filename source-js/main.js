jQuery(document).ready(function () {
  jQuery('#add').on('click', function () {
    var val = jQuery('#task').val()

    if (val !== '') {
      var goal = jQuery('<li></li>').text(val)
      jQuery(goal).append('<button class=\'dell\'>X</button>')
      jQuery('#list').append(goal)
      jQuery('#task').val('')

      jQuery('.dell').on('click', function () {
        jQuery(this).parent().remove()
      })
    }
  })
})
