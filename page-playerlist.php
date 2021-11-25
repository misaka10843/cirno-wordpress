<?php 
/*
Template Name: 玩家列表页面
*/

get_header(); 
?>
<?php if (have_posts()) : the_post(); update_post_caches($posts); ?>
	<!-- Column 1 /Content -->
  <script>
      document.getElementById('body').className = '';
      document.getElementById('body').className = 'news-template-default single single-news postid-<?php the_ID(); ?>';
      //获取数据
			getplayerinfo();
      setInterval("getplayerinfo()", 10000);
			function getplayerinfo() {
				$(function() {
					$.ajax({
            //防止跨域问题
						url: "http://action.sakurakoyi.top:10010/api/json?url=http://cirnocraft.xyz:11451/up/world/world/",
						data: "",
						Type: "get",
						dataType: "json",
						success: function(res) {
							$("#playerlist").empty() 
              $("#playerlist").prepend("<thead><tr><th>名称</th><th>坐标</th><th>生命</th><th>盔甲值</th></tr></thead>");
							for (var playerinfo in res.players) {
								$("#playerlist").append("<tr>" + "<th><img src='http://cirnocraft.xyz:11451/tiles/faces/32x32/"+ res.players[playerinfo].account +".png'> " + res.players[playerinfo].name + "</th>" + "<th><font color='red'>" + res.players[playerinfo].x + "</font> <font color='blue'>" + res.players[playerinfo].y + "</font> <font color='green'>" + res.players[playerinfo].z + "</font></th>" + "<th><img src='https://patchwiki.biligame.com/images/mc/3/37/5p1f9fhs2v5m9g5s0p15bgf3x2westw.png' height='15px'> " + res.players[playerinfo].health + "</th>" + "<th><img src='https://patchwiki.biligame.com/images/mc/b/b1/e1mkzkfjoupify3ncxc6avevul832u7.svg' height='15px'> " + res.players[playerinfo].armor + "</th>" + "</tr>");
							}
						},
						error: function(err) {
							alert(JSON.stringify(err));
						}
					})
				})
			}
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
      table {
      	border-collapse: collapse;
      	border-spacing: 0;
      }
      
      td,th {
      	padding: 0;
      }
      
      #playerlist {
      	border-collapse: collapse;
      	border-spacing: 0;
      	empty-cells: show;
      	border: 1px solid #cbcbcb;
        text-align: center;
      }
      
      #playerlist caption {
      	color: #000;
      	font: italic 85%/1 arial,sans-serif;
      	padding: 1em 0;
      	text-align: center;
      }
      
      #playerlist td,#playerlist th {
      	border-left: 1px solid #cbcbcb;
      	border-width: 0 0 0 1px;
      	font-size: inherit;
      	margin: 0;
      	overflow: visible;
      	padding: .5em 1em;
        text-align: center;
      }
      
      #playerlist thead {
      	background-color: #6495ED;
      	color: #fff;
      	text-align: left;
      	vertical-align: bottom;
      }
      
      #playerlist td {
      	background-color: transparent;
      }
      #playerlist img {
        width: 16px;
        height: 16px;
        margin: 0 0;
      }
      .content-left .news .bgimg{
        position: absolute; 
        right: 0; 
        bottom: 0;
        width: 90px;
        height: auto;
        z-index: -1;
        margin: 0 0;
      }
      main .content .content-left article {
        z-index: -10;
      }
      @media screen and (max-width:640px) {
        main .content .content-left article {
        z-index: -10;
        }
      }
    </style>
		<div class="content">
    <div class="content-left">
        <article class="news type-news status-publish has-post-thumbnail hentry news_categories-game">
          <div class="border-wrapper">
        		<h2>
            <?php the_title(); ?>
        		</h2>
        	</div>
        	<div class="border-wrapper">
        		<div class="article-detail">
              <p>此页面中所有数据都是由"网页地图"插件提供的API</p>
              <p>为了防止服务器过载，我们只会10s刷新一次数据</p>
              <hr>
            		<table id="playerlist">
            		</table>
            </div>
        	</div>
          <img class="bgimg" src="https://i.loli.net/2021/11/24/4AHq7fKWBEyumvI.png" alt="⑨">
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