<?php 
/*
Template Name: 文章(新闻)总页面
*/

get_header(); 
$leixin = get_the_content();
$gonggaoID = "2";
?>
<main>
    <div class="slider"></div>
			<div class="content-background">
				<div class="container">
					<h2 class="title-latest-news">
						<span class="disp-none">
							<?php single_post_title(); ?>
						</span>
					</h2>
					<section class="news-list">
						<ul class="line-up-list large-first">
            <?php $animetime = 0; ?>
            <?php
              if($leixin == "<p>all</p>"){
                $leixin = 0;
              }else{
                $leixin = findNum($leixin);
                $leixin = (int)$leixin;
              }
              $args = array(
                  'cat' => $leixin,
                  'paged' => $paged,
                  'posts_per_page' => 13,
              );
              $wp_query = new WP_Query($args);

              if ($wp_query->have_posts()):
                  while ($wp_query->have_posts()):$wp_query->the_post();
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
                    echo($category[0]->cat_name.$category[0]->cat);?>
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
              <?php 
                  endwhile;
              endif;
              wp_reset_postdata();
              ?>
						</ul>
            <style>
              .home main section.news-list .paging {
                display: flex;
              }
              .home main section.news-list {
                  padding-bottom: 0px;
              }
              .paging ul.page-numbers a, .paging ul.page-numbers span {
                color: #fff;
                text-decoration: none;
              }
            </style>
						<div class="paging">
            <?php
              mo_paging();
            ?>
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