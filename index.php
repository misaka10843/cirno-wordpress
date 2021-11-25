<?php get_header(); ?>
		<main>
    <div class="slider"></div>
    <div class="top-pickup-container">
	    <div class="top-pickup-title">
	    </div>
	    <ul class="top-pickup">
      <?php
      //这里是设置公告的分类ID
        $gonggaoID = "2";
        $args=array(  
          'cat' => $gonggaoID,   // 分类ID  
          'posts_per_page' => 2, // 显示篇数  
          );
          query_posts($args);
        
      ?>
      <?php if( have_posts() ) : ?>
      <?php while(have_posts()) : the_post(); ?>
	    	<li class="run official">
	    		<a href="<?php the_permalink() ?>" class="hover-border-efct">
	    			<div class="lineup-post-box">
	    				<p class="post-title" data-row-cnt="2">
                <?php the_title(); ?>
	    				</p>
	    			</div>
	    			<div class="lineup-title-box">
	    				<p class="lineup-title">
              <?php $category = get_the_category();
              echo($category[0]->cat_name);?>
	    				</p>
	    				<p class="post-date">
              <?php echo get_the_time('Y.m.d');?>&nbsp;<?php the_author(); ?>
	    				</p>
	    			</div>
	    			  <?php 
                echo get_avatar( get_the_author_email(),50,'','作者',array('class'=>array('official-mark')));
              ?>
	    		</a>
	    	</li>
        <?php endwhile;?>
        <?php 
          endif; 
          //抛掉上面获取的所有内容防止与下面起冲突
          wp_reset_query();
        ?>
	    </ul>
    </div>
			<div class="content-background">
				<div class="container">
					<h2 class="title-latest-news">
						<span class="disp-none">
							LATEST NEWS
						</span>
					</h2>
					<section class="news-list">
						<ul class="line-up-list large-first">
            <?php $animetime = 0; ?>
            <?php
            $posts = get_posts('numberposts=13&orderby=post_date');
        		foreach($posts as $post) {
        			setup_postdata($post);
              ?>
            <?php
              unset($isofficial);
              $category = get_the_category();
              if(json_encode($category[0]->cat_ID) == $gonggaoID){
                $isofficial = "official";
              }
            ?> 
							<li class="l1 <?php echo($isofficial); ?> run" style="animation-delay: 0s;">
								<a href="<?php the_permalink(); ?>">
									<div class="lineup-title-box">
										<p class="lineup-title">
                    <?php 
                    echo($category[0]->cat_name);?>
										</p>
									</div>
                  <?php 
                    $medium_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium'); 
                    if(!$medium_image_url[0]){
                      $imgurl = "http://action.sakurakoyi.top:10010/api/acg.php";
                    }else{
                      $imgurl = $medium_image_url[0];
                    }
                  ?>
									<img src="<?php echo($imgurl);?>" />
									<div class="lineup-post-box">
										<p class="post-title" data-row-cnt="2">
                    <?php the_title(); ?>
										</p>
										<p class="post-date">
                    <?php the_time('Y.n.j') ?>&nbsp;<?php the_author(); ?>
										</p>
									</div>
								</a>
							</li>
              <?php } ?>
						</ul>
						<div class="paging">
						</div>
					</section>
				</div>
			</div>
		</main>
    <section class="pick-up secondary" id="secondary">
    		<div class="container">
    			<h2><span class="disp-none">PICK UP</span></h2>
    			<ul class="pickup-list is_slick"></ul>
    		</div>
    </section>
<?php get_footer(); ?>