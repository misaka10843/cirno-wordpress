<?php get_header(); ?>
	<!-- Column 1 /Content -->
	<?php if (have_posts()) : the_post(); update_post_caches($posts); ?>
  <script>
      document.getElementById('body').className = '';
      document.getElementById('body').className = 'news-template-default single single-news postid-<?php the_ID(); ?>';
  </script>
  <script type='text/javascript' src="<?php bloginfo('template_url'); ?>/js/detail.js" id='detail-script-js'></script>
  <link rel='stylesheet' id='detail-style-css'  href="<?php bloginfo('template_url'); ?>/css/detail.css" type='text/css' media='all' />
  <main>
	<div class="content-background">
		<div class="content">
    <div class="content-left">
        <h3 class="title">
        	<span class="disp-none">
        		news
        	</span>
        </h3>
        <article id="post-<?php the_ID(); ?>" class="post-<?php the_ID(); ?> news type-news status-publish has-post-thumbnail hentry news_categories-game">
        	<div class="article-meta">
        		<p class="product-category">
            <?php $category = get_the_category();
            echo($category[0]->cat_name);?>
        		</p>
        		<ul class="article-share-btn">
        			<li>
              <?php 
                    $medium_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium'); 
                    if(!$medium_image_url[0]){
                      $imgurl = "http://action.sakurakoyi.top:10010/api/acg.php";
                    }else{
                      $imgurl = $medium_image_url[0];
                    }
              ?>
        				<a href="https://connect.qq.com/widget/shareqq/index.html?url=<?php the_permalink(); ?>&title=<?php the_title(); ?>&source=<?php bloginfo('url'); ?>&summary=我在<?php bloginfo('name'); ?>发现了好东西qwq&pics=<?php echo($imgurl);?>"
        				target="_blank" class="article-share-btn-facebook btn-hover">
        					<span class="disp-none">
        						Facebook
        					</span>
        				</a>
        			</li>
        		</ul>
        	</div>
        	<p class="post-date">
          <?php the_time('Y.n.j') ?>&nbsp;<?php the_author(); ?>
        	</p>
        	<div class="border-wrapper">
        		<h2>
            <?php the_title(); ?>
        		</h2>
        	</div>
        	<div class="border-wrapper">
        		<div class="article-detail">
            <?php the_content(); ?>
        		</div>
        	</div>
        </article>
        <a href="/news/" class="detail-all-news-btn btn-hover">
        	<span class="disp-none">
        		ニュース一覧
        	</span>
        </a>
      </div>
			<aside id="secondary" class="widget-area secondary" role="complementary">
				<h4>
					<span class="disp-none">
						最新ニュース
					</span>
				</h4>
				<ul class="line-up-list">
        	<?php
          wp_reset_query();
        		$posts = get_posts('numberposts=6&orderby=post_date');
        		foreach($posts as $post) {
        			setup_postdata($post);
              ?>
              <li class="run undefined">
              <a href="<?php the_permalink(); ?>" target="_self" class="hover-border-efct">
                <div class="lineup-title-box">
                  <p class="lineup-title">
                  <?php $category = get_the_category();
                    echo($category[0]->cat_name);?>
                  </p>
                </div>
                <?php 
                    $medium_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium'); 
                    if(!$medium_image_url[0]){
                      $imgurl[1] = "http://action.sakurakoyi.top:10010/api/acgimg/dongfang/1.png";
                      $imgurl[2] = "http://action.sakurakoyi.top:10010/api/acgimg/dongfang/2.png";
                      $imgurl[3] = "http://action.sakurakoyi.top:10010/api/acgimg/dongfang/3.png";
                      $imgurl[4] = "http://action.sakurakoyi.top:10010/api/acgimg/dongfang/4.png";
                      $imgurl[5] = "http://action.sakurakoyi.top:10010/api/acgimg/dongfang/5.png";
                      $imgurl[6] = "http://action.sakurakoyi.top:10010/api/acgimg/dongfang/6.png";
                      $imgurl[7] = "http://action.sakurakoyi.top:10010/api/acgimg/dongfang/7.png";

                    $imgurl = $imgurl[rand(1,7)];
                    }else{
                      $imgurl = $medium_image_url[0];
                    }
              ?>
                <img src="<?php echo($imgurl);?>">
                <div class="lineup-post-box">
                  <p class="post-title" data-row-cnt="2">
                  <?php the_title(); ?>
                  </p>
                  <p class="post-date">
                  <?php the_time('Y.n.j') ?>
                  </p>
                </div>
              </a>
            </li>
            <?php
        		}
        		$post = $posts[0];
        	  ?>
				</ul>
			</aside>
			<!-- #secondary -->
		</div>
	</div>
</main>
<?php else : ?>
<div class="errorbox">
	没有文章！
</div>
<?php endif; ?>

<?php get_footer(); ?>