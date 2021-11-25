<!-- Footer -->
<footer>
	<div class="footer-container">
		<ul class="footer-link1">
      <li <?php if (is_home()) { echo 'class="current"';} ?>>
        <a class="yomoyama_news jump news_footer"  href="<?php echo get_option('home'); ?>/">
          主页
        </a>
      </li>
      <?php wp_list_pages('depth=1&title_li=0&sort_column=menu_order'); ?>
		</ul>
		<div class="footer-twitter-btn-pc btn-hover">
			<a href="https://twitter.com/Touhou_Yomoyama" target="_blank" class="yomoyama_news jump twitter_footer">
				<img src="<?php bloginfo('template_url'); ?>/img/common/footer_twitter_btn.png"
				width="238" height="64" alt="東方よもやまニュース公式Twitter">
			</a>
		</div>
		<div class="footer-twitter-btn-sp">
			<a href="https://twitter.com/Touhou_Yomoyama" target="_blank" class="yomoyama_news jump twitter_footer">
				<img src="<?php bloginfo('template_url'); ?>/img/common/sp/footer_twitter_btn.png"
				width="325" height="86" alt="東方よもやまニュース公式Twitter">
			</a>
		</div>
		<div class="footer-question-btn-pc btn-hover">
			<a href="https://shanghai-alice.zendesk.com/hc/ja/requests/new/" target="_blank"
			class="yomoyama_news jump quer_form_footer">
				<img src="<?php bloginfo('template_url'); ?>/img/common/footer_question_btn.png"
				width="202" height="36" alt="お問い合わせ">
			</a>
		</div>
		<div class="footer-question-btn-sp">
			<a href="https://shanghai-alice.zendesk.com/hc/ja/requests/new/" target="_blank"
			class="yomoyama_news jump quer_form_footer">
				<img src="<?php bloginfo('template_url'); ?>/img/common/sp/h_question_btn.png"
				width="260" height="46" alt="お問い合わせ">
			</a>
		</div>
		<p class="copyright">
			©<?php bloginfo('name'); ?>
		</p>
	</div>
	<a href="#" class="btn-page-top btn-hover" class="yomoyama_news jump page_top">
		<img src="<?php bloginfo('template_url'); ?>/img/common/btn_page_top.png"
		width="72px" height="63px" alt="PAGE_TOPへ">
	</a>
</footer>
</div>
<!--end wrapper-->
<?php wp_footer(); ?>
</body>
</html>