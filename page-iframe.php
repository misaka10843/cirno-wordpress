<?php 
/*
Template Name: 嵌入页面
*/

get_header(); 
?>
<?php if (have_posts()) : the_post(); update_post_caches($posts); ?>
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
      .article-detail iframe{
          width: 900px;
          width: 100%;
        }
      @media screen and (max-width:640px) {
        .article-detail iframe{
          width: 900px;
          width: 100%;
        }
      }

    </style>
		<div class="content">
    <div class="content-left">
        <article class="news type-news status-publish has-post-thumbnail hentry news_categories-game">
        	<div class="border-wrapper">
        		<div class="article-detail">
              <h2><?php the_title(); ?></h2>
              <?php the_content(); ?>
            </div>
        	</div>
          
        </article>
        <br>
          <br>
          <br>
          <br>
          <br>
      </div>
			<!-- #secondary -->
		</div>
	</div>
</main>
    <?php endif; ?>
<?php get_footer(); ?>