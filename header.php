<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head profile="http://gmpg.org/xfn/11">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php if ( is_home() ) {
		bloginfo('name'); echo " | "; bloginfo('description');
	} elseif ( is_category() ) {
		single_cat_title(); echo " | "; bloginfo('name');
	} elseif (is_single() || is_page() ) {
		single_post_title();echo " | ";bloginfo('name');
	} elseif (is_search() ) {
		echo "搜索结果"; echo " | "; bloginfo('name');
	} elseif (is_404() ) {
		echo '页面未找到!';
	} else {
		wp_title('',true);echo " | ";bloginfo('name');
	} ?></title>

<link rel="alternate" type="application/rss+xml" title="RSS 2.0 - 所有文章" href="<?php echo $feed; ?>" />
<link rel="alternate" type="application/rss+xml" title="RSS 2.0 - 所有评论" href="<?php bloginfo('comments_rss2_url'); ?>" />

<!-------------------------
-
-  Stylesheets 
-
--------------------------->
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/top.css" type="text/css"/>
<link rel="stylesheet" id="vendor-style-css" href="<?php bloginfo('template_url'); ?>/css/vendor.css" type="text/css" media="all">
<link rel='stylesheet' id='wp-block-library-css'  href="<?php bloginfo('template_url'); ?>/css/style.min.css" type='text/css' media='all' />

<style id="mactype-style">
  .mactype-popup { font-size: 14px!important }
  *:not(pre) { -webkit-text-stroke: 0.3px !important; text-stroke: 0.3px !important }
  ::selection { color: #fff;background: #338fff }
</style>
<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>

<!-------------------------
-
-  JavaScripts 
-
--------------------------->
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/vendor.js" id="vendor-js"></script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/top.js" id="home-script-js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js">
<!-- css开发相关js -->
<script src="https://unpkg.com/spacingjs" defer></script>
<!-- End css开发相关js -->
<script>
        (function(){
            var ua = navigator.userAgent

            var sp = ua.indexOf('iPhone') > -1 ||
                (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)

            var tab = !sp && (
                ua.indexOf('iPad') > -1 ||
                (ua.indexOf('Macintosh') > -1 && 'ontouchend' in document) ||
                ua.indexOf('Android') > -1
            )

            if (tab) {
                var element = document.querySelector('[name="viewport"]')
                element.setAttribute('content', 'width=1280')
			}
        })()
	</script>
<?php wp_head(); ?>
</head>

<?php flush(); ?>

<body id="body" class="home blog hfeed">
<header>
	    <div class="header-container">
        <h1>
          <img src="<?php bloginfo('template_url'); ?>/img/common/h_title.png" width="1024" height="106" alt="東方よもやまニュース" class="pc">
			    <img src="<?php bloginfo('template_url'); ?>/img/common/sp/h_title.png" width="620" height="64" alt="東方よもやまニュース" class="sp">
          <div class="sp-menu-btn">
            <img src="<?php bloginfo('template_url'); ?>/img/common/sp/h_menu_btn.png" width="70" height="70" alt="menu" class="menu">
          </div>
        </h1>
        <ul class="header-menu-pc">
          <li class="yomoyama_news jump news_header"><a title="<?php bloginfo('name'); ?>"  href="<?php echo get_option('home'); ?>/">主页</a></li>
          <?php wp_list_pages('depth=1&title_li=0&sort_column=menu_order'); ?>  
        </ul>
        <div class="header-menu-sp">
            <div class="sp-close-btn">
                <a href="/">
                    <img src="<?php bloginfo('template_url'); ?>/img/common/sp/h_close_btn.png" width="70" height="70" alt="CLOSE">
                </a>
            </div>
            <ul>
                <li>
                    <a href="<?php echo get_option('home'); ?>/" data-tracking="yomoyama_news,jump,news_header">
                      <span>主页</span>
                    </a>
                </li>
                <?php wp_list_pages('depth=1&title_li=0&sort_column=menu_order'); ?>  
            </ul>
        </div>
    </div>
</header>
