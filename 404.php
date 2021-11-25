<?php 
header("HTTP/1.1 404 Not Found");
get_header(); 
?>
	<!-- Column 1 /Content -->
  <script>
      document.getElementById('body').className = '';
      document.getElementById('body').className = 'news-template-default single single-news postid-<?php the_ID(); ?>';
  </script>
  <script type='text/javascript' src="<?php bloginfo('template_url'); ?>/js/detail.js" id='detail-script-js'></script>
  <link rel='stylesheet' id='detail-style-css'  href="<?php bloginfo('template_url'); ?>/css/detail.css" type='text/css' media='all' />
  <main>
	<div class="content-background">
    <style>
      .content-left{
        margin:0 auto;
        text-align:center;
      }
      .content{
        margin: 100px auto;
      }
      .retrun{
        text-align:center;
        margin: 10px auto;
      }
      .retrun a{
        color: #fff;
        background: url(<?php bloginfo('template_url'); ?>/img/common/h_menu.png) top no-repeat;
        width: 105px;
        height: 37px;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
       
      }

    </style>
		<div class="content">
    <div class="content-left">
        <article class="news type-news status-publish has-post-thumbnail hentry news_categories-game">
        	<div class="border-wrapper">
        		<div class="article-detail">
              <h2>404啦！</h2>
            <img src="<?php bloginfo('template_url'); ?>/img/common/404.png">
            <p>只要是力所能及的事情都应该自己去完成，这就是我们的本职。</p>
              <p>——博丽灵梦 《东方幻想乡世界》</p>
        		</div>
            <p>所以，还请您配合我们返回呢！</p>
            <div class="retrun">
              <center>
              <a href="<?php bloginfo('url'); ?>">
                返回
              </a>
              </center>
            </div>
        	</div>
          <br>
          <br>
          <br>
          <br>
          <br>
        </article>
      </div>
			<!-- #secondary -->
		</div>
	</div>
</main>

<?php get_footer(); ?>