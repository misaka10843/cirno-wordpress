<?php
/******************************
*
*将字符串中的数字提取出来
*
******************************/
function findNum($str=''){
  $str=trim($str);
  if(empty($str)){return '';}
  $temp=array('1','2','3','4','5','6','7','8','9','0');
  $result='';
  for($i=0;$i<strlen($str);$i++){
      if(in_array($str[$i],$temp)){
          $result.=$str[$i];
      }
  }
  return $result;
}

/******************************
*
*分页功能
*
******************************/
function mo_paging() {
  $p = 3;
  if ( is_singular() ) return;
  global $wp_query, $paged;
  $max_page = $wp_query->max_num_pages;
  if ( $max_page == 1 ) return;
  echo '<ul class="page-numbers">';
  if ( empty( $paged ) ) $paged = 1;
  echo '<li class="prev-page">'; previous_posts_link('<'); echo '</li>';
  if ( $paged > $p + 1 ) _paging_link( 1, '<li><span aria-current="page" class="page-numbers current">1</span></li>' );
  if ( $paged > $p + 2 ) echo '<li><span class="page-numbers dots">…</span></li>';
  for( $i = $paged - $p; $i <= $paged + $p; $i++ ) {
      if ( $i > 0 && $i <= $max_page ) $i == $paged ? print "<li class=\"active\"><span aria-current=\"page\" class=\"page-numbers current\">{$i}</span></li>" : _paging_link( $i );
  }
  if ( $paged < $max_page - $p - 1 ) echo "<li><span class=\"page-numbers dots\">…</span></li>";
  echo '<li class="next-page">'; next_posts_link('>'); echo '</li>';
  echo '</ul>';
}

function _paging_link( $i, $title = '' ) {
  if ( $title == '' ) $title = "{$i}";
  echo "<li><a class=\"page-numbers\" href='", esc_html( get_pagenum_link( $i ) ), "'>{$i}</a></li>";
}

/** widgets */
if( function_exists('register_sidebar') ) {
	register_sidebar(array(
		'name' => 'First_sidebar',
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h4>',
		'after_title' => '</h4>'
	));
	register_sidebar(array(
		'name' => 'Second_sidebar',
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h4>',
		'after_title' => '</h4>'
	));
	register_sidebar(array(
		'name' => 'Third_sidebar',
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h4>',
		'after_title' => '</h4>'
	));
	register_sidebar(array(
		'name' => 'Fourth_sidebar',
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h4>',
		'after_title' => '</h4>'
	));
}


add_theme_support('post-thumbnails', array(
  'post',
  'page',
  'custom-post-type-name',
  ));
function curPageURL() {
	$pageURL = 'http://';

	$this_page = $_SERVER["REQUEST_URI"]; 
	if (strpos($this_page , "?") !== false) 
		$this_page = reset(explode("?", $this_page));

	$pageURL .= $_SERVER["SERVER_NAME"]  . $this_page;

	return $pageURL;
}

function aurelius_comment($comment, $args, $depth) 
{
   $GLOBALS['comment'] = $comment; ?>
   <li class="comment" id="li-comment-<?php comment_ID(); ?>">
		<div class="gravatar"> <?php if (function_exists('get_avatar') && get_option('show_avatars')) { echo get_avatar($comment, 48); } ?></div>
		<div class="comment_content" id="comment-<?php comment_ID(); ?>">	
			<div class="clearfix">
					<?php printf(__('<cite class="author_name">%s</cite>'), get_comment_author_link()); ?>
					<div class="comment-meta commentmetadata">发表于：<?php echo get_comment_time('Y-m-d H:i'); ?></div>
					&nbsp;&nbsp;&nbsp;<?php edit_comment_link('修改'); ?>
			</div>

			<div class="comment_text">
				<?php if ($comment->comment_approved == '0') : ?>
					<em>你的评论正在审核，稍后会显示出来！</em><br />
      	<?php endif; ?>
      	<?php comment_text(); ?>
			</div>
		</div>
<?php } ?>
