---
layout: default
title: تماس با ما
description: "راه‌های ارتباطی و فرم تماس موسسه ماهان اسپیناس"
---
<section class="page-hero section-tight">
  <div class="container narrow">
    <span class="section-kicker">تماس</span>
    <h1>ارتباط با موسسه و ثبت درخواست</h1>
    <p>این صفحه برای نمایش آدرس، شماره تماس، اینستاگرام و دریافت پیام‌های متقاضیان طراحی شده است.</p>
  </div>
</section>
<section class="section">
  <div class="container contact-shell">
    <article class="info-card">
      <h2>راه‌های ارتباطی</h2>
      <p>{{ site.data.site.address }}</p>
      <p>{{ site.data.site.phone }}</p>
      <p><a target="_blank" rel="noopener noreferrer" href="{{ site.data.site.instagram }}">صفحه اینستاگرام موسسه</a></p>
    </article>
    <form class="contact-card">
      <label for="name">نام و نام خانوادگی</label>
      <input id="name" type="text" placeholder="نام شما">
      <label for="phone">شماره تماس</label>
      <input id="phone" type="text" placeholder="09xxxxxxxxx">
      <label for="message">پیام</label>
      <textarea id="message" rows="4" placeholder="درخواست یا سوال شما"></textarea>
      <button type="button" class="link-cta">ارسال درخواست</button>
    </form>
  </div>
</section>
